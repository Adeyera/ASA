# Flutter AR module — setup (ARCore + ARKit)

This is the real, native AR path: live camera, wall (plane) detection, and the
artwork anchored to the wall at its true physical size. One Dart codebase drives
ARCore on Android and ARKit on iOS through `ar_flutter_plugin`.

## 1. Dependencies

In `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  ar_flutter_plugin: ^0.7.3        # ARCore + ARKit bridge
  vector_math: ^2.1.4              # Vector3 / Vector4 for transforms
```

> If `ar_flutter_plugin` is stale on your Flutter version, the maintained forks
> `ar_flutter_plugin_engine` or `ar_flutter_plugin_updated` are drop-in. The
> newer pure-Dart `augen` package is an alternative with built-in plane
> detection and image tracking if you hit native build friction.

Then:

```bash
flutter pub get
cd ios && pod install && cd ..   # iOS only
```

## 2. Android (ARCore)

`android/app/src/main/AndroidManifest.xml` — inside `<manifest>`:

```xml
<uses-permission android:name="android.permission.CAMERA"/>
<uses-feature android:name="android.hardware.camera.ar" android:required="true"/>
```

Inside `<application>`:

```xml
<meta-data android:name="com.google.ar.core" android:value="required"/>
```

- `minSdkVersion 24` or higher in `android/app/build.gradle`.
- Test on a physical ARCore-supported device (the emulator will not do AR).

## 3. iOS (ARKit)

`ios/Runner/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>We use the camera to show artwork on your wall.</string>
<key>io.flutter.embedded_views_preview</key>
<true/>
```

- Deployment target iOS 13+ (ARKit). Run on a real device, not the simulator.

## 4. The artwork model (`artworkModelUri`)

`ARNode(type: NodeType.webGLB, ...)` renders a `.glb`. For a flat painting you
want a 1m x 1m quad textured with the artwork image, which the widget then
scales to the real size (e.g. 0.60m x 0.78m).

Quickest path to prove the pipeline: point `artworkModelUri` at ANY hosted
`.glb` and confirm it anchors to your wall on tap. Then swap in a real
artwork-textured quad.

Generating the textured quad per artwork (do this in your Node backend when an
artist uploads a piece, then store the `.glb` URL on the listing):

- Use a tiny glTF builder (`gltf-pipeline`, `@gltf-transform/core`, or Blender's
  `bpy` headless) to create a unit plane with the artwork JPEG/PNG as the
  baseColorTexture.
- Cache the resulting `.glb` in your object storage (Cloudflare R2) and serve
  the URL to the app.

## 5. Use it

```dart
import 'ar_wall_placement.dart';

Navigator.of(context).push(MaterialPageRoute(
  builder: (_) => ArWallPlacement(
    artworkModelUri: 'https://your-r2-bucket/artwork/spirit-of-the-sahel.glb',
    widthCm: 60,
    heightCm: 78,
    title: 'Spirit of the Sahel',
  ),
));
```

## How this maps to your project report

This is the "AR-based artwork placement" objective implemented for real:
ARCore/ARKit do live plane detection and motion tracking on the device, the
piece is anchored at true scale, and the user repositions by dragging. The
in-browser web demo and the Gemini render are companions for desktop and
marketing previews; this Flutter module is the on-phone AR experience your
methodology describes.
