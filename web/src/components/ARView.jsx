import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';

// True WebXR AR: surface detection via hit-test, tap to anchor artwork
// at real-world scale (cm -> meters). Requires HTTPS + ARCore-capable
// Android Chrome (or any browser with immersive-ar support).

function buildArtworkGroup(artwork, texture) {
  const CM = 0.01;
  const w = (artwork.dimensions?.width || 50) * CM;
  const h = (artwork.dimensions?.height || 50) * CM;
  const frameDepth = 0.03;
  const frameThickness = 0.035;
  const matWidth = 0.04; // white gallery mat between art and frame

  const group = new THREE.Group();

  // Artwork print. Lit material so estimated room lighting affects it
  // and it blends with surrounding objects instead of glowing flat.
  const art = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.85, metalness: 0 })
  );
  art.position.z = frameDepth / 2 + 0.002;
  group.add(art);

  // White mat board behind/around the print
  const matW = w + matWidth * 2;
  const matH = h + matWidth * 2;
  const mat = new THREE.Mesh(
    new THREE.PlaneGeometry(matW, matH),
    new THREE.MeshStandardMaterial({ color: 0xf5f2ea, roughness: 0.95 })
  );
  mat.position.z = frameDepth / 2 + 0.001;
  group.add(mat);

  // Wooden frame (4 bars) around the mat
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x5c4530,
    roughness: 0.55,
    metalness: 0.05,
  });
  const bars = [
    // [width, height, x, y]
    [matW + frameThickness * 2, frameThickness, 0, matH / 2 + frameThickness / 2],
    [matW + frameThickness * 2, frameThickness, 0, -matH / 2 - frameThickness / 2],
    [frameThickness, matH, -matW / 2 - frameThickness / 2, 0],
    [frameThickness, matH, matW / 2 + frameThickness / 2, 0],
  ];
  bars.forEach(([bw, bh, x, y]) => {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(bw, bh, frameDepth),
      frameMat
    );
    bar.position.set(x, y, 0);
    group.add(bar);
  });

  // Backing board
  const back = new THREE.Mesh(
    new THREE.BoxGeometry(matW, matH, frameDepth * 0.6),
    new THREE.MeshStandardMaterial({ color: 0x3a3128, roughness: 0.9 })
  );
  back.position.z = -frameDepth * 0.2;
  group.add(back);

  group.userData.height = matH + frameThickness * 2;
  return group;
}

// The XR session is created by the caller inside the button's click
// handler (user activation requirement) and passed in as a prop, along
// with the dom-overlay root element the session was created with.
export default function ARView({ artwork, session, overlayRoot, onClose }) {
  const [error, setError] = useState('');
  const [placed, setPlaced] = useState(false);
  const [tracking, setTracking] = useState(false);
  const sessionRef = useRef(null);
  const placedRef = useRef(false);

  useEffect(() => {
    let renderer;
    let cancelled = false;

    const onSessionEnd = () => {
      sessionRef.current = null;
      onClose?.();
    };

    const start = async () => {
      sessionRef.current = session;
      session.addEventListener('end', onSessionEnd);

      // Normalize absolute backend URLs (mixed content / wrong host on
      // phone) to relative paths served through the Vite proxy.
      const rawUrl = artwork.images?.[0]?.url || artwork.thumbnail || '';
      const imgUrl = rawUrl.replace(/^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+):\d+/, '');
      let texture;
      try {
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');
        texture = await loader.loadAsync(imgUrl);
        texture.colorSpace = THREE.SRGBColorSpace;
      } catch {
        setError('Could not load artwork image for AR.');
        session.end().catch(() => {});
        return;
      }
      if (cancelled) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20
      );

      // Fallback lights, swapped out when real-world light estimation kicks in.
      const defaultLights = new THREE.Group();
      defaultLights.add(new THREE.HemisphereLight(0xffffff, 0xbbbb99, 1.2));
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(0.5, 1, 0.25);
      defaultLights.add(dir);
      scene.add(defaultLights);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.xr.enabled = true;
      renderer.domElement.style.position = 'fixed';
      renderer.domElement.style.inset = '0';
      renderer.domElement.style.zIndex = '9999';
      document.body.appendChild(renderer.domElement);

      // Match virtual lighting to the real room (ARCore light estimation).
      const xrLight = new XREstimatedLight(renderer);
      xrLight.addEventListener('estimationstart', () => {
        scene.add(xrLight);
        scene.remove(defaultLights);
        if (xrLight.environment) scene.environment = xrLight.environment;
      });
      xrLight.addEventListener('estimationend', () => {
        scene.add(defaultLights);
        scene.remove(xrLight);
        scene.environment = null;
      });

      // Reticle: ring shown on detected surface
      const reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.07, 0.09, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xd9a441 })
      );
      reticle.matrixAutoUpdate = false;
      reticle.visible = false;
      scene.add(reticle);

      const artworkGroup = buildArtworkGroup(artwork, texture);
      artworkGroup.visible = false;
      scene.add(artworkGroup);

      // Three defaults to 'local-floor', which many AR devices reject.
      renderer.xr.setReferenceSpaceType('local');
      await renderer.xr.setSession(session);

      // Anchor: ties placement to a tracked real-world point so the
      // artwork stays put as ARCore refines its world map (no drift).
      let lastHit = null;
      let anchor = null;
      const anchorOffset = new THREE.Vector3();

      const controller = renderer.xr.getController(0);
      controller.addEventListener('select', () => {
        if (!reticle.visible) return;
        const hitPos = new THREE.Vector3().setFromMatrixPosition(reticle.matrix);
        // Hit-test pose Y axis = surface normal.
        const normal = new THREE.Vector3()
          .setFromMatrixColumn(reticle.matrix, 1)
          .normalize();

        if (Math.abs(normal.y) < 0.5) {
          // Wall: hang flush against it, kept upright (no roll).
          artworkGroup.position.copy(hitPos).addScaledVector(normal, 0.005);
          artworkGroup.up.set(0, 1, 0);
          artworkGroup.lookAt(hitPos.clone().add(normal));
        } else {
          // Floor/table: stand upright at the hit point, facing the viewer.
          const h = artworkGroup.userData.height || 0.5;
          artworkGroup.position.copy(hitPos);
          artworkGroup.position.y += h / 2;
          const camPos = new THREE.Vector3().setFromMatrixPosition(
            camera.matrixWorld
          );
          camPos.y = artworkGroup.position.y;
          artworkGroup.up.set(0, 1, 0);
          artworkGroup.lookAt(camPos);
        }
        artworkGroup.visible = true;
        placedRef.current = true;
        setPlaced(true);

        // Re-anchor to the tracked hit point.
        anchorOffset.copy(artworkGroup.position).sub(hitPos);
        if (anchor) {
          anchor.delete?.();
          anchor = null;
        }
        if (lastHit?.createAnchor) {
          lastHit
            .createAnchor()
            .then((a) => {
              anchor = a;
            })
            .catch(() => {});
        }
      });
      scene.add(controller);

      const refSpace = await session.requestReferenceSpace('local');
      const viewerSpace = await session.requestReferenceSpace('viewer');
      const hitTestSource = await session.requestHitTestSource({
        space: viewerSpace,
      });

      // Smoothed reticle pose (raw hit poses jitter frame to frame).
      const targetM = new THREE.Matrix4();
      const curPos = new THREE.Vector3();
      const curQuat = new THREE.Quaternion();
      const tgtPos = new THREE.Vector3();
      const tgtQuat = new THREE.Quaternion();
      const one = new THREE.Vector3(1, 1, 1);
      let hasPose = false;
      let isTracking = false;

      renderer.setAnimationLoop((_, frame) => {
        if (frame) {
          // Keep artwork glued to its anchor as tracking refines.
          if (anchor && placedRef.current) {
            const aPose = frame.getPose(anchor.anchorSpace, refSpace);
            if (aPose) {
              const p = aPose.transform.position;
              artworkGroup.position
                .set(p.x, p.y, p.z)
                .add(anchorOffset);
            }
          }

          const hits = frame.getHitTestResults(hitTestSource);
          if (hits.length > 0) {
            lastHit = hits[0];
            const pose = hits[0].getPose(refSpace);
            targetM.fromArray(pose.transform.matrix);
            tgtPos.setFromMatrixPosition(targetM);
            tgtQuat.setFromRotationMatrix(targetM);
            if (!hasPose) {
              curPos.copy(tgtPos);
              curQuat.copy(tgtQuat);
              hasPose = true;
            } else {
              curPos.lerp(tgtPos, 0.35);
              curQuat.slerp(tgtQuat, 0.35);
            }
            reticle.matrix.compose(curPos, curQuat, one);
            reticle.visible = !placedRef.current;
            if (!isTracking) {
              isTracking = true;
              setTracking(true);
            }
          } else {
            reticle.visible = false;
            hasPose = false;
          }
        }
        renderer.render(scene, camera);
      });
    };

    start();

    return () => {
      // Do NOT end the session here: React StrictMode runs this cleanup
      // immediately after the first mount, and an XRSession cannot be
      // restarted. The session is owned and ended by the parent.
      cancelled = true;
      session.removeEventListener('end', onSessionEnd);
      if (renderer) {
        renderer.setAnimationLoop(null);
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ui = (
    <div className="ar-overlay">
      {error ? (
        <div className="ar-error">
          <p>{error}</p>
          <button className="ar-btn" onClick={() => onClose?.()}>
            Back
          </button>
        </div>
      ) : (
        <>
          <div className="ar-status">
            {!tracking
              ? 'Move your phone slowly to scan surfaces...'
              : placed
                ? 'Placed at real size. Tap again to move it.'
                : 'Point at a wall or floor, then tap to place'}
          </div>
          <button
            className="ar-btn ar-exit"
            onClick={() => sessionRef.current?.end()}
          >
            Exit AR
          </button>
        </>
      )}
      <style>{`
        .ar-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          pointer-events: none;
        }
        .ar-status {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 0.85rem;
          white-space: nowrap;
          backdrop-filter: blur(4px);
        }
        .ar-btn {
          pointer-events: auto;
          padding: 12px 28px;
          border-radius: 24px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .ar-exit {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
        }
        .ar-error {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          padding: 24px;
          text-align: center;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );

  // dom-overlay only shows the element passed at session creation, so
  // the UI must live inside that root.
  return overlayRoot ? createPortal(ui, overlayRoot) : ui;
}
