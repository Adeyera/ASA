import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/auth_provider.dart';
import '../services/api_service.dart';
import '../models/artwork.dart';
import 'login_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Artwork> _artworks = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _loadArtworks();
  }

  Future<void> _loadArtworks() async {
    try {
      final api = ApiService();
      final data = await api.getArtworks();
      final list = (data['artworks'] as List)
          .map((e) => Artwork.fromJson(e as Map<String, dynamic>))
          .toList();
      setState(() {
        _artworks = list;
        _loading = false;
      });
    } catch (_) {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final auth = context.watch<AuthProvider>();

    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 180,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              background: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF0A0A0F), Color(0xFF1A1A2E)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                ),
                child: SafeArea(
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Heritage AR',
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineLarge
                                  ?.copyWith(
                                    color: const Color(0xFFD4A853),
                                  ),
                            ),
                            if (!auth.isLoggedIn)
                              TextButton(
                                onPressed: () =>
                                    Navigator.pushNamed(context, '/login'),
                                child: const Text('Sign In'),
                              )
                            else
                              PopupMenuButton<String>(
                                icon: CircleAvatar(
                                  radius: 16,
                                  backgroundColor: const Color(0xFFD4A853),
                                  child: Text(
                                    auth.user!.name[0].toUpperCase(),
                                    style: const TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w700,
                                    ),
                                  ),
                                ),
                                onSelected: (value) {
                                  if (value == 'logout') auth.logout();
                                },
                                itemBuilder: (_) => [
                                  PopupMenuItem(
                                    value: 'profile',
                                    child: Text(auth.user!.name),
                                  ),
                                  const PopupMenuItem(
                                    value: 'logout',
                                    child: Text('Logout'),
                                  ),
                                ],
                              ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        Text(
                          'Discover African Art',
                          style: Theme.of(context).textTheme.headlineLarge,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.all(16),
            sliver: SliverToBoxAdapter(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Featured Artworks',
                        style: Theme.of(context).textTheme.headlineMedium,
                      ),
                      TextButton(
                        onPressed: () =>
                            Navigator.pushNamed(context, '/catalog'),
                        child: const Text('See All'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                ],
              ),
            ),
          ),
          if (_loading)
            const SliverFillRemaining(
              child: Center(child: CircularProgressIndicator()),
            )
          else
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              sliver: SliverList(
                delegate: SliverChildBuilderDelegate(
                  (context, index) {
                    final artwork = _artworks[index];
                    return _ArtworkCard(
                      artwork: artwork,
                      onTap: () => Navigator.pushNamed(context, '/artwork',
                          arguments: artwork.id),
                      onAR: () => Navigator.pushNamed(context, '/ar-viewer',
                          arguments: {
                            'artworkId': artwork.id,
                            'imageUrl':
                                artwork.images.isNotEmpty ? artwork.images.first.url : '',
                            'width': artwork.dimensions.width,
                            'height': artwork.dimensions.height,
                          }),
                    );
                  },
                  childCount: _artworks.length,
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _ArtworkCard extends StatelessWidget {
  final Artwork artwork;
  final VoidCallback onTap;
  final VoidCallback onAR;

  const _ArtworkCard({
    required this.artwork,
    required this.onTap,
    required this.onAR,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 16),
        decoration: BoxDecoration(
          color: const Color(0xFF12121A),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.white.withOpacity(0.08)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius:
                  const BorderRadius.vertical(top: Radius.circular(16)),
              child: AspectRatio(
                aspectRatio: 16 / 10,
                child: Container(
                  color: const Color(0xFF1A1A2E),
                  child: artwork.images.isNotEmpty
                      ? Image.network(
                          artwork.images.first.url,
                          fit: BoxFit.cover,
                          errorBuilder: (_, __, ___) => const Center(
                            child: Icon(Icons.broken_image,
                                color: Color(0xFF55556A)),
                          ),
                          loadingBuilder: (_, child, progress) =>
                              progress == null
                                  ? child
                                  : const Center(
                                      child: CircularProgressIndicator()),
                        )
                      : const Center(
                          child: Icon(Icons.image, color: Color(0xFF55556A)),
                        ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    artwork.title,
                    style: const TextStyle(
                      fontFamily: 'Playfair Display',
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    artwork.medium,
                    style: const TextStyle(
                      color: Color(0xFF8888A0),
                      fontSize: 13,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        '\$${artwork.price.usd.toStringAsFixed(0)}',
                        style: const TextStyle(
                          color: Color(0xFFD4A853),
                          fontSize: 20,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      IconButton(
                        icon: const Icon(Icons.view_in_ar),
                        color: const Color(0xFFD4A853),
                        onPressed: onAR,
                        tooltip: 'View in AR',
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
