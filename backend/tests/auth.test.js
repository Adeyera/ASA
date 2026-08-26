const request = require('supertest');
const app = require('../server');

describe('Auth Endpoints', () => {
  let token;

  describe('POST /api/auth/signup', () => {
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({
          name: 'Test User',
          email: `test-${Date.now()}@example.com`,
          password: 'password123',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.token).toBeDefined();
      expect(res.body.user.name).toBe('Test User');
      token = res.body.token;
    });

    it('should reject duplicate email', async () => {
      const email = `test-${Date.now()}@example.com`;
      await request(app)
        .post('/api/auth/signup')
        .send({ name: 'User 1', email, password: 'password123' });

      const res = await request(app)
        .post('/api/auth/signup')
        .send({ name: 'User 2', email, password: 'password123' });

      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/already registered/i);
    });

    it('should require name, email, and password', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login with valid credentials', async () => {
      const email = `login-${Date.now()}@example.com`;
      await request(app)
        .post('/api/auth/signup')
        .send({ name: 'Login User', email, password: 'password123' });

      const res = await request(app)
        .post('/api/auth/login')
        .send({ email, password: 'password123' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.token).toBeDefined();
    });

    it('should reject invalid password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'nonexistent@test.com', password: 'wrong' });

      expect(res.status).toBe(401);
    });

    it('should reject missing credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({});
      expect(res.status).toBe(400);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return user profile with valid token', async () => {
      const email = `me-${Date.now()}@example.com`;
      const signupRes = await request(app)
        .post('/api/auth/signup')
        .send({ name: 'Me User', email, password: 'password123' });

      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${signupRes.body.token}`);

      expect(res.status).toBe(200);
      expect(res.body.user.email).toBe(email);
    });

    it('should reject without token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
    });
  });

  describe('POST /api/artworks', () => {
    it('should reject creating artwork without auth', async () => {
      const res = await request(app)
        .post('/api/artworks')
        .send({ title: 'Test' });

      expect(res.status).toBe(401);
    });
  });
});
