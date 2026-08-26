import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthGateModal({ onClose }) {
  const navigate = useNavigate();

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="auth-gate-overlay" onClick={onClose}>
      <div className="auth-gate-card" onClick={(e) => e.stopPropagation()}>
        <button className="auth-gate-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="auth-gate-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M24 14v10l6 4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="24" r="3" fill="var(--color-accent)" opacity="0.3" />
          </svg>
        </div>

        <h2 className="auth-gate-title">Explore the Full Collection</h2>
        <p className="auth-gate-desc">
          Sign in or create an account to discover all artworks, save your favourites, and start collecting.
        </p>

        <div className="auth-gate-actions">
          <button
            className="auth-gate-btn primary"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
          <button
            className="auth-gate-btn secondary"
            onClick={() => navigate('/login?mode=signup')}
          >
            Create Account
          </button>
        </div>

        <p className="auth-gate-hint">
          Join a community of collectors and African artists.
        </p>
      </div>

      <style>{`
        .auth-gate-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(12, 12, 14, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: authGateFadeIn 0.25s ease;
        }
        .auth-gate-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: rgba(251, 246, 236, 0.92);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(26, 20, 15, 0.1);
          border-radius: var(--radius-xl);
          padding: 48px 36px 40px;
          text-align: center;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
          animation: authGateSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .auth-gate-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(26, 20, 15, 0.06);
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .auth-gate-close:hover {
          background: rgba(26, 20, 15, 0.12);
          color: var(--color-text-primary);
        }
        .auth-gate-icon {
          margin-bottom: 20px;
          animation: authGatePulse 3s ease-in-out infinite;
        }
        .auth-gate-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }
        .auth-gate-desc {
          color: var(--color-text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto 28px;
        }
        .auth-gate-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .auth-gate-btn {
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 700;
          transition: all var(--transition-fast);
          letter-spacing: 0.01em;
        }
        .auth-gate-btn.primary {
          background: var(--color-accent);
          color: #f2e9da;
        }
        .auth-gate-btn.primary:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .auth-gate-btn.secondary {
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-hover);
        }
        .auth-gate-btn.secondary:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .auth-gate-hint {
          margin-top: 20px;
          font-size: 0.78rem;
          color: var(--color-text-muted);
          letter-spacing: 0.02em;
        }
        @keyframes authGateFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes authGateSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes authGatePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
