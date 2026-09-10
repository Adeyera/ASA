import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { artworks } from '../services/api';
import ArtworkModal from '../components/ArtworkModal';
import { resolveImageUrl } from '../utils/imageUrl';

const STYLES_ALL = 'All';

export default function DiscoverArtworks() {
  const [artworkList, setArtworkList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [styles, setStyles] = useState([]);
  const [activeStyle, setActiveStyle] = useState(STYLES_ALL);
  const [sort, setSort] = useState('-createdAt');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [selected, setSelected] = useState(null);
  const gridRef = useRef(null);
  const searchTimeout = useRef(null);

  // Fetch available styles
  useEffect(() => {
    artworks.getStyles().then(({ data }) => {
      setStyles([STYLES_ALL, ...(data.styles || data || [])]);
    }).catch(() => {
      setStyles([STYLES_ALL, 'Contemporary', 'Traditional', 'Tribal', 'Abstract', 'Impressionist']);
    });
  }, []);

  const fetchArtworks = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const params = {
        page,
        limit: 12,
        sort,
        search: search || undefined,
        style: activeStyle !== STYLES_ALL ? activeStyle : undefined,
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

  // Scroll-reveal
  useEffect(() => {
    const els = gridRef.current?.querySelectorAll('.discover-card') || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [artworkList]);

  // Debounced search
  const handleSearchInput = (e) => {
    const val = e.target.value;
    setSearchInput(val);
    clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      setSearch(val);
    }, 400);
  };

  const handleStyleClick = (style) => {
    setActiveStyle(style);
  };

  return (
    <div className="discover-page">
      {/* Header */}
      <section className="discover-header">
        <span className="discover-eyebrow">
          <span className="discover-dot" />
          Full Collection
        </span>
        <h1 className="discover-title">Discover Artworks</h1>
        <p className="discover-sub">
          Browse, search, and filter the complete Àṣà collection of original African art.
        </p>
      </section>

      {/* Toolbar */}
      <section className="discover-toolbar">
        <div className="discover-search-wrap">
          <svg className="discover-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="discover-search"
            placeholder="Search by title, artist, or tag…"
            value={searchInput}
            onChange={handleSearchInput}
          />
          {searchInput && (
            <button className="discover-search-clear" onClick={() => { setSearchInput(''); setSearch(''); }}>
              ×
            </button>
          )}
        </div>

        <div className="discover-filters">
          <div className="discover-styles">
            {styles.map((style) => (
              <button
                key={style}
                className={`discover-chip ${activeStyle === style ? 'active' : ''}`}
                onClick={() => handleStyleClick(style)}
              >
                {style}
              </button>
            ))}
          </div>

          <select
            className="discover-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="-createdAt">Newest First</option>
            <option value="createdAt">Oldest First</option>
            <option value="price.usd">Price: Low → High</option>
            <option value="-price.usd">Price: High → Low</option>
          </select>
        </div>
      </section>

      {/* Results count */}
      {!loading && (
        <div className="discover-meta">
          <span>{pagination.total} artwork{pagination.total !== 1 ? 's' : ''} found</span>
        </div>
      )}

      {/* Grid */}
      <section className="discover-grid-wrap" ref={gridRef}>
        {loading ? (
          <div className="discover-loading">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="discover-skeleton">
                <div className="skeleton discover-skel-img" />
                <div className="skeleton discover-skel-title" />
                <div className="skeleton discover-skel-row" />
              </div>
            ))}
          </div>
        ) : artworkList.length === 0 ? (
          <div className="discover-empty">
            <h3>No artworks found</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="discover-grid">
            {artworkList.map((art, i) => {
              const rawImgUrl = art.images?.[0]?.url || art.thumbnail || '';
              const imgUrl = resolveImageUrl(rawImgUrl);
              const liked = JSON.parse(localStorage.getItem('liked') || '[]').includes(art._id);
              return (
                <article
                  key={art._id}
                  className="discover-card"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setSelected({ artwork: art, index: i })}
                >
                  <div className="discover-card-img">
                    <img src={imgUrl} alt={art.title} loading="lazy" referrerPolicy="no-referrer" />
                    <div className="discover-card-overlay">
                      <span className="discover-card-cta">View Artwork</span>
                    </div>
                    {liked && <span className="discover-card-heart">♥</span>}
                  </div>
                  <div className="discover-card-body">
                    <h3>{art.title}</h3>
                    <div className="discover-card-meta">
                      <span className="discover-card-artist">{art.artist?.name || 'Unknown'}</span>
                      <span className="discover-card-price">${art.price?.usd?.toLocaleString()}</span>
                    </div>
                    {art.style && <span className="discover-card-style">{art.style}</span>}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Pagination */}
      {!loading && pagination.totalPages > 1 && (
        <div className="discover-pagination">
          <button
            className="discover-page-btn"
            disabled={pagination.page <= 1}
            onClick={() => fetchArtworks(pagination.page - 1)}
          >
            ← Previous
          </button>
          <span className="discover-page-info">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            className="discover-page-btn"
            disabled={pagination.page >= pagination.totalPages}
            onClick={() => fetchArtworks(pagination.page + 1)}
          >
            Next →
          </button>
        </div>
      )}

      {/* Artwork Modal */}
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

      <style>{`
        .discover-page {
          padding: 120px 24px 80px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .discover-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .discover-eyebrow {
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
        .discover-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: asaFloat 3s ease-in-out infinite;
        }
        .discover-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 400;
          line-height: 1.08;
          color: var(--color-text-primary);
          margin-top: 20px;
          animation: asaUp 0.7s ease both;
          animation-delay: 80ms;
        }
        .discover-sub {
          max-width: 480px;
          margin: 14px auto 0;
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          animation: asaUp 0.7s ease both;
          animation-delay: 160ms;
        }

        /* Toolbar */
        .discover-toolbar {
          margin-bottom: 16px;
          animation: asaUp 0.7s ease both;
          animation-delay: 200ms;
        }
        .discover-search-wrap {
          position: relative;
          max-width: 480px;
          margin: 0 auto 20px;
        }
        .discover-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          pointer-events: none;
        }
        .discover-search {
          width: 100%;
          padding: 14px 44px 14px 46px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 0.95rem;
          color: var(--color-text-primary);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .discover-search:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(203, 75, 30, 0.1);
        }
        .discover-search-clear {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--color-surface);
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .discover-search-clear:hover {
          background: var(--color-border-hover);
        }
        .discover-filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .discover-styles {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex: 1;
        }
        .discover-chip {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          background: var(--color-bg-card);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .discover-chip:hover {
          border-color: var(--color-border-hover);
          color: var(--color-text-primary);
        }
        .discover-chip.active {
          background: var(--color-ink);
          color: var(--color-cream);
          border-color: var(--color-ink);
        }
        .discover-sort {
          padding: 10px 16px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--color-text-primary);
          cursor: pointer;
          flex-shrink: 0;
        }
        .discover-sort:focus {
          outline: none;
          border-color: var(--color-accent);
        }

        /* Meta */
        .discover-meta {
          padding: 8px 4px 20px;
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }

        /* Grid */
        .discover-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
        }

        /* Card */
        .discover-card {
          cursor: pointer;
          opacity: 0;
          transform: translateY(24px);
          animation: discoverCardIn 0.5s ease forwards;
        }
        .discover-card-img {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: var(--radius-sm);
        }
        .discover-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }
        .discover-card:hover .discover-card-img img {
          transform: scale(1.05);
          filter: brightness(0.9);
        }
        .discover-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .discover-card:hover .discover-card-overlay { opacity: 1; }
        .discover-card-cta {
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          padding: 9px 22px;
          border-radius: 999px;
          box-shadow: var(--glass-shadow);
          transform: translateY(8px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .discover-card:hover .discover-card-cta { transform: translateY(0); }
        .discover-card-heart {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: var(--color-error);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .discover-card-body { padding: 14px 2px 4px; }
        .discover-card-body h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--color-text-primary);
          line-height: 1.25;
        }
        .discover-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 6px;
          gap: 12px;
        }
        .discover-card-artist {
          color: var(--color-text-secondary);
          font-size: 0.84rem;
          font-style: italic;
        }
        .discover-card-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
        .discover-card-style {
          display: inline-block;
          margin-top: 6px;
          padding: 3px 10px;
          background: var(--color-surface);
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        /* Loading skeletons */
        .discover-loading {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
        }
        .discover-skeleton { display: flex; flex-direction: column; gap: 10px; }
        .discover-skel-img { aspect-ratio: 3 / 4; border-radius: var(--radius-sm); }
        .discover-skel-title { height: 18px; width: 70%; border-radius: 4px; }
        .discover-skel-row { height: 14px; width: 50%; border-radius: 4px; }

        /* Empty state */
        .discover-empty {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1 / -1;
        }
        .discover-empty h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }
        .discover-empty p {
          color: var(--color-text-secondary);
          margin-top: 8px;
        }

        /* Pagination */
        .discover-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 48px 0 16px;
        }
        .discover-page-btn {
          padding: 10px 22px;
          border-radius: 999px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .discover-page-btn:hover:not(:disabled) {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .discover-page-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .discover-page-info {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        @keyframes discoverCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .discover-page { padding: 100px 16px 60px; }
          .discover-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .discover-filters { flex-direction: column; align-items: stretch; }
          .discover-styles { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; }
        }
        @media (max-width: 400px) {
          .discover-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
