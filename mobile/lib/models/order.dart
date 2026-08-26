class OrderItem {
  final String artwork;
  final String title;
  final double ngnPrice;
  final double usdPrice;
  final int quantity;
  final String? image;

  OrderItem({
    required this.artwork,
    required this.title,
    required this.ngnPrice,
    required this.usdPrice,
    this.quantity = 1,
    this.image,
  });

  factory OrderItem.fromJson(Map<String, dynamic> json) {
    return OrderItem(
      artwork: json['artwork'] ?? '',
      title: json['title'] ?? '',
      ngnPrice: (json['price']?['ngn'] ?? 0).toDouble(),
      usdPrice: (json['price']?['usd'] ?? 0).toDouble(),
      quantity: json['quantity'] ?? 1,
      image: json['image'],
    );
  }
}

class Order {
  final String id;
  final String buyerId;
  final String artistId;
  final List<OrderItem> items;
  final double totalNgn;
  final double totalUsd;
  final String status;
  final String paymentStatus;
  final DateTime createdAt;

  Order({
    required this.id,
    required this.buyerId,
    required this.artistId,
    required this.items,
    required this.totalNgn,
    required this.totalUsd,
    this.status = 'Pending',
    this.paymentStatus = 'Unpaid',
    DateTime? createdAt,
  }) : createdAt = createdAt ?? DateTime.now();

  factory Order.fromJson(Map<String, dynamic> json) {
    return Order(
      id: json['_id'] ?? '',
      buyerId: json['buyer'] ?? '',
      artistId: json['artist'] ?? '',
      items: (json['items'] as List<dynamic>?)
              ?.map((e) => OrderItem.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      totalNgn: (json['totalAmount']?['ngn'] ?? 0).toDouble(),
      totalUsd: (json['totalAmount']?['usd'] ?? 0).toDouble(),
      status: json['status'] ?? 'Pending',
      paymentStatus: json['paymentStatus'] ?? 'Unpaid',
      createdAt: json['createdAt'] != null
          ? DateTime.parse(json['createdAt'])
          : null,
    );
  }
}
