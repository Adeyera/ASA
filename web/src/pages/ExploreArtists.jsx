import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { artworks } from '../services/api';
import ArtCard from '../components/ArtCard';
import ArtworkModal from '../components/ArtworkModal';
import { resolveImageUrl } from '../utils/imageUrl';

// Artists are derived client-side from the artwork feed (no artist
// endpoint yet): group works by their author.
export default function ExploreArtists() {
  const [allWorks, setAllWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null); // artist id
  const [selected, setSelected] = useState(null); // { artwork, index }

  useEffect(() => {
    artworks
      .getAll({ limit: 100, sort: '-createdAt' })
      .then(({ data }) => setAllWorks(data.artworks || []))
      .catch((err) => console.error('Failed to load artists:', err))
      .finally(() => setLoading(false));
  }, []);

  const artists = useMemo(() => {
    const map = new Map();
    allWorks.forEach((w) => {
      const a = w.artist;
      if (!a?._id) return;
      if (!map.has(a._id)) {
        map.set(a._id, { id: a._id, name: a.name || 'Unknown Artist', avatar: a.avatar || '', works: [] });
      }
      map.get(a._id).works.push(w);
    });
    return Array.from(map.values()).sort((x, y) => y.works.length - x.works.length);
  }, [allWorks]);

  const activeArtist = artists.find((a) => a.id === active);
  const initials = (name) =>
    name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="artists-page">
      <header className="artists-hero">
        <p className="artists-eyebrow">The Makers</p>
        <h1 className="artists-title">Explore Artists</h1>
        <p className="artists-sub">
          Meet the painters, sculptors and storytellers behind the collection.
        </p>
      </header>

      {loading ? (
        <div className="artists-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton" style={{ height: 220, borderRadius: 16 }} />
          ))}
        </div>
      ) : artists.length === 0 ? (
        <div className="artists-empty">
          <h3>No artists yet</h3>
          <p>Artists appear here once works are published.</p>
        </div>
      ) : (
        <div className="artists-grid">
          {artists.map((a) => (
            <div
              key={a.id}
              className={`artist-card ${active === a.id ? 'active' : ''}`}
            >
              <div className="artist-thumbs" onClick={() => setActive(active === a.id ? null : a.id)}>
                {a.works.slice(0, 3).map((w) => (
                  <img
                    key={w._id}
                    src={resolveImageUrl(w.images?.[0]?.url || w.thumbnail || '')}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="artist-info">
                {a.avatar ? (
                  <img
                    src={resolveImageUrl(a.avatar)}
                    alt={a.name}
                    className="artist-avatar-img"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="artist-avatar">{initials(a.name)}</span>
                )}
                <div className="artist-text">
                  <h3 className="artist-name">{a.name}</h3>
                  <p className="artist-count">{a.works.length} works</p>
                </div>
                <Link to={`/artist/${a.id}`} className="btn-artist-profile-link">
                  Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}


      {activeArtist && (
        <section className="artist-works">
          <h2 className="artist-works-title">
            Works by <span>{activeArtist.name}</span>
          </h2>
          <div className="works-grid">
            {activeArtist.works.map((art, i) => (
              <ArtCard
                key={art._id}
                artwork={art}
                index={i}
                onSelect={(a, idx) => setSelected({ artwork: a, index: idx })}
              />
            ))}
          </div>
        </section>
      )}

      {selected && activeArtist && (
        <ArtworkModal
          artwork={selected.artwork}
          index={selected.index}
          total={activeArtist.works.length}
          onClose={() => setSelected(null)}
          onPrev={() =>
            setSelected((s) => {
              const n = activeArtist.works.length;
              const i = (s.index - 1 + n) % n;
              return { artwork: activeArtist.works[i], index: i };
            })
          }
          onNext={() =>
            setSelected((s) => {
              const n = activeArtist.works.length;
              const i = (s.index + 1) % n;
              return { artwork: activeArtist.works[i], index: i };
            })
          }
        />
      )}

      <style>{`
        .artists-page { max-width: 1280px; margin: 0 auto; padding: 130px 24px 80px; }
        .artists-hero { text-align: center; margin-bottom: 48px; }
        .artists-eyebrow {
          font-family: var(--font-display);
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
        }
        .artists-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-top: 10px;
          color: var(--color-text-primary);
        }
        .artists-sub {
          color: var(--color-text-secondary);
          max-width: 460px;
          margin: 14px auto 0;
          line-height: 1.7;
        }
        .artists-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .artist-card {
          text-align: left;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .artist-card:hover { transform: translateY(-4px); box-shadow: var(--glass-shadow); }
        .artist-card.active { border-color: var(--color-accent); }
        .artist-thumbs {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
          height: 170px;
          background: var(--color-surface);
        }
        .artist-thumbs img { width: 100%; height: 100%; object-fit: cover; }
        .artist-thumbs img:first-child { grid-row: 1 / 3; }
        .artist-info {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
        }
        .artist-text {
          flex: 1;
        }
        .artist-avatar-img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .artist-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta));
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .artist-name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .artist-count { color: var(--color-text-muted); font-size: 0.82rem; }
        .btn-artist-profile-link {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-accent);
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(203, 75, 30, 0.08);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .btn-artist-profile-link:hover {
          background: var(--color-accent);
          color: #f2e9da;
        }


        .artist-works {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .artist-works-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 28px;
          color: var(--color-text-primary);
        }
        .artist-works-title span { color: var(--color-accent); font-style: italic; }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 32px 24px;
        }
        .artists-empty { text-align: center; padding: 80px 20px; }
        .artists-empty h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-text-primary);
        }
        .artists-empty p { color: var(--color-text-muted); margin-top: 8px; }
      `}</style>
    </div>
  );
}
