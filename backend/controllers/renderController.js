const { GoogleGenAI } = require('@google/genai');

const IMAGE_MODEL = 'gemini-2.5-flash-image';

function positionPhrase(x, y) {
  const h = x < 0.34 ? 'left' : x > 0.66 ? 'right' : 'centre';
  const v = y < 0.34 ? 'upper' : y > 0.66 ? 'lower' : 'middle';
  return `the ${v} ${h} of the wall`;
}

exports.renderRoom = async (req, res, next) => {
  try {
    const { roomBase64, artBase64, position = {}, dimensionsCm = {}, mimeType = 'image/jpeg' } = req.body;

    if (!roomBase64 || !artBase64) {
      return res.status(400).json({ error: 'roomBase64 and artBase64 are required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
    }

    const ai = new GoogleGenAI({ apiKey });

    const where = positionPhrase(position.x ?? 0.5, position.y ?? 0.46);
    const dim = dimensionsCm.w && dimensionsCm.h
      ? `${dimensionsCm.w} cm wide by ${dimensionsCm.h} cm tall`
      : 'about 60 cm wide';

    const prompt =
      `You are given two images. Image 1 is a photograph of a real room. Image 2 is a framed artwork.\n\n` +
      `TASK: Composite the artwork onto the wall of the room so it looks like it is physically hanging there.\n\n` +
      `PLACEMENT: Hang the artwork at ${where} of the wall.\n` +
      `SCALE: The artwork is ${dim} in real life. Render it at a proportionally correct size relative to the room's furniture and architecture.\n\n` +
      `CRITICAL RULES:\n` +
      `- Do NOT repaint, stylize, distort, or alter the artwork image in any way. Preserve its exact content, colours, and details.\n` +
      `- Do NOT change, repaint, or modify anything else in the room photo. Keep all furniture, walls, lighting, and objects exactly as they are.\n` +
      `- Match the room's perspective so the artwork frame sits flush and flat against the wall surface.\n` +
      `- Match the room's existing lighting direction, colour temperature, and ambient light on the artwork frame.\n` +
      `- Add a subtle, realistic shadow behind/below the frame consistent with the room's light source.\n` +
      `- The output must be a single photorealistic image that looks like an actual photograph of the room with the artwork hung on the wall.`;

    const response = await ai.models.generateContent({
      model: IMAGE_MODEL,
      contents: [
        { inlineData: { mimeType, data: roomBase64 } },
        { inlineData: { mimeType: 'image/png', data: artBase64 } },
        { text: prompt },
      ],
      config: {
        responseModalities: ['IMAGE'],
        temperature: 0.2,
      },
    });


    const parts = response.candidates?.[0]?.content?.parts || [];
    const img = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));
    if (!img) {
      const text = parts.find(p => p.text)?.text || 'no image returned';
      return res.status(502).json({ error: 'Model returned no image', detail: text });
    }

    res.json({ imageBase64: img.inlineData.data, mimeType: img.inlineData.mimeType });
  } catch (err) {
    // Gemini SDK ApiError wraps the error as stringified JSON in err.message.
    // Extract a clean, readable message so the frontend gets something useful.
    try {
      const parsed = JSON.parse(err.message);
      if (parsed?.error?.message) {
        const clean = new Error(parsed.error.message);
        clean.statusCode = parsed.error.code || 502;
        return next(clean);
      }
    } catch { /* err.message wasn't JSON — pass through */ }
    next(err);
  }
};

/**
 * GET /api/render/image-proxy?url=<encoded-url>
 * Fetches an external image server-side to bypass browser CORS restrictions.
 */
exports.imageProxy = async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'url query parameter required' });

  try {
    const parsed = new URL(url);
    // Only allow http(s)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return res.status(400).json({ error: 'Only http/https URLs are supported' });
    }

    const resp = await fetch(url);
    if (!resp.ok) {
      return res.status(resp.status).json({ error: `Upstream returned ${resp.status}` });
    }

    const contentType = resp.headers.get('content-type') || 'application/octet-stream';
    if (!contentType.startsWith('image/')) {
      return res.status(400).json({ error: 'URL did not return an image' });
    }

    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=86400');

    const buffer = Buffer.from(await resp.arrayBuffer());
    res.send(buffer);
  } catch (err) {
    res.status(502).json({ error: `Failed to fetch image: ${err.message}` });
  }
};
