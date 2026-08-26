# AR Art Marketplace — Generative Render + Native AR

Two production paths for the "see the artwork in your space" feature, built to
match the marketplace project (React.js web, Flutter mobile, Node backend).

```
ar-marketplace/
├── backend/      Node + Express proxy that calls Gemini 2.5 Flash Image
├── web/          Browser frontend: place a marker, get a photorealistic render
└── flutter/      Native ARCore/ARKit module: live wall detection on a phone
```

---

## Path A — Generative inpainting (web + backend)

Photorealistic compositing of the artwork onto a room photo using Google's
**Gemini 2.5 Flash Image** ("nano-banana"), which natively does
product-into-scene fusion. The key lives only on the server.

### Run it

```bash
cd backend
cp .env.example .env          # paste your key from https://aistudio.google.com/apikey
npm install
npm start                     # -> http://localhost:8787
```

Then open `web/index.html` in a browser (double-click is fine). Upload a room
photo, drag the dashed marker to where you'd hang the piece, scroll to resize
it, and hit "Render photorealistically". The browser rasterizes the framed
dummy artwork, sends it plus your room photo to the proxy, and the proxy returns
a single composited image.

### Cost / notes
- ~$0.04 per rendered image at current pricing.
- Output carries Google's invisible SynthID watermark.
- Swap `IMAGE_MODEL` in `server.js` to a newer image model (e.g.
  `gemini-3.1-flash-image`) if your key has access.
- To wire into the React app, replace the dummy artwork with the selected
  listing's image and call the same `/api/render-room` endpoint.

### Other model options
The proxy is a thin wrapper — to use **SDXL inpainting** instead (Stability AI,
Replicate, or fal), keep the same endpoint shape and swap the model call inside
`server.js`. SDXL needs an explicit mask (the wall region); Gemini does not,
which is why it's the simpler default here.

---

## Path B — Native AR (Flutter, ARCore + ARKit)

Real on-device AR: live camera, wall plane detection, artwork anchored to the
wall at its true physical size, drag to reposition. One Dart codebase, both
platforms. Full setup in `flutter/SETUP.md`.

```bash
# inside your Flutter app
flutter pub add ar_flutter_plugin vector_math
# add camera permissions + ARCore/ARKit config (see SETUP.md)
# drop in ar_wall_placement.dart and push the ArWallPlacement screen
```

Must run on a physical ARCore/ARKit device — emulators and simulators can't do AR.

---

## Which is which (for the writeup)

| Capability        | Path A (Gemini)                | Path B (ARCore/ARKit)            |
|-------------------|--------------------------------|----------------------------------|
| Where it runs     | Any browser + server           | Physical phone                   |
| Realism           | Photorealistic, AI-generated   | Live camera, true perspective    |
| Surface detection | Inferred by the model          | Real plane detection + tracking  |
| Best for          | Desktop preview, marketing     | The in-app "view on your wall"   |
| Cost              | Per-render API cost            | Free after build                 |

Path B is the AR objective from the methodology. Path A is the photorealistic
desktop/marketing companion. They share the same dummy artwork and the same
60 x 78 cm real dimensions so previews stay consistent.
