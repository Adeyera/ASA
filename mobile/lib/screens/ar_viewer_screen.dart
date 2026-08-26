import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:vector_math/vector_math_64.dart' as vm;
import '../services/api_service.dart';

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

class ARViewerScreen extends StatefulWidget {
  final String artworkId;
  final String imageUrl;
  final double width;
  final double height;
  final String? artworkModelUri;
  final String title;

  const ARViewerScreen({
    super.key,
    required this.artworkId,
    required this.imageUrl,
    required this.width,
    required this.height,
    this.artworkModelUri,
    this.title = 'Artwork',
  });

  @override
  State<ARViewerScreen> createState() => _ARViewerScreenState();
}

class _ARViewerScreenState extends State<ARViewerScreen> {
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
      showPlanes: true,
      showWorldOrigin: false,
      handlePans: true,
      handleRotation: true,
    );
    _objects.onInitialize();

    _session.onPlaneOrPointTap = _onTap;
    _objects.onPanChange = _onPan;
  }

  Future<void> _onTap(List<ARHitTestResult> hits) async {
    try {
      final hit = hits.firstWhere(
        (h) => h.type == ARHitTestResultType.plane,
        orElse: () => hits.isNotEmpty ? hits.first : (throw 'no hit'),
      );

      final anchor = ARPlaneAnchor(transformation: hit.worldTransform);
      final anchored = await _anchors.addAnchor(anchor);
      if (anchored != true) {
        _say('Could not place here, try a flatter part of the wall');
        return;
      }
      _placed.add(anchor);

      final w = widget.width / 100.0;
      final h = widget.height / 100.0;

      final modelUri = widget.artworkModelUri;
      if (modelUri != null && modelUri.isNotEmpty) {
        final node = ARNode(
          type: NodeType.webGLB,
          uri: modelUri,
          scale: vm.Vector3(w, h, 1.0),
          rotation: vm.Vector4(1.0, 0.0, 0.0, 0.0),
          position: vm.Vector3(0.0, 0.0, 0.0),
        );
        final added = await _objects.addNode(node, planeAnchor: anchor);
        if (added == true) {
          _nodes.add(node);
          _say('${widget.title} placed at ${widget.width.round()} x ${widget.height.round()} cm');
        } else {
          _say('Render failed, check the model URL');
        }
      } else {
        _say('No 3D model available for this artwork');
      }
    } catch (_) {
      _say('Point at a wall and try again');
    }
  }

  void _onPan(List<ARNode> pannedNodes) {}

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

  Future<void> _addToCart() async {
    try {
      final api = ApiService();
      await api.saveARSession({
        'artwork': widget.artworkId,
        'placement': {
          'wallWidth': widget.width,
          'wallHeight': widget.height,
        },
        'roomType': 'custom',
        'deviceInfo': {'platform': 'mobile', 'ar': 'arcore_arkit'},
        'isCompleted': true,
      });
      _say('"${widget.title}" added to cart');
    } catch (_) {
      _say('Failed to save session');
    }
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
            child: Row(
              children: [
                Expanded(
                  child: Text(_hint,
                      style: const TextStyle(color: Color(0xFFE8CFA0), fontSize: 13)),
                ),
                GestureDetector(
                  onTap: () => Navigator.pop(context),
                  child: const Icon(Icons.close, color: Color(0xFFE8CFA0), size: 20),
                ),
              ],
            ),
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
                _btn(Icons.refresh, 'Clear', _removeAll),
                _btn(Icons.shopping_bag_outlined, 'Add to cart', _addToCart, filled: true),
              ],
            ),
          ),
        ),
      );

  Widget _btn(IconData icon, String label, VoidCallback onTap, {bool filled = false}) =>
      GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 13),
          decoration: BoxDecoration(
            color: filled ? const Color(0xFFD4B483) : const Color(0xCC17130F),
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: const Color(0x66D4B483)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 18, color: filled ? const Color(0xFF1C140C) : const Color(0xFFE8CFA0)),
              const SizedBox(width: 8),
              Text(label,
                  style: TextStyle(
                      color: filled ? const Color(0xFF1C140C) : const Color(0xFFE8CFA0),
                      fontWeight: FontWeight.w600,
                      fontSize: 13)),
            ],
          ),
        ),
      );
}
