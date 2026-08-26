import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const auth = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  becomeArtist: () => api.put('/auth/become-artist'),
};

export const artworks = {
  getAll: (params) => api.get('/artworks', { params }),
  getById: (id) => api.get(`/artworks/${id}`),
  create: (data) => api.post('/artworks', data),
  update: (id, data) => api.put(`/artworks/${id}`, data),
  delete: (id) => api.delete(`/artworks/${id}`),
  getMy: () => api.get('/artworks/my'),
  getStyles: () => api.get('/artworks/styles'),
  getMediums: () => api.get('/artworks/mediums'),
};

export const orders = {
  create: (data) => api.post('/orders', data),
  getAll: () => api.get('/orders'),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, data) => api.put(`/orders/${id}`, data),
  verifyPayment: (reference) => api.get(`/orders/verify/${reference}`),
  getSalesOverview: () => api.get('/orders/sales-overview'),
};

export const reviews = {
  create: (data) => api.post('/reviews', data),
  getByArtwork: (artworkId, params) => api.get(`/reviews/artwork/${artworkId}`, { params }),
  delete: (id) => api.delete(`/reviews/${id}`),
};

export const arSessions = {
  save: (data) => api.post('/ar-sessions', data),
  getByArtwork: (artworkId) => api.get(`/ar-sessions/artwork/${artworkId}`),
  update: (id, data) => api.put(`/ar-sessions/${id}`, data),
};

export default api;
