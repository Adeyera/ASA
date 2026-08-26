// ar_wall_placement.dart
//
// Real-time AR wall placement using ar_flutter_plugin
// (ARCore on Android, ARKit on iOS) from a single Flutter codebase.
//
// What it does:
//  - opens an AR camera session with VERTICAL plane detection (walls)
//  - shows detected planes so the user knows where they can place
//  - on tap, anchors the artwork flat against the wall at its real-world size
//  - lets the user pan to reposition and pinch to nudge scale
//
// The artwork is rendered as a thin textured "canvas" via a glb model whose
// texture is the artwork image. See SETUP.md for how to generate that glb
// per-artwork (image -> textured quad). For a first run you can point
// `artworkModelUri` at any hosted .glb to prove the pipeline end to end.

import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:vector_math/vector_math_64.dart' as vm;

import 'package:ar_flutter_plugin/ar_flutter_plugin.dart';
import 'package:ar_flutter_plugin/managers/ar_session_manager.dart';
import 'package:ar_flutter_plugin/managers/ar_object_manager.dart';
import 'package:ar_flutter_plugin/managers/ar_anchor_manager.dart';
import 'package:ar_flutter_plugin/managers/ar_location_manager.dart';
import 'package:ar_flutter_plugin/datatypes/config_planedetection.dart';
import 'package:ar_flutter_plugin/datatypes/node_types.dart';
import 'package:ar_flutter_plugin/datatypes/hittest_result_types.dart';
import 'package:ar_flutter_plugin/models/ar_node.dart';
import 'package:ar_flutter_plugin/models/ar_anchor.dart';
import 'package:ar_flutter_plugin/models/ar_hittest_result.dart';

class ArWallPlacement extends StatefulWidget {
  const ArWallPlacement({
    super.key,
    required this.artworkModelUri,
    this.widthCm = 60,
    this.heightCm = 78,
    this.title = 'Spirit of the Sahel',
  });

  /// A .glb whose mesh is a 1m x 1m quad textured with the artwork image.
  /// We scale it to the real artwork size below.
  final String artworkModelUri;
  final double widthCm;
  final double heightCm;
  final String title;

  @override
  State<ArWallPlacement> createState() => _ArWallPlacementState();
}

class _ArWallPlacementState extends State<ArWallPlacement> {
  late ARSessionManager _session;
  late ARObjectManager _objects;
  late ARAnchorManager _anchors;

  final List<ARNode> _nodes = [];
  final List<ARAnchor> _placed = [];
  String _hint = 'Point at a wall to detect it, then tap to hang the piece';

  @override
  void dispose() {
    _session.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0E0C0A),
      body: Stack(
        children: [
          ARView(
            onARViewCreated: _onCreated,
            // VERTICAL = walls. Use .both if you also want floors/tables.
            planeDetectionConfig: PlaneDetectionConfig.vertical,
          ),
          _hintBar(),
          _controls(),
        ],
      ),
    );
  }

  void _onCreated(
    ARSessionManager sessionManager,
    ARObjectManager objectManager,
    ARAnchorManager anchorManager,
    ARLocationManager locationManager,
  ) {
    _session = sessionManager;
    _objects = objectManager;
    _anchors = anchorManager;

    _session.onInitialize(
      showFeaturePoints: false,
      showPlanes: true, // draws the detected wall so the user sees the target
      showWorldOrigin: false,
      handlePans: true, // drag a placed piece to reposition
      handleRotation: true,
    );
    _objects.onInitialize();

    _session.onPlaneOrPointTap = _onTap;
    _objects.onPanChange = _onPan;
  }

  Future<void> _onTap(List<ARHitTestResult> hits) async {
    final hit = hits.firstWhere(
      (h) => h.type == ARHitTestResultType.plane,
      orElse: () => hits.isNotEmpty ? hits.first : (throw 'no hit'),
    );

    // Anchor to the wall where the user tapped.
    final anchor = ARPlaneAnchor(transformation: hit.worldTransform);
    final anchored = await _anchors.addAnchor(anchor);
    if (anchored != true) {
      _say('Could not place here, try a flatter part of the wall');
      return;
    }
    _placed.add(anchor);

    // Real-world size: glb quad is 1m, so scale = metres.
    final w = widget.widthCm / 100.0;
    final h = widget.heightCm / 100.0;

    final node = ARNode(
      type: NodeType.webGLB,
      uri: widget.artworkModelUri,
      scale: vm.Vector3(w, h, 1.0),
      // Lay it flat against the vertical plane.
      rotation: vm.Vector4(1.0, 0.0, 0.0, 0.0),
      position: vm.Vector3(0.0, 0.0, 0.0),
    );

    final added = await _objects.addNode(node, planeAnchor: anchor);
    if (added == true) {
      _nodes.add(node);
      _say('${widget.title} placed at ${widget.widthCm.round()} x ${widget.heightCm.round()} cm');
    } else {
      _say('Render failed, check the model URL');
    }
  }

  void _onPan(List<ARNode> pannedNodes) {
    // ar_flutter_plugin updates node transforms during a pan automatically;
    // this hook is here if you want to clamp movement to the wall plane,
    // snap to a grid, or read the live position for an "add to cart" payload.
  }

  Future<void> _removeAll() async {
    for (final n in _nodes) {
      await _objects.removeNode(n);
    }
    for (final a in _placed) {
      await _anchors.removeAnchor(a);
    }
    _nodes.clear();
    _placed.clear();
    _say('Cleared, point at a wall to place again');
  }

  void _say(String msg) => setState(() => _hint = msg);

  Widget _hintBar() => Positioned(
        top: 0, left: 0, right: 0,
        child: SafeArea(
          child: Container(
            margin: const EdgeInsets.all(12),
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: const Color(0xCC17130F),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0x66D4B483)),
            ),
            child: Text(_hint,
                style: const TextStyle(color: Color(0xFFE8CFA0), fontSize: 13)),
          ),
        ),
      );

  Widget _controls() => Positioned(
        bottom: 0, left: 0, right: 0,
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _btn('Clear', Icons.refresh, _removeAll),
                _btn('Add to cart', Icons.shopping_bag_outlined, () {
                  _say('"${widget.title}" added to cart from AR view (demo)');
                }, filled: true),
              ],
            ),
          ),
        ),
      );

  Widget _btn(String label, IconData icon, VoidCallback onTap,
          {bool filled = false}) =>
      GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 13),
          decoration: BoxDecoration(
            color: filled ? const Color(0xFFD4B483) : const Color(0xCC17130F),
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: const Color(0x66D4B483)),
          ),
          child: Row(children: [
            Icon(icon, size: 18, color: filled ? const Color(0xFF1C140C) : const Color(0xFFE8CFA0)),
            const SizedBox(width: 8),
            Text(label,
                style: TextStyle(
                    color: filled ? const Color(0xFF1C140C) : const Color(0xFFE8CFA0),
                    fontWeight: FontWeight.w600,
                    fontSize: 13)),
          ]),
        ),
      );
}
