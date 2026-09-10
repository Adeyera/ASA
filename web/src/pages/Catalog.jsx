import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { artworks } from '../services/api';
import ArtworkModal from '../components/ArtworkModal';
import AuthGateModal from '../components/AuthGateModal';
import { resolveImageUrl } from '../utils/imageUrl';

// Àṣà scroll-column config (exact reference values).
const COLUMNS = [32, 26, 38, 24, 30];
const DELAYS = [-3, -14, -7, -19, -10];
const ASPECTS = ['3 / 4', '4 / 5', '2 / 3', '5 / 7', '3 / 4', '4 / 5'];

// Hero frame images and their layout transforms
const HERO_FRAMES = [
  { src: '/hero/art-1.png', alt: 'African artwork 1', rotate: -8, x: 0, y: 0 },
  { src: '/hero/art-2.png', alt: 'African artwork 2', rotate: -4, x: 0, y: 10 },
  { src: '/hero/art-3.png', alt: 'African artwork 3', rotate: 0, x: 0, y: -5 },
  { src: '/hero/art-4.png', alt: 'African artwork 4', rotate: 4, x: 0, y: 8 },
  { src: '/hero/art-5.png', alt: 'African artwork 5', rotate: 8, x: 0, y: 0 },
  { src: '/hero/art-6.png', alt: 'African artwork 6', rotate: -6, x: 0, y: 14 },
  { src: '/hero/art-7.png', alt: 'African artwork 7', rotate: 6, x: 0, y: 4 },
];

export default function Catalog() {
  const navigate = useNavigate();
  const [artworkList, setArtworkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStyle, setActiveStyle] = useState('All');
  const [sort, setSort] = useState('-createdAt');
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [selected, setSelected] = useState(null); // { artwork, index }
  const [showAuthGate, setShowAuthGate] = useState(false);
  const gridRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleSellArt = () => {
    if (user) {
      navigate('/create');
    } else {
      navigate('/login?mode=signup&role=artist');
    }
  };


  const fetchArtworks = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const params = {
        page,
        limit: 12,
        sort,
        search: search || undefined,
        style: activeStyle !== 'All' ? activeStyle : undefined,
      };
      const { data } = await artworks.getAll(params);
      setArtworkList(data.artworks);
      setPagination({
        page: data.currentPage,
        totalPages: data.totalPages,
        total: data.total,
      });
    } catch (err) {
      console.error('Failed to fetch artworks:', err);
    } finally {
      setLoading(false);
    }
  }, [sort, search, activeStyle]);

  useEffect(() => {
    fetchArtworks(1);
  }, [fetchArtworks]);

  // Scroll-reveal: rise + fade as cards enter viewport.
  useEffect(() => {
    const els = gridRef.current?.querySelectorAll('.reveal-up') || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [artworkList]);

  // Handle View All click — auth-gated
  const handleViewAll = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      navigate('/discover');
    } else {
      setShowAuthGate(true);
    }
  };

  return (
    <div className="catalog-page">
      <section className="hero">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          African Artists
        </span>
        <h1 className="hero-title">
          A living space for the <em>boldest</em> African
          <br />
          artists &amp; collectors
        </h1>
        <p className="hero-sub">
          Discover original works, meet the makers, and preview every piece on
          your own wall with augmented reality.
        </p>

        <div className="hero-cta">
          <a href="#collection" className="hero-btn primary">
            Explore the collection
          </a>
          <button onClick={handleSellArt} className="hero-btn ghost">
            Sell your art
          </button>
        </div>

        {/* Animated Hero Frames */}
        <div className="hero-frames-group">
          {HERO_FRAMES.map((frame, i) => (
            <div
              key={i}
              className="hero-frame"
              style={{
                '--frame-rotate': `${frame.rotate}deg`,
                '--frame-y': `${frame.y}px`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <img src={frame.src} alt={frame.alt} loading="eager" />
            </div>
          ))}
        </div>
      </section>

      {/* ARTWORKS — exact Àṣà scroll columns */}
      <section className="works" id="collection" ref={gridRef}>
        <div className="works-header-row">
          <div>
            <div className="works-eyebrow-wrap">
              <span className="works-eyebrow">Àṣà Collection</span>
            </div>
            <h2 className="works-title">Artworks</h2>
          </div>
          <button className="works-view-all-top" onClick={handleViewAll}>
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="works-empty"><h3>Loading…</h3></div>
        ) : artworkList.length === 0 ? (
          <div className="works-empty">
            <h3>No works found</h3>
            <p>Check back soon for new pieces.</p>
          </div>
        ) : (
          <div className="works-stage">
            <div className="works-cols">
              {COLUMNS.map((dur, ci) => {
                const bucket = artworkList.filter((_, i) => i % 5 === ci);
                const loop = [...bucket, ...bucket];
                return (
                  <div className="works-col" key={ci}>
                    <div
                      className="works-track"
                      style={{
                        animationDuration: `${dur}s`,
                        animationDelay: `${DELAYS[ci]}s`,
                      }}
                    >
                      {loop.map((art, j) => {
                        const realIndex = artworkList.findIndex((a) => a._id === art._id);
                        const imgUrl = resolveImageUrl(art.images?.[0]?.url || art.thumbnail || '');
                        return (
                          <button
                            key={art._id + '-' + j}
                            className="works-tile"
                            style={{ aspectRatio: ASPECTS[realIndex % ASPECTS.length] }}
                            onClick={() => setSelected({ artwork: art, index: realIndex })}
                          >
                            <img src={imgUrl} alt={art.title} loading="lazy" referrerPolicy="no-referrer" />
                            <span className="works-tile-label">
                              {art.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom View All button */}
        <div className="works-view-all-bottom-wrap">
          <button className="works-view-all-bottom" onClick={handleViewAll}>
            View All Artworks
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {selected && (
        <ArtworkModal
          artwork={selected.artwork}
          index={selected.index}
          total={artworkList.length}
          onClose={() => setSelected(null)}
          onPrev={() =>
            setSelected((s) => {
              const i = (s.index - 1 + artworkList.length) % artworkList.length;
              return { artwork: artworkList[i], index: i };
            })
          }
          onNext={() =>
            setSelected((s) => {
              const i = (s.index + 1) % artworkList.length;
              return { artwork: artworkList[i], index: i };
            })
          }
        />
      )}

      {showAuthGate && (
        <AuthGateModal onClose={() => setShowAuthGate(false)} />
      )}

      <style>{`
        .catalog-page { padding-top: 96px; }

        /* HERO */
        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 12px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
          animation: asaUp 0.6s ease both;
        }
        .hero-eyebrow-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: asaFloat 3s ease-in-out infinite;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 6.4vw, 5.4rem);
          font-weight: 400;
          line-height: 1.04;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
          margin-top: 22px;
          animation: asaUp 0.7s ease both;
          animation-delay: 80ms;
        }
        .hero-title em {
          font-style: italic;
          color: var(--color-accent);
        }
        .hero-sub {
          max-width: 520px;
          margin: 22px auto 0;
          color: var(--color-text-secondary);
          font-size: 1.02rem;
          line-height: 1.7;
          animation: asaUp 0.7s ease both;
          animation-delay: 160ms;
        }
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
          flex-wrap: wrap;
          animation: asaUp 0.7s ease both;
          animation-delay: 240ms;
        }
        .hero-btn {
          padding: 14px 30px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .hero-btn.primary {
          background: var(--color-ink);
          color: var(--color-cream);
        }
        .hero-btn.primary:hover { background: #2a211a; transform: translateY(-1px); }
        .hero-btn.ghost {
          background: transparent;
          border: 1px solid var(--color-border-hover);
          color: var(--color-text-primary);
        }
        .hero-btn.ghost:hover { border-color: var(--color-accent); color: var(--color-accent); }

        /* HERO FRAMES — animated group */
        .hero-frames-group {
          margin: 54px auto 0;
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 0;
          padding: 20px 0 40px;
          animation: asaUp 0.8s ease both;
          animation-delay: 300ms;
          perspective: 800px;
        }
        .hero-frame {
          flex: 0 0 auto;
          width: clamp(90px, 12vw, 145px);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 12px 40px -10px rgba(0, 0, 0, 0.35);
          transform: rotate(var(--frame-rotate)) translateY(var(--frame-y));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease;
          cursor: default;
          margin: 0 -6px;
          position: relative;
          z-index: 1;
          animation: heroFrameIn 0.6s ease both;
        }
        .hero-frame:hover {
          transform: rotate(var(--frame-rotate)) translateY(calc(var(--frame-y) - 18px)) scale(1.06);
          box-shadow: 0 22px 50px -8px rgba(0, 0, 0, 0.45);
          z-index: 10;
        }
        .hero-frame img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 4;
          object-fit: cover;
        }
        @keyframes heroFrameIn {
          from {
            opacity: 0;
            transform: rotate(var(--frame-rotate)) translateY(calc(var(--frame-y) + 30px)) scale(0.92);
          }
          to {
            opacity: 1;
            transform: rotate(var(--frame-rotate)) translateY(var(--frame-y)) scale(1);
          }
        }

        /* WORKS — dark ÀṢÀ band */
        .works {
          background: #0c0c0e;
          color: #f2e9da;
          padding: 64px 24px 48px;
          margin-top: 40px;
        }
        .works-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding: 0 6px;
          position: relative;
          z-index: 3;
        }
        .works-eyebrow-wrap {
          display: flex;
          justify-content: flex-start;
        }
        .works-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 9px 16px;
          border: 1px solid rgba(242, 233, 218, 0.28);
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f2e9da;
        }
        .works-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 15.5vw, 15rem);
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #f2e9da;
          margin: 2px 0 -1.5vw;
          padding-left: 2px;
          position: relative;
          z-index: 2;
          pointer-events: none;
        }
        .works-view-all-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(242, 233, 218, 0.25);
          color: rgba(242, 233, 218, 0.75);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
          margin-bottom: 12px;
        }
        .works-view-all-top:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        /* infinite scroll columns */
        .works-stage {
          position: relative;
          z-index: 1;
          height: 82vh;
          min-height: 640px;
          overflow: hidden;
          padding: 0 6px;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 86%, transparent 100%);
        }
        .works-cols {
          display: flex;
          gap: 26px;
          align-items: flex-start;
          height: 100%;
        }
        .works-col { flex: 1; min-width: 0; height: 100%; }
        .works-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
          animation-name: asaRise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .works-col:hover .works-track { animation-play-state: paused; }
        .works-tile {
          position: relative;
          width: 100%;
          margin-bottom: 30px;
          border-radius: 5px;
          overflow: hidden;
          padding: 0;
          border: none;
          cursor: pointer;
          background: #161210;
          box-shadow: 0 20px 44px -22px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease;
        }
        .works-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .works-tile:hover { transform: scale(1.02); }
        .works-tile-label {
          position: absolute;
          left: 10px;
          bottom: 9px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #f2e9da;
          background: rgba(12, 12, 14, 0.55);
          backdrop-filter: blur(4px);
          padding: 4px 9px;
          border-radius: 999px;
        }
        .works-empty {
          text-align: center;
          padding: 80px 20px;
        }
        .works-empty h3 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #f2e9da;
        }
        .works-empty p { color: rgba(242, 233, 218, 0.55); margin-top: 8px; }

        /* Bottom View All */
        .works-view-all-bottom-wrap {
          display: flex;
          justify-content: center;
          padding: 40px 0 0;
          position: relative;
          z-index: 3;
        }
        .works-view-all-bottom {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 999px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          transition: all var(--transition-fast);
          box-shadow: 0 6px 24px rgba(203, 75, 30, 0.35);
        }
        .works-view-all-bottom:hover {
          background: var(--color-accent-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(203, 75, 30, 0.45);
        }

        @media (max-width: 760px) {
          .works-stage { height: 70vh; min-height: 520px; }
          .works-col:nth-child(n+4) { display: none; }
          .hero-frames-group { gap: 0; padding: 16px 0 30px; }
          .hero-frame { width: clamp(70px, 14vw, 110px); }
        }
        @media (max-width: 520px) {
          .catalog-page { padding-top: 84px; }
          .hero { padding: 24px 18px 8px; }
          .works { padding: 44px 14px 36px; }
          .works-cols { gap: 16px; }
          .works-col:nth-child(n+3) { display: none; }
          .works-header-row { flex-direction: column; align-items: flex-start; }
          .works-view-all-top { align-self: flex-start; margin-bottom: 0; }
          .hero-frame { width: clamp(60px, 18vw, 90px); margin: 0 -4px; }
        }
      `}</style>
    </div>
  );
}
