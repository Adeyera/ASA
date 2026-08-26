import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function GlassNavbar() {
  const { count, setShowCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`glass-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-pill">
        <Link to="/" className="navbar-brand">
          Àṣà
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/discover" className={isActive('/discover') ? 'active' : ''}>
            Discover Artworks
          </Link>
          <Link
            to="/artists"
            className={isActive('/artists') ? 'active' : ''}
          >
            Explore Artists
          </Link>
          {user?.role === 'artist' && (
            <Link
              to="/dashboard"
              className={isActive('/dashboard') ? 'active' : ''}
            >
              Dashboard
            </Link>
          )}

          {user ? (
            <div className="navbar-user">
              <Link to="/profile" className="user-name">
                {user.name}
              </Link>
              <button
                className="btn-logout"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  window.location.href = '/';
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-nav-cta">
              Become a Collector
            </Link>
          )}
        </div>

        <button className="cart-btn" onClick={() => setShowCart(true)} aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {count > 0 && <span className="cart-badge">{count}</span>}
        </button>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .glass-navbar {
          position: fixed;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          transition: top var(--transition-base);
        }
        .glass-navbar.scrolled { top: 8px; }

        .navbar-pill {
          width: 100%;
          max-width: 980px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px 10px 24px;
          background: #1a140f;
          border-radius: 999px;
          box-shadow: 0 8px 30px rgba(26, 20, 15, 0.22);
        }

        .navbar-brand {
          font-family: 'Bodoni Moda', Georgia, serif;
          font-size: 1.65rem;
          font-weight: 700;
          color: #f2e9da;
          letter-spacing: 0.5px;
          line-height: 1;
          white-space: nowrap;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
        }
        .navbar-links a {
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }
        .navbar-links a:hover,
        .navbar-links a.active { color: #f2e9da; }

        .navbar-user { display: flex; align-items: center; gap: 14px; }
        .user-name { color: #f2e9da !important; font-weight: 600; }
        .btn-logout {
          background: transparent;
          color: rgba(242, 233, 218, 0.6);
          font-size: 0.82rem;
          padding: 6px 14px;
          border: 1px solid rgba(242, 233, 218, 0.2);
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .btn-logout:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .btn-nav-cta {
          background: var(--color-accent);
          color: #f2e9da !important;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .btn-nav-cta:hover { background: var(--color-accent-dark); transform: translateY(-1px); }

        .cart-btn {
          position: relative;
          background: rgba(242, 233, 218, 0.1);
          width: 40px; height: 40px;
          border-radius: 50%;
          color: #f2e9da;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background var(--transition-fast);
        }
        .cart-btn:hover { background: rgba(242, 233, 218, 0.2); }
        .cart-badge {
          position: absolute; top: -2px; right: -2px;
          min-width: 18px; height: 18px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.7rem; font-weight: 700;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          padding: 0 4px;
        }

        .hamburger {
          display: none;
          flex-direction: column; gap: 5px;
          background: transparent; padding: 8px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #f2e9da; border-radius: 2px;
          transition: all var(--transition-fast);
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 820px) {
          .hamburger { display: flex; order: 3; }
          .cart-btn { order: 2; margin-left: auto; }
          .navbar-links {
            position: fixed;
            top: 0; right: -100%;
            width: 280px; height: 100vh;
            background: #1a140f;
            flex-direction: column;
            align-items: flex-start;
            padding: 90px 32px 32px;
            gap: 24px; margin-left: 0;
            transition: right var(--transition-base);
            z-index: 101;
          }
          .navbar-links.open { right: 0; }
          .navbar-user { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </nav>
  );
}
