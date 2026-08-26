import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artworks, reviews as reviewsApi } from '../services/api';
import { useCart } from '../context/CartContext';

const ARView = lazy(() => import('../components/ARView'));

async function isARSupported() {
  if (!navigator.xr?.isSessionSupported) return false;
  try {
    return await navigator.xr.isSessionSupported('immersive-ar');
  } catch {
    return false;
  }
}

export default function ArtworkDetail() {
  const { addItem, items } = useCart();
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const inCart = items.some((i) => i.id === id);
  const [arSupported, setArSupported] = useState(false);
  const [arSession, setArSession] = useState(null);
  const [arError, setArError] = useState('');
  const arOverlayRef = useRef(null);
  const [reviewForm, setReviewForm] = useState({ rating: 5, title: '', comment: '' });
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState('');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const submitReview = async (e) => {
    e.preventDefault();
    if (!user) { setReviewError('Sign in to leave a review'); return; }
    setReviewSubmitting(true);
    setReviewError('');
    setReviewSuccess('');
    try {
      await reviewsApi.create({
        artworkId: id,
        rating: reviewForm.rating,
        title: reviewForm.title,
        comment: reviewForm.comment,
      });
      setReviewSuccess('Review submitted!');
      setReviewForm({ rating: 5, title: '', comment: '' });
      const { data } = await artworks.getById(id);
      setArtwork(data.artwork);
    } catch (err) {
      setReviewError(err.response?.data?.message || 'Failed to submit review');
    } finally {
      setReviewSubmitting(false);
    }
  };

  useEffect(() => {
    isARSupported().then(setArSupported);
  }, []);

  // Preload the AR chunk so launch is instant
  useEffect(() => {
    if (arSupported) import('../components/ARView');
  }, [arSupported]);

  // Session owner: end it when the page unmounts or session is replaced.
  useEffect(() => {
    if (!arSession) return;
    return () => {
      arSession.end().catch(() => {});
    };
  }, [arSession]);

  // Request the XR session directly in the click handler — it must run
  // while the tap's user activation is still valid. Doing it after the
  // lazy chunk loads/mounts loses the gesture and Chrome rejects it.
  const launchAR = async () => {
    setArError('');
    console.log('[AR] launch tapped, requesting session...');
    try {
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay', 'anchors', 'light-estimation'],
        domOverlay: arOverlayRef.current
          ? { root: arOverlayRef.current }
          : undefined,
      });
      console.log('[AR] session granted');
      setArSession(session);
    } catch (err) {
      console.error('[AR] requestSession failed:', err);
      setArError(
        `Could not start AR (${err.name || 'error'}: ${err.message || ''}). Make sure "Google Play Services for AR" is installed and you opened this page over HTTPS in Chrome.`
      );
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await artworks.getById(id);
        setArtwork(data.artwork);
      } catch (err) {
        console.error('Failed to fetch artwork:', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="skeleton" style={{ width: '100%', height: 500 }} />
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="detail-not-found">
        <h2>Artwork not found</h2>
        <Link to="/">Back to Catalog</Link>
      </div>
    );
  }

  const images = artwork.images || [];
  // Old records store absolute backend URLs; make them relative so they
  // load through the Vite proxy (avoids mixed content on phones).
  const fixUrl = (u) =>
    (u || '').replace(/^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+):\d+/, '');

  return (
    <div className="artwork-detail">
      <div className="detail-back">
        <Link to="/">← Back to Catalog</Link>
      </div>

      <div className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-main-image">
            <img
              src={fixUrl(images[activeImage]?.url || artwork.thumbnail)}
              alt={artwork.title}
            />
          </div>
          <div className="preview-actions">
            {arSupported && (
              <button className="preview-btn preview-btn-ar" onClick={launchAR}>
                ◉ Place in AR
                <small>See it on your wall at real size</small>
              </button>
            )}
            <Link
              to={`/artwork/${id}/render`}
              className="preview-btn preview-btn-render"
            >
              ✦ Photorealistic Preview
              <small>AI render in a photo of your room</small>
            </Link>
          </div>
          {arError && <div className="ar-error-msg">{arError}</div>}
          {images.length > 1 && (
            <div className="detail-thumbnails">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`thumb ${activeImage === i ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={fixUrl(img.url)} alt={`${artwork.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-info">
          <div className="detail-header">
            <h1 className="detail-title">{artwork.title}</h1>
            <p className="detail-artist">
              by{' '}
              <Link to={`/artist/${artwork.artist?._id}`}>
                {artwork.artist?.name || 'Unknown'}
              </Link>
            </p>
            {artwork.artist?.location && (
              <p className="detail-location">
                {artwork.artist.location.city}, {artwork.artist.location.country}
              </p>
            )}
          </div>

          <div className="detail-price-section">
            <span className="detail-price-usd">
              ${artwork.price?.usd?.toLocaleString()}
            </span>
            <span className="detail-price-ngn">
              ₦{artwork.price?.ngn?.toLocaleString()}
            </span>
            {artwork.status === 'Active' && (
              <button
                className={`btn-purchase ${inCart ? 'in-cart' : ''}`}
                onClick={() => addItem(artwork)}
              >
                {inCart ? 'In Cart ✓' : 'Add to Cart'}
              </button>
            )}
            {artwork.status === 'Sold' && (
              <span className="status-sold">Sold</span>
            )}
          </div>

          <div className="detail-specs">
            <h3>Specifications</h3>
            <div className="specs-grid">
              <div className="spec">
                <span className="spec-label">Medium</span>
                <span className="spec-value">{artwork.medium}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Style</span>
                <span className="spec-value">{artwork.style}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Dimensions</span>
                <span className="spec-value">
                  {artwork.dimensions?.width} × {artwork.dimensions?.height}{' '}
                  {artwork.dimensions?.unit}
                </span>
              </div>
              <div className="spec">
                <span className="spec-label">Year</span>
                <span className="spec-value">
                  {artwork.yearCreated || 'N/A'}
                </span>
              </div>
            </div>
          </div>

          <div className="detail-description">
            <h3>About</h3>
            <p>{artwork.description}</p>
          </div>

          {artwork.tags?.length > 0 && (
            <div className="detail-tags">
              {artwork.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {artwork.culturalOrigin && (
            <div className="detail-origin">
              <h3>Cultural Origin</h3>
              <p>
                {[artwork.culturalOrigin.country, artwork.culturalOrigin.region, artwork.culturalOrigin.tribe]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>
          )}
        </div>
      </div>

      <div ref={arOverlayRef} className="ar-overlay-root" />
      {arSession && (
        <Suspense fallback={null}>
          <ARView
            artwork={artwork}
            session={arSession}
            overlayRoot={arOverlayRef.current}
            onClose={() => setArSession(null)}
          />
        </Suspense>
      )}

      <section className="detail-reviews">
        <h2 className="reviews-title">Reviews</h2>

        <form onSubmit={submitReview} className="review-form">
          <h3>Leave a Review</h3>
          <div className="review-star-select">
            {[1,2,3,4,5].map((n) => (
              <button key={n} type="button" className={`star-btn ${n <= reviewForm.rating ? 'active' : ''}`}
                onClick={() => setReviewForm({ ...reviewForm, rating: n })}>★</button>
            ))}
          </div>
          <input type="text" placeholder="Review title (optional)" value={reviewForm.title}
            onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })} />
          <textarea placeholder="Share your thoughts about this artwork..." rows={3} value={reviewForm.comment}
            onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })} />
          {reviewError && <div className="form-error">{reviewError}</div>}
          {reviewSuccess && <div className="form-success">{reviewSuccess}</div>}
          <button type="submit" className="btn-submit-review" disabled={reviewSubmitting}>
            {reviewSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>

        {artwork.reviews?.length > 0 ? (
          <div className="reviews-list">
            {artwork.reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <strong>{review.buyer?.name || 'Anonymous'}</strong>
                  <div className="review-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                </div>
                {review.title && <p className="review-title">{review.title}</p>}
                {review.comment && <p className="review-comment">{review.comment}</p>}
                <span className="review-date">{new Date(review.createdAt).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="reviews-empty">No reviews yet. Purchase and receive this artwork to leave a review.</p>
        )}
      </section>

      <style>{`
        .artwork-detail {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .detail-back {
          margin-bottom: 24px;
        }

        .detail-back a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .detail-back a:hover {
          color: var(--color-accent);
        }

        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .detail-main-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-surface);
          aspect-ratio: 4 / 3;
        }

        .detail-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-actions {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .preview-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          border: 1px solid var(--color-border);
          background: var(--glass-bg);
          color: var(--color-text-primary);
        }

        .preview-btn small {
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--color-text-muted);
        }

        .preview-btn-ar {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: var(--color-bg);
        }

        .preview-btn-ar small {
          color: var(--color-bg);
          opacity: 0.75;
        }

        .preview-btn-ar:hover {
          filter: brightness(1.1);
        }

        .preview-btn-render:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .ar-error-msg {
          margin-top: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(232, 90, 90, 0.3);
          background: rgba(232, 90, 90, 0.1);
          border-radius: var(--radius-sm);
          color: var(--color-error, #e85a5a);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .ar-overlay-root {
          position: fixed;
          inset: 0;
          z-index: 10000;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .preview-actions {
            flex-direction: column;
          }
        }

        .detail-thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .thumb {
          width: 72px;
          height: 60px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid transparent;
          background: var(--color-surface);
          transition: border-color var(--transition-fast);
          padding: 0;
        }

        .thumb.active,
        .thumb:hover {
          border-color: var(--color-accent);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .detail-artist {
          color: var(--color-text-secondary);
          font-size: 1rem;
          margin-top: 8px;
        }

        .detail-artist a {
          color: var(--color-accent);
        }

        .detail-location {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-top: 4px;
        }

        .detail-price-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
          padding: 20px 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .detail-price-usd {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .detail-price-ngn {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .btn-purchase {
          margin-left: auto;
          padding: 12px 32px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-purchase:hover {
          background: var(--color-accent-light);
          transform: translateY(-2px);
        }

        .status-sold {
          margin-left: auto;
          padding: 8px 20px;
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .detail-specs {
          margin-top: 24px;
        }

        .detail-specs h3,
        .detail-description h3,
        .detail-origin h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          margin-bottom: 12px;
          color: var(--color-text-secondary);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .spec {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .spec-value {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .detail-description {
          margin-top: 24px;
        }

        .detail-description p {
          color: var(--color-text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .tag {
          padding: 4px 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .detail-origin {
          margin-top: 20px;
        }

        .detail-origin p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .detail-reviews {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--color-border);
        }

        .reviews-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .review-stars .star {
          color: var(--color-text-muted);
          font-size: 1rem;
        }

        .review-stars .star.filled {
          color: var(--color-accent);
        }

        .review-title {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .review-comment {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .review-date {
          display: block;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          margin-top: 8px;
        }

        .reviews-empty {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          padding: 32px 0;
        }

        .review-form {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .review-form h3 {
          font-family: var(--font-display);
          font-size: 1rem;
        }

        .review-star-select {
          display: flex;
          gap: 4px;
        }

        .star-btn {
          background: none;
          font-size: 1.5rem;
          color: var(--color-text-muted);
          padding: 2px 4px;
          transition: color var(--transition-fast);
        }

        .star-btn.active {
          color: var(--color-accent);
        }

        .star-btn:hover {
          color: var(--color-accent-light);
        }

        .review-form input,
        .review-form textarea {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.9rem;
        }

        .review-form input:focus,
        .review-form textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .btn-submit-review {
          padding: 10px 24px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          align-self: flex-start;
        }

        .btn-submit-review:hover:not(:disabled) {
          background: var(--color-accent-light);
        }

        .form-success {
          padding: 10px 14px;
          background: rgba(58,196,106,0.1);
          border: 1px solid rgba(58,196,106,0.3);
          border-radius: var(--radius-sm);
          color: var(--color-success);
          font-size: 0.85rem;
        }

        .btn-purchase.in-cart {
          background: var(--color-success);
        }

        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .detail-title {
            font-size: 1.6rem;
          }
        }

        .detail-loading {
          padding: 100px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .detail-not-found {
          padding: 150px 24px;
          text-align: center;
        }

        .detail-not-found h2 {
          font-family: var(--font-display);
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  );
}
