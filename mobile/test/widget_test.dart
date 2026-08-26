import 'package:flutter_test/flutter_test.dart';
import 'package:african_art_marketplace/main.dart';

void main() {
  testWidgets('App loads and displays title', (WidgetTester tester) async {
    await tester.pumpWidget(const AfricanArtApp());
    expect(find.text('Heritage AR'), findsOneWidget);
  });
}
