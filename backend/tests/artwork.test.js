const request = require('supertest');
const app = require('../server');

let artistToken;
let artistId;

beforeAll(async () => {
  const email = `artist-${Date.now()}@example.com`;
  const res = await request(app)
    .post('/api/auth/signup')
    .send({ name: 'Test Artist', email, password: 'password123', role: 'artist' });

  artistToken = res.body.token;
  artistId = res.body.user._id;
});

describe('Artwork Endpoints', () => {
  let artworkId;

  it('should create artwork as artist', async () => {
    const res = await request(app)
      .post('/api/artworks')
      .set('Authorization', `Bearer ${artistToken}`)
      .send({
        title: 'African Sunset',
        description: 'A beautiful painting of an African sunset.',
        medium: 'Oil on Canvas',
        style: 'Contemporary',
        price: { ngn: 150000, usd: 350 },
        dimensions: { height: 80, width: 100 },
        images: [{ url: 'https://example.com/art.jpg', alt: 'Artwork' }],
      });

    expect(res.status).toBe(201);
    expect(res.body.artwork.title).toBe('African Sunset');
    artworkId = res.body.artwork._id;
  });

  it('should fetch all artworks', async () => {
    const res = await request(app).get('/api/artworks');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.artworks)).toBe(true);
  });

  it('should fetch single artwork', async () => {
    const res = await request(app).get(`/api/artworks/${artworkId}`);

    expect(res.status).toBe(200);
    expect(res.body.artwork.title).toBe('African Sunset');
  });

  it('should return 404 for non-existent artwork', async () => {
    const res = await request(app)
      .get('/api/artworks/000000000000000000000000');

    expect(res.status).toBe(404);
  });

  it('should reject artwork creation with missing fields', async () => {
    const res = await request(app)
      .post('/api/artworks')
      .set('Authorization', `Bearer ${artistToken}`)
      .send({ title: 'Incomplete' });

    expect(res.status).toBe(400);
  });

  it('should reject artwork creation as buyer', async () => {
    const email = `buyer-${Date.now()}@test.com`;
    const buyerRes = await request(app)
      .post('/api/auth/signup')
      .send({ name: 'Test Buyer', email, password: 'password123' });

    const res = await request(app)
      .post('/api/artworks')
      .set('Authorization', `Bearer ${buyerRes.body.token}`)
      .send({
        title: 'Art',
        description: 'Test',
        medium: 'Oil',
        style: 'Modern',
        price: { ngn: 1000, usd: 10 },
        dimensions: { height: 50, width: 50 },
        images: [{ url: 'https://example.com/img.jpg' }],
      });

    expect(res.status).toBe(403);
  });
});
