import React, { useState, useEffect } from 'react';

export default function ArtCard({ artwork, index = 0, onSelect }) {
  const imgUrl = artwork.images?.[0]?.url || artwork.thumbnail || '';
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('liked') || '[]');
    setLiked(saved.includes(artwork._id));
  }, [artwork._id]);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem('liked') || '[]');
    const next = liked
      ? saved.filter((id) => id !== artwork._id)
      : [...saved, artwork._id];
    localStorage.setItem('liked', JSON.stringify(next));
    setLiked(!liked);
  };



  return (
    <article
      className="art-card"
      onClick={() => onSelect?.(artwork, index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSelect?.(artwork, index);
      }}
    >
      <div className="art-card-image">
        <img src={imgUrl} alt={artwork.title} loading="lazy" />
        <span className="art-card-ref">{artwork.title}</span>
        {artwork.status === 'Sold' && (
          <span className="art-card-badge sold">Sold</span>
        )}
        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={toggleLike}
          aria-label="Save"
        >
          {liked ? '♥' : '♡'}
        </button>
        <div className="art-card-caption">
          <span className="art-card-cta">View Artwork</span>
        </div>
      </div>
      <div className="art-card-body">
        <h3 className="art-card-title">{artwork.title}</h3>
        <div className="art-card-row">
          <span className="art-card-artist">
            {artwork.artist?.name || 'Unknown Artist'}
          </span>
          <span className="art-card-price">
            ${artwork.price?.usd?.toLocaleString()}
          </span>
        </div>
      </div>

      <style>{`
        .art-card {
          display: flex;
          flex-direction: column;
          background: transparent;
          cursor: pointer;
          text-align: left;
          width: 100%;
        }
        .art-card-image {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: var(--radius-sm);
        }
        .art-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.4s ease;
        }
        .art-card:hover .art-card-image img {
          transform: scale(1.06);
          filter: brightness(0.92);
        }
        .art-card-ref {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: var(--font-display);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: #fff;
          mix-blend-mode: difference;
          opacity: 0.9;
        }
        .art-card-badge {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .art-card-badge.sold { background: var(--color-error); color: #fff; }
        .like-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          color: var(--color-text-primary);
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 2;
          opacity: 0;
        }
        .art-card:hover .like-btn { opacity: 1; }
        .like-btn.liked {
          color: var(--color-error);
          background: #fff;
          opacity: 1;
        }
        .like-btn:hover { transform: scale(1.12); }
        .art-card-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 14px;
          display: flex;
          justify-content: center;
          transform: translateY(120%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .art-card:hover .art-card-caption { transform: translateY(0); }
        .art-card-cta {
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 9px 22px;
          border-radius: 999px;
          box-shadow: var(--glass-shadow);
        }
        .art-card-body { padding: 14px 2px 4px; }
        .art-card-title {
          font-family: var(--font-display);
          font-size: 1.18rem;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: 0.01em;
          color: var(--color-text-primary);
        }
        .art-card-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 6px;
          gap: 12px;
        }
        .art-card-artist {
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          font-style: italic;
        }
        .art-card-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
      `}</style>
    </article>
  );
}
