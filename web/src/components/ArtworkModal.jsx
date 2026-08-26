import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Galekto-inspired select overlay: REF label, prev/next navigation,
// large image + meta panel, "Buy Original" CTA. Light themed, no blue.
export default function ArtworkModal({ artwork, index, total, onClose, onPrev, onNext }) {
  const { addItem } = useCart();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!artwork) return null;
  const imgUrl = artwork.images?.[0]?.url || artwork.thumbnail || '';

  return (
    <div className="awm-backdrop" onClick={onClose}>
      <div className="awm-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="awm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="awm-stage">
          <button className="awm-nav prev" onClick={onPrev} aria-label="Previous">
            ←
          </button>
          <div className="awm-image">
            <img src={imgUrl} alt={artwork.title} />
          </div>
          <button className="awm-nav next" onClick={onNext} aria-label="Next">
            →
          </button>
        </div>

        <aside className="awm-panel">
          <div className="awm-topline">
            <span className="awm-ref">{artwork.title}</span>
            <span className="awm-count">
              {index + 1} / {total}
            </span>
          </div>

          <h2 className="awm-title">{artwork.title}</h2>
          <p className="awm-artist">by {artwork.artist?.name || 'Unknown Artist'}</p>

          {artwork.description && (
            <p className="awm-desc">{artwork.description}</p>
          )}

          <dl className="awm-meta">
            <div>
              <dt>Medium</dt>
              <dd>{artwork.medium || '—'}</dd>
            </div>
            <div>
              <dt>Style</dt>
              <dd>{artwork.style || '—'}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>
                {artwork.dimensions?.width} × {artwork.dimensions?.height}{' '}
                {artwork.dimensions?.unit}
              </dd>
            </div>
          </dl>

          <div className="awm-price">
            <span className="awm-usd">
              ${artwork.price?.usd?.toLocaleString()}
            </span>
            <span className="awm-ngn">
              ₦{artwork.price?.ngn?.toLocaleString()}
            </span>
          </div>

          <div className="awm-actions">
            <button
              className="awm-buy"
              disabled={artwork.status === 'Sold'}
              onClick={() => {
                addItem(artwork);
                onClose();
              }}
            >
              {artwork.status === 'Sold' ? 'Sold' : 'Buy Original'}
            </button>
            <Link to={`/artwork/${artwork._id}`} className="awm-detail" onClick={onClose}>
              View in your room (AR)
            </Link>
          </div>
        </aside>
      </div>

      <style>{`
        .awm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(6, 9, 22, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: asaFade 0.25s ease;
        }
        .awm-dialog {
          position: relative;
          width: 100%;
          max-width: 1080px;
          max-height: 90vh;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          background: #0c1430;
          color: #f2e9da;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(6, 9, 22, 0.6);
          animation: asaUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .awm-dialog::before,
        .awm-dialog::after {
          content: '';
          position: absolute;
          width: 26px;
          height: 26px;
          border: 2px solid rgba(242, 233, 218, 0.45);
          z-index: 4;
          pointer-events: none;
        }
        .awm-dialog::before {
          top: 16px; left: 16px;
          border-right: none; border-bottom: none;
        }
        .awm-dialog::after {
          bottom: 16px; right: 16px;
          border-left: none; border-top: none;
        }
        .awm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(242, 233, 218, 0.12);
          color: #f2e9da;
          font-size: 0.95rem;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .awm-close:hover { background: var(--color-accent); transform: rotate(90deg); }

        .awm-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #080d22;
          padding: 32px;
        }
        .awm-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .awm-image img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(6, 9, 22, 0.5);
          border-radius: 4px;
        }
        .awm-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(242, 233, 218, 0.14);
          color: #f2e9da;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 3;
        }
        .awm-nav:hover { background: var(--color-accent); color: #f2e9da; }
        .awm-nav.prev { left: 16px; }
        .awm-nav.next { right: 16px; }

        .awm-panel {
          padding: 48px 40px 40px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .awm-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-display);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: rgba(242, 233, 218, 0.55);
          margin-bottom: 18px;
        }
        .awm-title {
          font-family: var(--font-display);
          font-size: 2.1rem;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #f2e9da;
        }
        .awm-artist {
          color: rgba(242, 233, 218, 0.7);
          font-style: italic;
          margin-top: 6px;
        }
        .awm-desc {
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.92rem;
          line-height: 1.7;
          margin-top: 18px;
        }
        .awm-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
          padding: 20px 0;
          border-top: 1px solid rgba(242, 233, 218, 0.16);
          border-bottom: 1px solid rgba(242, 233, 218, 0.16);
        }
        .awm-meta dt {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(242, 233, 218, 0.5);
        }
        .awm-meta dd {
          font-size: 0.9rem;
          color: #f2e9da;
          margin-top: 4px;
        }
        .awm-price {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-top: 24px;
        }
        .awm-usd {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 400;
          color: #f2e9da;
        }
        .awm-ngn { color: rgba(242, 233, 218, 0.5); font-size: 0.95rem; }
        .awm-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 28px;
        }
        .awm-buy {
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 15px;
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .awm-buy:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }
        .awm-buy:disabled { opacity: 0.5; cursor: not-allowed; }
        .awm-detail {
          text-align: center;
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px;
          border: 1px solid rgba(242, 233, 218, 0.22);
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .awm-detail:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        @media (max-width: 820px) {
          .awm-dialog {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            max-height: 92vh;
          }
          .awm-stage { padding: 20px; }
          .awm-image img { max-height: 40vh; }
          .awm-panel { padding: 28px 24px 24px; }
          .awm-title { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
