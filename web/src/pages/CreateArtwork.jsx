import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { artworks } from '../services/api';
import ImageUpload from '../components/ImageUpload';

export default function CreateArtwork() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    medium: '',
    style: '',
    priceNgn: '',
    priceUsd: '',
    height: '',
    width: '',
    imageUrl: '',
    status: 'Active',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.imageUrl) return 'Upload an image of your artwork';
    if (!form.title.trim()) return 'Title is required';
    if (!form.description.trim()) return 'Description is required';
    if (!form.medium.trim()) return 'Medium is required';
    if (!form.style.trim()) return 'Style is required';
    if (!form.priceNgn || Number(form.priceNgn) <= 0) return 'Enter a valid NGN price';
    if (!form.priceUsd || Number(form.priceUsd) <= 0) return 'Enter a valid USD price';
    if (!form.height || Number(form.height) <= 0) return 'Enter a valid height';
    if (!form.width || Number(form.width) <= 0) return 'Enter a valid width';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }
    setSubmitting(true);
    setError('');

    try {
      await artworks.create({
        status: form.status,
        title: form.title,
        description: form.description,
        medium: form.medium,
        style: form.style,
        price: {
          ngn: Number(form.priceNgn),
          usd: Number(form.priceUsd),
        },
        dimensions: {
          height: Number(form.height),
          width: Number(form.width),
          depth: 0,
          unit: 'cm',
        },
        images: [{ url: form.imageUrl, alt: form.title }],
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create artwork');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="create-artwork-page">
      <div className="create-header">
        <button className="btn-back" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>
        <h1 className="create-title">List New Artwork</h1>
      </div>

      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-section">
          <h2 className="section-title">Artwork</h2>
          <div className="form-grid">
            <div className="form-group full">
              <label>Image *</label>
              <ImageUpload
                currentUrl={form.imageUrl}
                onUpload={(url) => setForm({ ...form, imageUrl: url })}
              />
            </div>
            <div className="form-group full">
              <label>Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. African Sunset"
              />
            </div>
            <div className="form-group full">
              <label>Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe the artwork, its inspiration, and significance..."
              />
            </div>
            <div className="form-group">
              <label>Medium *</label>
              <input
                name="medium"
                value={form.medium}
                onChange={handleChange}
                placeholder="e.g. Oil on Canvas"
              />
            </div>
            <div className="form-group">
              <label>Style *</label>
              <input
                name="style"
                value={form.style}
                onChange={handleChange}
                placeholder="e.g. Contemporary"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Pricing & Size</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Price (NGN) *</label>
              <input
                name="priceNgn"
                type="number"
                value={form.priceNgn}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 150000"
              />
            </div>
            <div className="form-group">
              <label>Price (USD) *</label>
              <input
                name="priceUsd"
                type="number"
                value={form.priceUsd}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 350"
              />
            </div>
            <div className="form-group">
              <label>Width (cm) *</label>
              <input
                name="width"
                type="number"
                value={form.width}
                onChange={handleChange}
                min="1"
                placeholder="e.g. 100"
              />
            </div>
            <div className="form-group">
              <label>Height (cm) *</label>
              <input
                name="height"
                type="number"
                value={form.height}
                onChange={handleChange}
                min="1"
                placeholder="e.g. 80"
              />
            </div>
          </div>
          <p className="form-hint">
            Accurate dimensions power the AR preview at real-world size.
          </p>
        </div>

        <div className="form-section">
          <h2 className="section-title">Listing Status</h2>
          <div className="status-toggle">
            <button
              type="button"
              className={`toggle-btn ${form.status === 'Active' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, status: 'Active' })}
            >
              <span className="toggle-icon">✓</span>
              <div>
                <strong>Active</strong>
                <small>Visible in catalogue immediately</small>
              </div>
            </button>
            <button
              type="button"
              className={`toggle-btn ${form.status === 'Draft' ? 'draft' : ''}`}
              onClick={() => setForm({ ...form, status: 'Draft' })}
            >
              <span className="toggle-icon">✎</span>
              <div>
                <strong>Draft</strong>
                <small>Save as draft, publish later</small>
              </div>
            </button>
          </div>
        </div>

        {error && <div className="form-error">{error}</div>}

        <div className="form-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate('/dashboard')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-submit-artwork"
            disabled={submitting}
          >
            {submitting
              ? 'Creating...'
              : form.status === 'Draft'
                ? 'Save Draft'
                : 'Publish Artwork'}
          </button>
        </div>
      </form>

      <style>{`
        .create-artwork-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .create-header {
          margin-bottom: 24px;
        }

        .btn-back {
          background: none;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          padding: 0;
          margin-bottom: 16px;
          transition: color var(--transition-fast);
        }

        .btn-back:hover {
          color: var(--color-accent);
        }

        .create-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
        }

        .create-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-section {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-accent);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-hint {
          margin-top: 16px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .form-error {
          padding: 12px 16px;
          background: rgba(232, 90, 90, 0.1);
          border: 1px solid rgba(232, 90, 90, 0.3);
          border-radius: var(--radius-sm);
          color: var(--color-error);
          font-size: 0.9rem;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: space-between;
        }

        .btn-cancel {
          padding: 12px 28px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-cancel:hover {
          border-color: var(--color-text-muted);
          color: var(--color-text-primary);
        }

        .btn-submit-artwork {
          padding: 12px 32px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-submit-artwork:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .btn-submit-artwork:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .status-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--color-bg-card);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .toggle-btn:hover {
          border-color: var(--color-text-muted);
        }

        .toggle-btn.active {
          border-color: var(--color-accent);
          background: rgba(212, 168, 83, 0.08);
        }

        .toggle-btn.draft {
          border-color: var(--color-text-muted);
          background: rgba(136, 136, 160, 0.08);
        }

        .toggle-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .toggle-btn.active .toggle-icon {
          background: var(--color-accent);
          color: var(--color-bg);
        }

        .toggle-btn strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-primary);
        }

        .toggle-btn small {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .create-title {
            font-size: 1.5rem;
          }
          .status-toggle {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
