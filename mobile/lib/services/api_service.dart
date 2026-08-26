import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:5050/api';

  Future<Map<String, String>> _headers() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    return {
      'Content-Type': 'application/json',
      if (token != null) 'Authorization': 'Bearer $token',
    };
  }

  Future<Map<String, dynamic>> get(String endpoint,
      {Map<String, String>? params}) async {
    final uri = Uri.parse('$baseUrl$endpoint')
        .replace(queryParameters: params);
    final response = await http.get(uri, headers: await _headers());
    return _handleResponse(response);
  }

  Future<Map<String, dynamic>> post(String endpoint,
      {Map<String, dynamic>? body}) async {
    final response = await http.post(
      Uri.parse('$baseUrl$endpoint'),
      headers: await _headers(),
      body: body != null ? jsonEncode(body) : null,
    );
    return _handleResponse(response);
  }

  Future<Map<String, dynamic>> put(String endpoint,
      {Map<String, dynamic>? body}) async {
    final response = await http.put(
      Uri.parse('$baseUrl$endpoint'),
      headers: await _headers(),
      body: body != null ? jsonEncode(body) : null,
    );
    return _handleResponse(response);
  }

  Future<Map<String, dynamic>> delete(String endpoint) async {
    final response = await http.delete(
      Uri.parse('$baseUrl$endpoint'),
      headers: await _headers(),
    );
    return _handleResponse(response);
  }

  Map<String, dynamic> _handleResponse(http.Response response) {
    final data = jsonDecode(response.body) as Map<String, dynamic>;
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return data;
    } else {
      throw ApiException(
        statusCode: response.statusCode,
        message: data['message'] as String? ?? 'Unknown error',
      );
    }
  }

  // Auth
  Future<Map<String, dynamic>> login(String email, String password) {
    return post('/auth/login', body: {'email': email, 'password': password});
  }

  Future<Map<String, dynamic>> signup(
      String name, String email, String password, String role) {
    return post('/auth/signup',
        body: {'name': name, 'email': email, 'password': password, 'role': role});
  }

  Future<Map<String, dynamic>> getProfile() {
    return get('/auth/me');
  }

  // Artworks
  Future<Map<String, dynamic>> getArtworks({int page = 1, String? style}) {
    final params = <String, String>{'page': '$page', 'limit': '20'};
    if (style != null && style != 'All') params['style'] = style;
    return get('/artworks', params: params);
  }

  Future<Map<String, dynamic>> getArtwork(String id) {
    return get('/artworks/$id');
  }

  // Orders
  Future<Map<String, dynamic>> createOrder(Map<String, dynamic> data) {
    return post('/orders', body: data);
  }

  Future<Map<String, dynamic>> getOrders() {
    return get('/orders');
  }

  // AR Sessions
  Future<Map<String, dynamic>> saveARSession(Map<String, dynamic> data) {
    return post('/ar-sessions', body: data);
  }

  Future<Map<String, dynamic>> getARSessions(String artworkId) {
    return get('/ar-sessions/artwork/$artworkId');
  }
}

class ApiException implements Exception {
  final int statusCode;
  final String message;

  ApiException({required this.statusCode, required this.message});

  @override
  String toString() => 'ApiException($statusCode): $message';
}
