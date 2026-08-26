import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Àṣà</div>
            <p>
              A marketplace for original contemporary art, made across Africa
              and collected everywhere.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Explore</span>
              <Link to="/">Artworks</Link>
              <Link to="/artists">Artists</Link>
              <Link to="/login">Sell your art</Link>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Company</span>
              <Link to="/">About</Link>
              <Link to="/">Journal</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Àṣà. All rights reserved.</span>
          <span>Pan-African · est. 2026</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #161210;
          color: #f2e9da;
          padding: 64px 24px 36px;
        }
        .footer-inner { max-width: 1200px; margin: 0 auto; }
        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          padding-bottom: 42px;
          border-bottom: 1px solid rgba(242, 233, 218, 0.12);
        }
        .footer-brand { max-width: 300px; }
        .footer-logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 30px;
          margin-bottom: 14px;
        }
        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(242, 233, 218, 0.6);
          margin: 0;
        }
        .footer-cols { display: flex; gap: 64px; flex-wrap: wrap; }
        .footer-col { display: flex; flex-direction: column; gap: 11px; }
        .footer-col-title {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242, 233, 218, 0.4);
          margin-bottom: 4px;
        }
        .footer-col a {
          color: rgba(242, 233, 218, 0.78);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-col a:hover { color: #f2e9da; }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 24px;
          font-size: 0.8rem;
          color: rgba(242, 233, 218, 0.45);
        }
      `}</style>
    </footer>
  );
}
