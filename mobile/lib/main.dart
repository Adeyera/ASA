import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'services/api_service.dart';
import 'services/auth_provider.dart';
import 'screens/home_screen.dart';
import 'screens/catalog_screen.dart';
import 'screens/artwork_detail_screen.dart';
import 'screens/ar_viewer_screen.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        Provider(create: (_) => ApiService()),
      ],
      child: const AfricanArtApp(),
    ),
  );
}

class AfricanArtApp extends StatelessWidget {
  const AfricanArtApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Heritage AR',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0A0A0F),
        colorScheme: ColorScheme.dark(
          primary: const Color(0xFFD4A853),
          secondary: const Color(0xFFE8C46A),
          surface: const Color(0xFF12121A),
          error: const Color(0xFFE85A5A),
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.transparent,
          elevation: 0,
        ),
        fontFamily: 'Inter',
        textTheme: const TextTheme(
          headlineLarge: TextStyle(
            fontFamily: 'Playfair Display',
            fontSize: 32,
            fontWeight: FontWeight.w700,
          ),
          headlineMedium: TextStyle(
            fontFamily: 'Playfair Display',
            fontSize: 24,
            fontWeight: FontWeight.w600,
          ),
          bodyLarge: TextStyle(fontSize: 16),
          bodyMedium: TextStyle(fontSize: 14, color: Color(0xFF8888A0)),
        ),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const HomeScreen(),
        '/catalog': (context) => const CatalogScreen(),
        '/login': (context) => const LoginScreen(),
      },
      onGenerateRoute: (settings) {
        if (settings.name == '/artwork') {
          final artworkId = settings.arguments as String;
          return MaterialPageRoute(
            builder: (_) => ArtworkDetailScreen(artworkId: artworkId),
          );
        }
        if (settings.name == '/ar-viewer') {
          final args = settings.arguments as Map<String, dynamic>;
          return MaterialPageRoute(
            builder: (_) => ARViewerScreen(
              artworkId: args['artworkId'],
              imageUrl: args['imageUrl'],
              width: args['width'],
              height: args['height'],
              artworkModelUri: args['artworkModelUri'],
              title: args['title'] ?? 'Artwork',
            ),
          );
        }
        return null;
      },
    );
  }
}
