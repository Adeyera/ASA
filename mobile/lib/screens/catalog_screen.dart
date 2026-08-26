import 'package:flutter/material.dart';
import '../services/api_service.dart';
import '../models/artwork.dart';

class CatalogScreen extends StatefulWidget {
  const CatalogScreen({super.key});

  @override
  State<CatalogScreen> createState() => _CatalogScreenState();
}

class _CatalogScreenState extends State<CatalogScreen> {
  final _api = ApiService();
  List<Artwork> _artworks = [];
  bool _loading = true;
  int _page = 1;
  bool _hasMore = true;
  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _loadArtworks();
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    if (_scrollController.position.pixels >=
            _scrollController.position.maxScrollExtent - 200 &&
        !_loading &&
        _hasMore) {
      _loadMore();
    }
  }

  Future<void> _loadArtworks() async {
    setState(() => _loading = true);
    try {
      final data = await _api.getArtworks(page: _page);
      final list = (data['artworks'] as List)
          .map((e) => Artwork.fromJson(e as Map<String, dynamic>))
          .toList();
      setState(() {
        _artworks = list;
        _hasMore = list.length >= 20;
        _loading = false;
      });
    } catch (_) {
      setState(() => _loading = false);
    }
  }

  Future<void> _loadMore() async {
    setState(() => _loading = true);
    _page++;
    try {
      final data = await _api.getArtworks(page: _page);
      final list = (data['artworks'] as List)
          .map((e) => Artwork.fromJson(e as Map<String, dynamic>))
          .toList();
      setState(() {
        _artworks.addAll(list);
        _hasMore = list.length >= 20;
        _loading = false;
      });
    } catch (_) {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Catalog'),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          _page = 1;
          await _loadArtworks();
        },
        child: GridView.builder(
          controller: _scrollController,
          padding: const EdgeInsets.all(16),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 0.7,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
          ),
          itemCount: _artworks.length + (_loading ? 4 : 0),
          itemBuilder: (context, index) {
            if (index >= _artworks.length) {
              return const Card(
                color: Color(0xFF12121A),
                child: Center(child: CircularProgressIndicator()),
              );
            }
            final artwork = _artworks[index];
            return GestureDetector(
              onTap: () => Navigator.pushNamed(context, '/artwork',
                  arguments: artwork.id),
              child: Card(
                color: const Color(0xFF12121A),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: ClipRRect(
                        borderRadius:
                            const Vertical(radius: 12),
                        child: Container(
                          color: const Color(0xFF1A1A2E),
                          child: artwork.images.isNotEmpty
                              ? Image.network(
                                  artwork.images.first.url,
                                  fit: BoxFit.cover,
                                  errorBuilder: (_, __, ___) =>
                                      const Icon(Icons.broken_image,
                                          color: Color(0xFF55556A)),
                                )
                              : const Center(
                                  child: Icon(Icons.image,
                                      color: Color(0xFF55556A)),
                                ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            artwork.title,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              fontWeight: FontWeight.w600,
                              fontSize: 14,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            '\$${artwork.price.usd.toStringAsFixed(0)}',
                            style: const TextStyle(
                              color: Color(0xFFD4A853),
                              fontWeight: FontWeight.w700,
                              fontSize: 16,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
