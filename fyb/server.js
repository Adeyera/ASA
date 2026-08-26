// server.js — Gemini photorealistic room-render proxy
// Holds the API key server-side. Never ships the key to the browser.
//
// Endpoint:  POST /api/render-room
//   body: { roomBase64, artBase64, position:{x,y}, dimensionsCm:{w,h}, mimeType }
//   returns: { imageBase64, mimeType }   (the composited photo)

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' })); // room photos can be large

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Swap to a newer image model here if your key has access
// (e.g. 'gemini-3.1-flash-image'). 2.5 is the stable, well-documented one.
const IMAGE_MODEL = 'gemini-2.5-flash-image';

function positionPhrase(x, y) {
  const h = x < 0.34 ? 'left' : x > 0.66 ? 'right' : 'centre';
  const v = y < 0.34 ? 'upper' : y > 0.66 ? 'lower' : 'middle';
  return `the ${v} ${h} of the wall`;
}

app.post('/api/render-room', async (req, res) => {
  try {
    const { roomBase64, artBase64, position = {}, dimensionsCm = {}, mimeType = 'image/jpeg' } = req.body;
    if (!roomBase64 || !artBase64) {
      return res.status(400).json({ error: 'roomBase64 and artBase64 are required' });
    }

    const where = positionPhrase(position.x ?? 0.5, position.y ?? 0.46);
    const dim = dimensionsCm.w && dimensionsCm.h ? `${dimensionsCm.w} cm wide by ${dimensionsCm.h} cm tall` : 'about 60 cm wide';

    const prompt =
      `The first image is a photo of a room. The second image is a framed artwork. ` +
      `Hang the framed artwork on the wall in the room, positioned around ${where}. ` +
      `The artwork is ${dim} in real life — render it at a believable physical scale for that wall. ` +
      `Match the room's perspective so the frame sits flat against the wall, match the existing lighting and colour temperature, ` +
      `and add a soft, realistic contact shadow consistent with the room's light direction. ` +
      `Do not change anything else in the room. Output a single photorealistic image.`;

    const response = await ai.models.generateContent({
      model: IMAGE_MODEL,
      contents: [
        { inlineData: { mimeType, data: roomBase64 } },
        { inlineData: { mimeType: 'image/png', data: artBase64 } },
        { text: prompt },
      ],
      config: { responseModalities: ['IMAGE'] },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    const img = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));
    if (!img) {
      const text = parts.find(p => p.text)?.text || 'no image returned';
      return res.status(502).json({ error: 'Model returned no image', detail: text });
    }

    res.json({ imageBase64: img.inlineData.data, mimeType: img.inlineData.mimeType });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Render failed', detail: String(err.message || err) });
  }
});

app.get('/health', (_, res) => res.json({ ok: true, model: IMAGE_MODEL }));

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`Render proxy on http://localhost:${PORT} (model: ${IMAGE_MODEL})`));
