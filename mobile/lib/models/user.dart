class User {
  final String id;
  final String name;
  final String email;
  final String role;
  final String? avatar;
  final String? bio;
  final Map<String, String>? location;
  final bool isVerified;

  User({
    required this.id,
    required this.name,
    required this.email,
    this.role = 'buyer',
    this.avatar,
    this.bio,
    this.location,
    this.isVerified = false,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['_id'] ?? json['id'] ?? '',
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      role: json['role'] ?? 'buyer',
      avatar: json['avatar'],
      bio: json['bio'],
      location: json['location'] != null
          ? Map<String, String>.from(json['location'])
          : null,
      isVerified: json['isVerified'] ?? false,
    );
  }

  Map<String, dynamic> toJson() => {
    'name': name,
    'email': email,
    'role': role,
    'avatar': avatar,
  };
}
