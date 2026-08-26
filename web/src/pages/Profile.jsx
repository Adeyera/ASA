import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, artworks } from '../services/api';

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    phone: '',
    country: '',
    city: '',
    avatar: '',
  });
  const [myArtworks, setMyArtworks] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await auth.getMe();
        const u = data.user;
        setProfile({
          name: u.name || '',
          bio: u.bio || '',
          phone: u.phone || '',
          country: u.location?.country || '',
          city: u.location?.city || '',
          avatar: u.avatar || '',
        });
        if (u.role === 'artist') {
          const artRes = await artworks.getMy();
          setMyArtworks(artRes.data.artworks);
        }
      } catch (e) { console.error(e); }
    };
    load();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await auth.updateProfile({
        name: profile.name,
        bio: profile.bio,
        phone: profile.phone,
        location: { country: profile.country, city: profile.city },
        avatar: profile.avatar,
      });
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      localStorage.setItem('user', JSON.stringify({ ...user, name: profile.name }));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) { console.error(e); }
    setSaving(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-layout">
        <div className="profile-card">
          <h1 className="profile-title">Profile</h1>
          <form onSubmit={handleSave} className="profile-form">
            <div className="form-group">
              <label>Display Name</label>
              <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea rows={3} value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <input value={profile.country} onChange={(e) => setProfile({ ...profile, country: e.target.value })} />
              </div>
              <div className="form-group">
                <label>City</label>
                <input value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })} />
              </div>
            </div>
            <button type="submit" className="btn-save" disabled={saving}>
              {saving ? 'Saving...' : saved ? 'Saved ✓' : 'Save Profile'}
            </button>
          </form>
        </div>
        {myArtworks.length > 0 && (
          <div className="profile-stats-card">
            <h3>Artist Summary</h3>
            <div className="profile-stats">
              <div className="pstat">
                <span className="pstat-val">{myArtworks.length}</span>
                <span className="pstat-lbl">Total Works</span>
              </div>
              <div className="pstat">
                <span className="pstat-val">{myArtworks.filter(a => a.status === 'Active').length}</span>
                <span className="pstat-lbl">Active</span>
              </div>
              <div className="pstat">
                <span className="pstat-val">{myArtworks.filter(a => a.status === 'Sold').length}</span>
                <span className="pstat-lbl">Sold</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .profile-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }
        .profile-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
        }
        .profile-card, .profile-stats-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 32px;
        }
        .profile-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .profile-form label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .profile-form input, .profile-form textarea {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
        }
        .profile-form input:focus, .profile-form textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .btn-save {
          padding: 12px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          margin-top: 8px;
        }
        .btn-save:hover:not(:disabled) {
          background: var(--color-accent-light);
        }
        .btn-save:disabled {
          opacity: 0.6;
        }
        .profile-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }
        .profile-stats-card h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
        }
        .pstat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .pstat-val {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-accent);
        }
        .pstat-lbl {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
