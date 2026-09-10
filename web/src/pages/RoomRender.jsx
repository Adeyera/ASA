import React, { useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artworks, API_BASE } from '../services/api';
import { resolveImageUrl } from '../utils/imageUrl';



export default function RoomRender() {
  const { id } = useParams();
  const stageRef = useRef(null);
  const markerRef = useRef(null);
  const fileRef = useRef(null);
  const [artwork, setArtwork] = useState(null);
  const [roomSrc, setRoomSrc] = useState(null);
  const [resultSrc, setResultSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Upload a room photo to begin.');
  const [statusType, setStatusType] = useState('');
  const [pos, setPos] = useState(null);
  const [scale, setScale] = useState(1);
  const [drag, setDrag] = useState(null);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await artworks.getById(id);
        setArtwork(data.artwork);
      } catch {
        setStatus('Failed to load artwork');
        setStatusType('warn');
      }
    };
    fetch();
  }, [id]);

  const rawArtImg = artwork?.images?.[0]?.url || artwork?.thumbnail || '';
  const artImgUrl = resolveImageUrl(rawArtImg);


  const roomBase64 = useCallback(() => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const maxW = 1280;
        const sc = Math.min(1, maxW / img.naturalWidth);
        const c = document.createElement('canvas');
        c.width = img.naturalWidth * sc;
        c.height = img.naturalHeight * sc;
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL('image/jpeg', 0.9).split(',')[1]);
      };
      img.onerror = () => reject(new Error('Failed to load room photo'));
      img.src = roomSrc;
    });
  }, [roomSrc]);

  const artworkPng = useCallback(() => {
    // Helper: draw artwork with a faux frame onto a canvas and return base64
    const drawFramed = (img) => {
      const c = document.createElement('canvas');
      const pad = 18;
      c.width = img.naturalWidth + pad * 2;
      c.height = img.naturalHeight + pad * 2;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#3a2c1c';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#1c140c';
      ctx.fillRect(pad - 3, pad - 3, img.naturalWidth + 6, img.naturalHeight + 6);
      ctx.drawImage(img, pad, pad, img.naturalWidth, img.naturalHeight);
      return c.toDataURL('image/png').split(',')[1];
    };

    return new Promise((resolve, reject) => {
      // First try loading with crossOrigin so the canvas isn't tainted
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          resolve(drawFramed(img));
        } catch (e) {
          reject(new Error('Failed to process artwork image'));
        }
      };
      img.onerror = () => {
        // CORS rejected — fetch through our backend image proxy to bypass CORS
        const proxyUrl = `${API_BASE}/render/image-proxy?url=${encodeURIComponent(artImgUrl)}`;
        fetch(proxyUrl)
          .then((r) => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.blob();
          })
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            const img2 = new Image();
            img2.onload = () => {
              try {
                resolve(drawFramed(img2));
              } catch (e) {
                reject(new Error('Failed to process artwork image'));
              } finally {
                URL.revokeObjectURL(url);
              }
            };
            img2.onerror = () => {
              URL.revokeObjectURL(url);
              reject(new Error('Artwork image could not be loaded'));
            };
            img2.src = url;
          })
          .catch(() => reject(new Error('Artwork image could not be fetched — check the image URL')));
      };
      img.src = artImgUrl;
    });
  }, [artImgUrl]);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setRoomSrc(URL.createObjectURL(f));
    setResultSrc(null);
    setPos(null);
    setScale(1);
    setStatus('Drag the marker to where you would hang the piece, then render.');
    setStatusType('ok');
  };

  const handlePointerDown = (e) => {
    if (!markerRef.current) return;
    markerRef.current.setPointerCapture(e.pointerId);
    const r = stageRef.current.getBoundingClientRect();
    const mx = pos?.x ?? r.width / 2;
    const my = pos?.y ?? r.height * 0.46;
    setDrag({ dx: e.clientX - r.left - mx, dy: e.clientY - r.top - my, startX: mx, startY: my });
  };

  const handlePointerMove = (e) => {
    if (!drag || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left - drag.dx, y: e.clientY - r.top - drag.dy });
  };

  const handlePointerUp = () => {
    setDrag(null);
  };

  const handleWheel = (e) => {
    if (!roomSrc) return;
    e.preventDefault();
    setScale((s) => Math.max(0.4, Math.min(2.5, s + (e.deltaY < 0 ? 0.08 : -0.08))));
  };

  const renderClick = async () => {
    if (!roomSrc) return;
    setLoading(true);
    setResultSrc(null);
    try {
      const r1 = await roomBase64();
      const a1 = await artworkPng();
      const stage = stageRef.current;
      const px = pos?.x ?? stage.clientWidth / 2;
      const py = pos?.y ?? stage.clientHeight * 0.46;
      const nx = +(px / stage.clientWidth).toFixed(3);
      const ny = +(py / stage.clientHeight).toFixed(3);

      // Use actual artwork dimensions (fallback to reasonable defaults)
      const realW = artwork?.dimensions?.width || 60;
      const realH = artwork?.dimensions?.height || 78;

      const payload = JSON.stringify({
        roomBase64: r1,
        artBase64: a1,
        position: { x: nx, y: ny },
        dimensionsCm: { w: Math.round(realW * scale), h: Math.round(realH * scale) },
        mimeType: 'image/jpeg',
      });

      // Retry up to 2 times — Render free tier may need a cold-start wake-up
      let res;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          res = await fetch(`${API_BASE}/render/render-room`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
          });
          break; // success — exit retry loop
        } catch (fetchErr) {
          if (attempt === 0) {
            setStatus('Server is waking up — retrying in a few seconds…');
            setStatusType('');
            await new Promise((r) => setTimeout(r, 4000));
          } else {
            throw fetchErr;
          }
        }
      }

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        let msg = j.detail || j.error;
        // Server wraps Gemini ApiError JSON inside `message`; try to unwrap.
        if (j.message) {
          try {
            const inner = JSON.parse(j.message);
            msg = inner?.error?.message || j.message;
          } catch {
            msg = j.message;
          }
        }
        throw new Error(msg || `Server error (HTTP ${res.status})`);
      }

      const j = await res.json();
      setResultSrc(`data:${j.mimeType || 'image/png'};base64,${j.imageBase64}`);
      setStatus('Rendered — photorealistic composite from Gemini.');
      setStatusType('ok');
    } catch (err) {
      const reason = err.message || String(err) || 'Unknown error';
      const isNetworkErr = reason === 'Failed to fetch' || reason.includes('NetworkError');
      if (isNetworkErr) {
        setStatus('Cannot reach the server — it may be starting up. Please try again in 30 seconds.');
      } else if (reason.includes('GEMINI_API_KEY not configured')) {
        setStatus('GEMINI_API_KEY is not set in the server environment.');
      } else {
        setStatus(`Render failed: ${reason}`);
      }
      setStatusType('warn');
    } finally {
      setLoading(false);
    }
  };

  const resetClick = () => {
    setResultSrc(null);
    setStatus('Reposition the marker and render again.');
    setStatusType('ok');
  };

  const saveClick = () => {
    const a = document.createElement('a');
    a.href = resultSrc;
    a.download = `${artwork?.title || 'artwork'}-on-my-wall.png`;
    a.click();
  };

  return (
    <div className="render-page">
      <div className="render-header">
        <Link to={`/artwork/${id}`} className="render-back">← Back to artwork</Link>
        <h1>View it on <em>your wall</em></h1>
        <p className="render-subtitle">Photorealistic AI preview powered by Gemini</p>
      </div>

      <div className="render-layout">
        <div className="render-stage-col">
          <div
            ref={stageRef}
            className="render-stage"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onWheel={handleWheel}
            style={{ touchAction: 'none' }}
          >
            {!roomSrc && !resultSrc && (
              <div className="render-placeholder">
                <div className="render-placeholder-icon">🖼️</div>
                <p>Upload a photo of your room to see how this artwork would look on your wall.</p>
                <button className="btn-upload" onClick={() => fileRef.current?.click()}>
                  Choose a photo
                </button>
              </div>
            )}

            {roomSrc && (
              <img src={roomSrc} alt="Your room" className="render-room-img" style={{ display: resultSrc ? 'none' : 'block' }} />
            )}

            {roomSrc && !resultSrc && (
              <div
                ref={markerRef}
                className="render-marker"
                style={{
                  left: pos?.x ?? '50%',
                  top: pos?.y ?? '46%',
                  width: `${64 * scale}px`,
                  height: `${84 * scale}px`,
                }}
              />
            )}

            {resultSrc && (
              <>
                <img src={resultSrc} alt="Rendered result" className="render-result-img" />
                <div className="render-badge">✦ Gemini render</div>
              </>
            )}

            {loading && (
              <div className="render-loader">
                <div className="render-spinner" />
                <p>Hanging it on your wall...</p>
              </div>
            )}
          </div>
        </div>

        <div className="render-panel">
          <div className="render-group">
            <h3>Your space</h3>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
            <button className="render-btn" onClick={() => fileRef.current?.click()} disabled={!!resultSrc}>
              ↑ Choose a photo of your room
            </button>
            <p className="render-hint">Drag the dashed marker to position the artwork. Scroll over it to resize.</p>
          </div>

          <div className="render-artwork-info">
            {artwork && (
              <>
                <img src={artImgUrl} alt={artwork.title} className="render-artwork-thumb" />
                <div>
                  <div className="render-artwork-title">{artwork.title}</div>
                  <div className="render-artwork-meta">
                    {artwork.dimensions?.width} × {artwork.dimensions?.height} {artwork.dimensions?.unit}
                  </div>
                </div>
              </>
            )}
          </div>

          {!resultSrc ? (
            <button
              className="render-btn render-btn-primary"
              onClick={renderClick}
              disabled={!roomSrc || loading}
            >
              {loading ? 'Rendering...' : '✦ Render photorealistically'}
            </button>
          ) : (
            <div className="render-actions">
              <button className="render-btn render-btn-primary" onClick={saveClick}>
                ↓ Save this preview
              </button>
              <button className="render-btn" onClick={resetClick}>
                ↻ Back to placement
              </button>
            </div>
          )}

          <div className={`render-status ${statusType}`}>{status}</div>

          {artwork && (
            <div className="render-meta">
              <div className="render-meta-title">{artwork.title}</div>
              <div>{artwork.artist?.name || 'Unknown'} · {artwork.medium}</div>
              <div className="render-meta-price">
                ${artwork.price?.usd?.toLocaleString()} · ₦{artwork.price?.ngn?.toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .render-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .render-header {
          margin-bottom: 24px;
        }

        .render-back {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .render-back:hover {
          color: var(--color-accent);
        }

        .render-header h1 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 12px;
        }

        .render-header h1 em {
          color: var(--color-accent);
          font-style: italic;
        }

        .render-subtitle {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .render-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }

        .render-stage-col {
          min-height: 0;
        }

        .render-panel {
          position: sticky;
          top: 100px;
        }

        .render-stage {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .render-placeholder {
          text-align: center;
          color: var(--color-text-muted);
          padding: 40px;
          max-width: 380px;
        }

        .render-placeholder-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .render-placeholder p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .btn-upload {
          padding: 10px 24px;
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-upload:hover {
          border-color: var(--color-accent);
        }

        .render-room-img,
        .render-result-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #0e0c0a;
        }

        .render-result-img {
          z-index: 5;
        }

        .render-marker {
          position: absolute;
          border: 2px dashed var(--color-accent);
          background: rgba(212, 180, 131, 0.12);
          border-radius: 2px;
          cursor: grab;
          z-index: 4;
          touch-action: none;
          transform: translate(-50%, -50%);
          pointer-events: auto;
        }

        .render-marker::after {
          content: '⤢';
          position: absolute;
          right: -2px;
          bottom: -6px;
          color: var(--color-accent);
          font-size: 14px;
        }

        .render-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 6;
          font-size: 0.75rem;
          letter-spacing: 1px;
          background: rgba(0, 0, 0, 0.6);
          color: var(--color-accent);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(212, 180, 131, 0.4);
        }

        .render-loader {
          position: absolute;
          inset: 0;
          z-index: 7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 16px;
          background: rgba(14, 12, 10, 0.85);
          color: var(--color-accent);
        }

        .render-spinner {
          width: 42px;
          height: 42px;
          border: 3px solid rgba(212, 180, 131, 0.4);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: renderSpin 0.9s linear infinite;
        }

        @keyframes renderSpin {
          to { transform: rotate(360deg); }
        }

        .render-loader p {
          font-size: 0.85rem;
        }

        .render-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .render-group h3 {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .render-btn {
          width: 100%;
          padding: 12px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .render-btn:hover:not(:disabled) {
          border-color: var(--color-accent);
          background: var(--glass-bg);
        }

        .render-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .render-btn-primary {
          background: var(--color-accent);
          color: var(--color-bg);
          border-color: var(--color-accent);
          font-weight: 600;
        }

        .render-btn-primary:hover:not(:disabled) {
          background: var(--color-accent-light);
          border-color: var(--color-accent-light);
        }

        .render-hint {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .render-artwork-info {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--color-bg-card);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }

        .render-artwork-thumb {
          width: 48px;
          height: 48px;
          border-radius: 4px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .render-artwork-title {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .render-artwork-meta {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .render-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .render-status {
          font-size: 0.8rem;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          line-height: 1.5;
          border: 1px solid var(--color-border);
          background: var(--color-bg-card);
          color: var(--color-text-muted);
        }

        .render-status.ok {
          border-color: rgba(127, 174, 107, 0.4);
          color: var(--color-success, #7fae6b);
        }

        .render-status.warn {
          border-color: rgba(192, 101, 58, 0.45);
          color: #e09a72;
        }

        .render-meta {
          border-top: 1px solid var(--color-border);
          padding-top: 16px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .render-meta-title {
          color: var(--color-text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .render-meta-price {
          color: var(--color-accent);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .render-layout {
            grid-template-columns: 1fr;
          }
          .render-panel {
            position: static;
            top: auto;
          }
          .render-header h1 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 600px) {
          .render-page {
            padding: 84px 16px 48px;
          }
          .render-stage {
            aspect-ratio: 3 / 4;
            min-height: 320px;
          }
          .render-panel {
            padding: 18px;
          }
          .render-placeholder {
            padding: 24px;
          }
          .render-placeholder-icon {
            font-size: 2.4rem;
          }
        }
      `}</style>
    </div>
  );
}
