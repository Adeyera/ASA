import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { auth, artworks } from '../services/api';
import ArtCard from '../components/ArtCard';
import ArtworkModal from '../components/ArtworkModal';
import { resolveImageUrl } from '../utils/imageUrl';

export default function ArtistProfile() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [artistWorks, setArtistWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      setLoading(true);
      try {
        // Fetch public artist details
        const userRes = await auth.getUserById(id).catch(() => null);
        if (userRes?.data?.user) {
          setArtist(userRes.data.user);
        }

        // Fetch all artworks by this artist
        const artRes = await artworks.getAll({ artist: id, limit: 100, sort: '-createdAt' });
        const works = artRes.data.artworks || [];
        setArtistWorks(works);

        // Fallback: if user endpoint wasn't found, extract artist from artwork populate
        if (!userRes?.data?.user && works.length > 0 && works[0].artist) {
          setArtist(works[0].artist);
        }
      } catch (err) {
        console.error('Failed to load artist profile:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtistData();
    }
  }, [id]);

  const initials = (name) =>
    (name || 'Artist')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const activeWorksCount = artistWorks.filter((w) => w.status === 'Active').length;

  return (
    <div className="artist-profile-page">
      <div className="artist-profile-back">
        <Link to="/artists">← Explore All Artists</Link>
      </div>

      {loading ? (
        <div className="artist-profile-loading">
          <div className="skeleton" style={{ height: 260, borderRadius: 20, marginBottom: 40 }} />
          <div className="artist-works-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton" style={{ aspectRatio: '3/4', borderRadius: 12 }} />
            ))}
          </div>
        </div>
      ) : !artist && artistWorks.length === 0 ? (
        <div className="artist-not-found">
          <h2>Artist Not Found</h2>
          <p>We couldn't find the artist you were looking for.</p>
          <Link to="/artists" className="btn-explore">Browse Artists</Link>
        </div>
      ) : (
        <>
          {/* Artist Hero Header */}
          <header className="artist-header-card">
            <div className="artist-header-left">
              {artist?.avatar ? (
                <img
                  src={resolveImageUrl(artist.avatar)}
                  alt={artist.name}
                  className="artist-hero-avatar"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="artist-hero-initials">
                  {initials(artist?.name)}
                </div>
              )}

              <div className="artist-header-meta">
                <span className="artist-badge">African Artist</span>
                <h1 className="artist-hero-name">{artist?.name || 'African Artist'}</h1>
                {artist?.location?.city || artist?.location?.country ? (
                  <p className="artist-hero-location">
                    📍 {[artist.location.city, artist.location.country].filter(Boolean).join(', ')}
                  </p>
                ) : null}
                {artist?.bio && <p className="artist-hero-bio">{artist.bio}</p>}
              </div>
            </div>

            <div className="artist-stats-block">
              <div className="astat">
                <span className="astat-val">{artistWorks.length}</span>
                <span className="astat-lbl">Total Pieces</span>
              </div>
              <div className="astat">
                <span className="astat-val">{activeWorksCount}</span>
                <span className="astat-lbl">Available</span>
              </div>
            </div>
          </header>

          {/* Artist Works Portfolio */}
          <section className="artist-portfolio-section">
            <div className="section-heading-row">
              <h2 className="section-title">
                Artworks by <em>{artist?.name || 'Artist'}</em>
              </h2>
              <span className="works-count-pill">{artistWorks.length} works</span>
            </div>

            {artistWorks.length === 0 ? (
              <div className="artist-no-works">
                <p>No artworks currently published by this artist.</p>
              </div>
            ) : (
              <div className="artist-works-grid">
                {artistWorks.map((art, i) => (
                  <ArtCard
                    key={art._id}
                    artwork={art}
                    index={i}
                    onSelect={(a, idx) => setSelected({ artwork: a, index: idx })}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Fullscreen Artwork Modal */}
          {selected && (
            <ArtworkModal
              artwork={selected.artwork}
              index={selected.index}
              total={artistWorks.length}
              onClose={() => setSelected(null)}
              onPrev={() =>
                setSelected((s) => {
                  const n = artistWorks.length;
                  const i = (s.index - 1 + n) % n;
                  return { artwork: artistWorks[i], index: i };
                })
              }
              onNext={() =>
                setSelected((s) => {
                  const n = artistWorks.length;
                  const i = (s.index + 1) % n;
                  return { artwork: artistWorks[i], index: i };
                })
              }
            />
          )}
        </>
      )}

      <style>{`
        .artist-profile-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 24px 80px;
          animation: fadeIn 0.4s ease;
        }

        .artist-profile-back {
          margin-bottom: 24px;
        }

        .artist-profile-back a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .artist-profile-back a:hover {
          color: var(--color-accent);
        }

        .artist-header-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          backdrop-filter: blur(20px);
          margin-bottom: 48px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .artist-header-left {
          display: flex;
          align-items: flex-start;
          gap: 28px;
          max-width: 800px;
        }

        .artist-hero-avatar {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--color-accent);
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(203, 75, 30, 0.25);
        }

        .artist-hero-initials {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta, #b85d38));
          color: #fff;
          font-size: 2.2rem;
          font-weight: 700;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(203, 75, 30, 0.25);
        }

        .artist-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          background: rgba(203, 75, 30, 0.1);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 8px;
        }

        .artist-hero-name {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .artist-hero-location {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }

        .artist-hero-bio {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin-top: 8px;
        }

        .artist-stats-block {
          display: flex;
          gap: 24px;
          background: var(--color-bg-card);
          padding: 18px 28px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          flex-shrink: 0;
        }

        .astat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .astat-val {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .astat-lbl {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
        }

        .artist-portfolio-section {
          margin-top: 24px;
        }

        .section-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }

        .works-count-pill {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .artist-works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 32px 24px;
        }

        .artist-not-found {
          text-align: center;
          padding: 100px 24px;
        }

        .artist-not-found h2 {
          font-family: var(--font-display);
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .artist-not-found p {
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .btn-explore {
          display: inline-block;
          padding: 12px 28px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .artist-no-works {
          text-align: center;
          padding: 60px 24px;
          color: var(--color-text-muted);
          font-size: 1.05rem;
        }

        @media (max-width: 860px) {
          .artist-header-card {
            flex-direction: column;
            padding: 28px;
            gap: 24px;
          }
          .artist-header-left {
            flex-direction: column;
            gap: 20px;
          }
          .artist-stats-block {
            width: 100%;
            justify-content: space-around;
          }
        }
      `}</style>
    </div>
  );
}
