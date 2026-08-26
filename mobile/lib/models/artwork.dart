class ArtworkImage {
  final String url;
  final String alt;

  ArtworkImage({required this.url, this.alt = ''});

  factory ArtworkImage.fromJson(Map<String, dynamic> json) {
    return ArtworkImage(
      url: json['url'] ?? '',
      alt: json['alt'] ?? '',
    );
  }
}

class ArtworkDimensions {
  final double height;
  final double width;
  final double depth;
  final String unit;

  ArtworkDimensions({
    required this.height,
    required this.width,
    this.depth = 0,
    this.unit = 'cm',
  });

  factory ArtworkDimensions.fromJson(Map<String, dynamic> json) {
    return ArtworkDimensions(
      height: (json['height'] ?? 0).toDouble(),
      width: (json['width'] ?? 0).toDouble(),
      depth: (json['depth'] ?? 0).toDouble(),
      unit: json['unit'] ?? 'cm',
    );
  }

  double get widthInMeters => unit == 'cm' ? width / 100 : width * 0.0254;
  double get heightInMeters => unit == 'cm' ? height / 100 : height * 0.0254;
}

class ArtworkPrice {
  final double ngn;
  final double usd;

  ArtworkPrice({required this.ngn, required this.usd});

  factory ArtworkPrice.fromJson(Map<String, dynamic> json) {
    return ArtworkPrice(
      ngn: (json['ngn'] ?? 0).toDouble(),
      usd: (json['usd'] ?? 0).toDouble(),
    );
  }
}

class Artwork {
  final String id;
  final String title;
  final String description;
  final String medium;
  final String style;
  final List<ArtworkImage> images;
  final String? thumbnail;
  final ArtworkPrice price;
  final ArtworkDimensions dimensions;
  final String status;
  final List<String> tags;
  final String? artistName;
  final String? artistId;
  final bool isFeatured;
  final int viewCount;
  final DateTime createdAt;

  Artwork({
    required this.id,
    required this.title,
    required this.description,
    required this.medium,
    required this.style,
    required this.images,
    this.thumbnail,
    required this.price,
    required this.dimensions,
    this.status = 'Active',
    this.tags = const [],
    this.artistName,
    this.artistId,
    this.isFeatured = false,
    this.viewCount = 0,
    DateTime? createdAt,
  }) : createdAt = createdAt ?? DateTime.now();

  factory Artwork.fromJson(Map<String, dynamic> json) {
    return Artwork(
      id: json['_id'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      medium: json['medium'] ?? '',
      style: json['style'] ?? '',
      images: (json['images'] as List<dynamic>?)
              ?.map((e) => ArtworkImage.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      thumbnail: json['thumbnail'],
      price: ArtworkPrice.fromJson(json['price'] as Map<String, dynamic>),
      dimensions:
          ArtworkDimensions.fromJson(json['dimensions'] as Map<String, dynamic>),
      status: json['status'] ?? 'Active',
      tags: (json['tags'] as List<dynamic>?)?.map((e) => e.toString()).toList() ?? [],
      artistName: json['artist'] is Map ? json['artist']['name'] : null,
      artistId: json['artist'] is Map ? json['artist']['_id'] : null,
      isFeatured: json['isFeatured'] ?? false,
      viewCount: json['viewCount'] ?? 0,
      createdAt: json['createdAt'] != null
          ? DateTime.parse(json['createdAt'])
          : null,
    );
  }
}
