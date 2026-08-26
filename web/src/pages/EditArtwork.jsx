import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { artworks } from '../services/api';
import ImageUpload from '../components/ImageUpload';

export default function EditArtwork() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', description: '', medium: '', style: '', subject: '',
    priceNgn: '', priceUsd: '', height: '', width: '', depth: '0',
    imageUrl: '', status: 'Active', tags: '', yearCreated: '',
    country: '', region: '', tribe: '', materials: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [action, setAction] = useState('update');

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await artworks.getById(id);
        const a = data.artwork;
        setForm({
          title: a.title || '',
          description: a.description || '',
          medium: a.medium || '',
          style: a.style || '',
          subject: a.subject || '',
          priceNgn: a.price?.ngn?.toString() || '',
          priceUsd: a.price?.usd?.toString() || '',
          height: a.dimensions?.height?.toString() || '',
          width: a.dimensions?.width?.toString() || '',
          depth: a.dimensions?.depth?.toString() || '0',
          imageUrl: a.images?.[0]?.url || '',
          status: a.status || 'Active',
          tags: (a.tags || []).join(', '),
          yearCreated: a.yearCreated?.toString() || '',
          country: a.culturalOrigin?.country || '',
          region: a.culturalOrigin?.region || '',
          tribe: a.culturalOrigin?.tribe || '',
          materials: (a.materials || []).join(', '),
        });
      } catch (e) {
        setError('Failed to load artwork');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const payload = {
        status: action === 'unpublish' ? 'Draft' : form.status,
        title: form.title,
        description: form.description,
        medium: form.medium,
        style: form.style,
        subject: form.subject || undefined,
        price: { ngn: Number(form.priceNgn), usd: Number(form.priceUsd) },
        dimensions: { height: Number(form.height), width: Number(form.width), depth: Number(form.depth) || 0, unit: 'cm' },
        images: form.imageUrl ? [{ url: form.imageUrl, alt: form.title }] : undefined,
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        yearCreated: form.yearCreated ? Number(form.yearCreated) : undefined,
        culturalOrigin: { country: form.country || '', region: form.region || '', tribe: form.tribe || '' },
        materials: form.materials.split(',').map((m) => m.trim()).filter(Boolean),
      };

      if (action === 'unpublish') {
        payload.status = 'Draft';
      }

      await artworks.update(id, payload);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update artwork');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this artwork permanently?')) return;
    setSubmitting(true);
    try {
      await artworks.delete(id);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to delete');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="create-artwork-page"><div className="skeleton" style={{ height: 400 }} /></div>;
  }

  return (
    <div className="create-artwork-page">
      <div className="create-header">
        <button className="btn-back" onClick={() => navigate('/dashboard')}>← Back to Dashboard</button>
        <h1 className="create-title">Edit Artwork</h1>
      </div>

      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-section">
          <h2 className="section-title">Basic Information</h2>
          <div className="form-grid">
            <div className="form-group full">
              <label>Title *</label>
              <input name="title" value={form.title} onChange={handleChange} required />
            </div>
            <div className="form-group full">
              <label>Description *</label>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={4} />
            </div>
            <div className="form-group">
              <label>Medium *</label>
              <input name="medium" value={form.medium} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Style *</label>
              <input name="style" value={form.style} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Year Created</label>
              <input name="yearCreated" type="number" value={form.yearCreated} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Listing Status</h2>
          <div className="status-toggle">
            <button type="button" className={`toggle-btn ${form.status === 'Active' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, status: 'Active' })}>
              <span className="toggle-icon">✓</span>
              <div><strong>Active</strong><small>Visible in catalogue</small></div>
            </button>
            <button type="button" className={`toggle-btn ${form.status === 'Draft' ? 'draft' : ''}`}
              onClick={() => setForm({ ...form, status: 'Draft' })}>
              <span className="toggle-icon">✎</span>
              <div><strong>Draft</strong><small>Hidden from catalogue</small></div>
            </button>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Pricing</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Price (NGN) *</label>
              <input name="priceNgn" type="number" value={form.priceNgn} onChange={handleChange} required min="0" />
            </div>
            <div className="form-group">
              <label>Price (USD) *</label>
              <input name="priceUsd" type="number" value={form.priceUsd} onChange={handleChange} required min="0" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Dimensions (cm)</h2>
          <div className="form-grid">
            <div className="form-group"><label>Height *</label><input name="height" type="number" value={form.height} onChange={handleChange} required /></div>
            <div className="form-group"><label>Width *</label><input name="width" type="number" value={form.width} onChange={handleChange} required /></div>
            <div className="form-group"><label>Depth</label><input name="depth" type="number" value={form.depth} onChange={handleChange} /></div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Image</h2>
          <ImageUpload currentUrl={form.imageUrl} onUpload={(url) => setForm({ ...form, imageUrl: url })} />
        </div>

        <div className="form-section">
          <h2 className="section-title">Cultural Origin</h2>
          <div className="form-grid">
            <div className="form-group"><label>Country</label><input name="country" value={form.country} onChange={handleChange} /></div>
            <div className="form-group"><label>Region</label><input name="region" value={form.region} onChange={handleChange} /></div>
            <div className="form-group"><label>Tribe</label><input name="tribe" value={form.tribe} onChange={handleChange} /></div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Additional Info</h2>
          <div className="form-grid">
            <div className="form-group full"><label>Tags</label><input name="tags" value={form.tags} onChange={handleChange} placeholder="comma separated" /></div>
            <div className="form-group full"><label>Materials</label><input name="materials" value={form.materials} onChange={handleChange} placeholder="comma separated" /></div>
          </div>
        </div>

        {error && <div className="form-error">{error}</div>}

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={() => navigate('/dashboard')}>Cancel</button>
          <button type="button" className="btn-delete" onClick={handleDelete} disabled={submitting}>Delete</button>
          <button type="submit" className="btn-submit-artwork" disabled={submitting}
            onClick={() => setAction('update')}>
            {submitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>

      <style>{createStyles}</style>
    </div>
  );
}

const createStyles = `
  .create-artwork-page { max-width: 800px; margin: 0 auto; padding: 100px 24px 60px; animation: fadeIn 0.4s ease; }
  .create-header { margin-bottom: 32px; }
  .btn-back { background: none; color: var(--color-text-secondary); font-size: 0.9rem; padding: 0; margin-bottom: 16px; }
  .btn-back:hover { color: var(--color-accent); }
  .create-title { font-family: var(--font-display); font-size: 2rem; font-weight: 700; }
  .create-form { display: flex; flex-direction: column; gap: 28px; }
  .form-section { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-lg); padding: 24px; }
  .section-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border); color: var(--color-accent); }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group.full { grid-column: 1 / -1; }
  .form-group label { font-size: 0.85rem; font-weight: 500; color: var(--color-text-secondary); }
  .form-group input, .form-group textarea { padding: 10px 14px; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text-primary); font-size: 0.95rem; transition: border-color var(--transition-fast); }
  .form-group input:focus, .form-group textarea:focus { border-color: var(--color-accent); outline: none; }
  .form-error { padding: 12px 16px; background: rgba(232,90,90,0.1); border: 1px solid rgba(232,90,90,0.3); border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.9rem; }
  .form-actions { display: flex; gap: 12px; justify-content: flex-end; }
  .btn-cancel { padding: 12px 28px; background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text-secondary); font-size: 0.95rem; font-weight: 500; }
  .btn-cancel:hover { border-color: var(--color-text-muted); color: var(--color-text-primary); }
  .btn-delete { padding: 12px 28px; background: transparent; border: 1px solid var(--color-error); border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.95rem; font-weight: 500; margin-right: auto; }
  .btn-delete:hover { background: rgba(232,90,90,0.1); }
  .btn-submit-artwork { padding: 12px 32px; background: var(--color-accent); color: var(--color-bg); border-radius: var(--radius-sm); font-weight: 700; font-size: 0.95rem; }
  .btn-submit-artwork:hover:not(:disabled) { background: var(--color-accent-light); transform: translateY(-1px); }
  .btn-submit-artwork:disabled { opacity: 0.6; cursor: not-allowed; }
  .status-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .toggle-btn { display: flex; align-items: center; gap: 12px; padding: 16px; background: var(--color-bg-card); border: 2px solid var(--color-border); border-radius: var(--radius-md); text-align: left; transition: all var(--transition-fast); cursor: pointer; }
  .toggle-btn:hover { border-color: var(--color-text-muted); }
  .toggle-btn.active { border-color: var(--color-accent); background: rgba(212,168,83,0.08); }
  .toggle-btn.draft { border-color: var(--color-text-muted); background: rgba(136,136,160,0.08); }
  .toggle-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--color-surface); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .toggle-btn.active .toggle-icon { background: var(--color-accent); color: var(--color-bg); }
  .toggle-btn strong { display: block; font-size: 0.95rem; color: var(--color-text-primary); }
  .toggle-btn small { display: block; font-size: 0.8rem; color: var(--color-text-muted); margin-top: 2px; }
  @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } .status-toggle { grid-template-columns: 1fr; } }
`;
