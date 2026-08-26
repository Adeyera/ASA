import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/api';

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'buyer' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isLogin ? auth.login : auth.signup;
      const { data } = await endpoint({
        email: form.email,
        password: form.password,
        ...(isLogin ? {} : { name: form.name, role: form.role }),
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-icon">✦</span>
          <h1 className="login-title">{isLogin ? 'Welcome Back' : 'Join Heritage AR'}</h1>
          <p className="login-subtitle">
            {isLogin
              ? 'Sign in to explore and collect African art.'
              : 'Create an account to start your collection.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
          )}

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="role">I want to</label>
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="buyer">Browse & Collect Art</option>
                <option value="artist">Sell My Artwork</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Any password (demo mode)"
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="login-toggle">
          <span>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <button onClick={() => { setIsLogin(!isLogin); setError(''); }}>
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px;
        }

        .login-card {
          width: 100%;
          max-width: 440px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-icon {
          font-size: 2rem;
          color: var(--color-accent);
        }

        .login-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 12px;
        }

        .login-subtitle {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-top: 8px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .form-group input,
        .form-group select {
          padding: 12px 16px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .form-error {
          padding: 10px 16px;
          background: rgba(232, 90, 90, 0.1);
          border: 1px solid rgba(232, 90, 90, 0.3);
          border-radius: var(--radius-sm);
          color: var(--color-error);
          font-size: 0.85rem;
        }

        .btn-submit {
          padding: 14px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 1rem;
          transition: all var(--transition-fast);
        }

        .btn-submit:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-toggle {
          text-align: center;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .login-toggle button {
          background: none;
          color: var(--color-accent);
          font-weight: 600;
          margin-left: 6px;
          font-size: 0.9rem;
        }

        .login-toggle button:hover {
          color: var(--color-accent-light);
        }
      `}</style>
    </div>
  );
}
