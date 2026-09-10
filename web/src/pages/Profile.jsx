import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, artworks } from '../services/api';
import ImageUpload from '../components/ImageUpload';
import { resolveImageUrl } from '../utils/imageUrl';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
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
  const [upgrading, setUpgrading] = useState(false);
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' | 'settings'

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await auth.getMe();
        const u = data.user;
        setUser(u);
        localStorage.setItem('user', JSON.stringify(u));
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
          setMyArtworks(artRes.data.artworks || []);
        }
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const { data } = await auth.updateProfile({
        name: profile.name,
        bio: profile.bio,
        phone: profile.phone,
        location: { country: profile.country, city: profile.city },
        avatar: profile.avatar,
      });
      const updatedUser = data.user || { ...user, ...profile };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      console.error(e);
      alert('Failed to update profile');
    }
    setSaving(false);
  };

  const handleBecomeArtist = async () => {
    setUpgrading(true);
    try {
      const { data } = await auth.becomeArtist();
      const updatedUser = data.user;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      const artRes = await artworks.getMy();
      setMyArtworks(artRes.data.artworks || []);
      alert('Congratulations! Your account is now an Artist account.');
    } catch (err) {
      console.error(err);
      alert('Failed to activate artist account.');
    } finally {
      setUpgrading(false);
    }
  };

  const isArtist = user?.role === 'artist';

  return (
    <div className="profile-page">
      {/* Profile Header Banner */}
      <div className="profile-header-banner">
        <div className="profile-user-info">
          {profile.avatar ? (
            <img
              src={resolveImageUrl(profile.avatar)}
              alt={profile.name}
              className="profile-avatar-img"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="profile-avatar-placeholder">
              {(profile.name || user?.name || 'A')
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </div>
          )}

          <div>
            <div className="profile-role-pill">
              {isArtist ? '✦ Artist Account' : 'Collector Account'}
            </div>
            <h1 className="profile-display-name">{profile.name || user?.name || 'My Profile'}</h1>
            <p className="profile-email-text">{user?.email}</p>
            {profile.city || profile.country ? (
              <p className="profile-location-text">
                📍 {[profile.city, profile.country].filter(Boolean).join(', ')}
              </p>
            ) : null}
          </div>
        </div>

        <div className="profile-header-actions">
          {isArtist ? (
            <>
              {user?._id && (
                <Link to={`/artist/${user._id}`} className="btn-view-public">
                  View Public Profile ↗
                </Link>
              )}
              <Link to="/create" className="btn-create-artwork">
                + List Artwork
              </Link>
              <Link to="/dashboard" className="btn-dash-link">
                Dashboard
              </Link>
            </>
          ) : (
            <button
              className="btn-become-artist"
              onClick={handleBecomeArtist}
              disabled={upgrading}
            >
              {upgrading ? 'Activating...' : 'Sell Art on Àṣà'}
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      {isArtist && (
        <div className="profile-tabs">
          <button
            className={`ptab ${activeTab === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveTab('portfolio')}
          >
            My Artworks Portfolio ({myArtworks.length})
          </button>
          <button
            className={`ptab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Account Settings
          </button>
        </div>
      )}

      {/* Main Content Area */}
      {isArtist && activeTab === 'portfolio' ? (
        <div className="artist-works-section">
          {/* Artist Stats Row */}
          <div className="artist-stats-row">
            <div className="stat-box">
              <span className="stat-val">{myArtworks.length}</span>
              <span className="stat-lbl">Total Artworks</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{myArtworks.filter((a) => a.status === 'Active').length}</span>
              <span className="stat-lbl">Active in Catalog</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{myArtworks.filter((a) => a.status === 'Sold').length}</span>
              <span className="stat-lbl">Sold</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{myArtworks.filter((a) => a.status === 'Draft').length}</span>
              <span className="stat-lbl">Drafts</span>
            </div>
          </div>

          {/* Artworks List / Grid */}
          <div className="works-header-bar">
            <h2>My Created Works</h2>
            <Link to="/create" className="btn-list-new">+ List New Artwork</Link>
          </div>

          {myArtworks.length === 0 ? (
            <div className="works-empty-state">
              <div className="empty-icon">🎨</div>
              <h3>No artworks listed yet</h3>
              <p>Upload your first original piece to start selling on the marketplace.</p>
              <Link to="/create" className="btn-create-first">List Your First Artwork</Link>
            </div>
          ) : (
            <div className="works-portfolio-grid">
              {myArtworks.map((art) => {
                const imgUrl = resolveImageUrl(art.images?.[0]?.url || art.thumbnail || '');
                return (
                  <div key={art._id} className="portfolio-work-card">
                    <div className="portfolio-work-thumb">
                      <img src={imgUrl} alt={art.title} referrerPolicy="no-referrer" />
                      <span className={`status-tag ${art.status.toLowerCase()}`}>
                        {art.status}
                      </span>
                    </div>
                    <div className="portfolio-work-details">
                      <h3 className="work-title">{art.title}</h3>
                      <p className="work-medium">{art.medium} · {art.style}</p>
                      <div className="work-price-row">
                        <span className="work-price-usd">${art.price?.usd?.toLocaleString()}</span>
                        <span className="work-price-ngn">₦{art.price?.ngn?.toLocaleString()}</span>
                      </div>
                      <div className="work-actions">
                        <Link to={`/artwork/${art._id}`} className="btn-work-view">View</Link>
                        <Link to={`/edit/${art._id}`} className="btn-work-edit">Edit</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="profile-layout">
          <div className="profile-card">
            <h2 className="card-section-title">Edit Profile Information</h2>
            <form onSubmit={handleSave} className="profile-form">
              <div className="form-group">
                <label>Profile Picture / Avatar</label>
                <ImageUpload
                  currentUrl={profile.avatar}
                  onUpload={(url) => setProfile({ ...profile, avatar: url })}
                />
              </div>

              <div className="form-group">
                <label>Full Display Name</label>
                <input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="Your Name or Studio Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Artist Biography / About You</label>
                <textarea
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  placeholder="Tell collectors about your artistic journey, traditions, and style..."
                />
              </div>

              <div className="form-group">
                <label>Contact Phone Number</label>
                <input
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    value={profile.country}
                    onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                    placeholder="e.g. Nigeria, Ghana, Kenya"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    value={profile.city}
                    onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    placeholder="e.g. Lagos, Accra, Nairobi"
                  />
                </div>
              </div>

              <button type="submit" className="btn-save" disabled={saving}>
                {saving ? 'Saving...' : saved ? 'Saved Successfully ✓' : 'Save Changes'}
              </button>
            </form>
          </div>

          <div className="profile-sidebar-col">
            {!isArtist && (
              <div className="become-artist-card">
                <h3>Sell Your Artwork</h3>
                <p>
                  Join our curated community of contemporary African artists and sell your pieces directly to global collectors.
                </p>
                <button
                  className="btn-upgrade-role"
                  onClick={handleBecomeArtist}
                  disabled={upgrading}
                >
                  {upgrading ? 'Upgrading...' : 'Activate Artist Account'}
                </button>
              </div>
            )}

            <div className="profile-summary-box">
              <h3>Account Details</h3>
              <div className="summary-row">
                <span>Account Type</span>
                <strong>{isArtist ? 'Artist' : 'Collector'}</strong>
              </div>
              <div className="summary-row">
                <span>Email Address</span>
                <span>{user?.email}</span>
              </div>
              {isArtist && (
                <div className="summary-row">
                  <span>Published Pieces</span>
                  <strong>{myArtworks.length}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .profile-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 24px 80px;
          animation: fadeIn 0.4s ease;
        }

        .profile-header-banner {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          backdrop-filter: blur(20px);
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .profile-user-info {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .profile-avatar-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-accent);
        }

        .profile-avatar-placeholder {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta, #b85d38));
          color: #fff;
          font-size: 1.8rem;
          font-weight: 700;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .profile-role-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          background: rgba(203, 75, 30, 0.1);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 6px;
        }

        .profile-display-name {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.1;
        }

        .profile-email-text {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .profile-location-text {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-top: 2px;
        }

        .profile-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-view-public {
          padding: 10px 20px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-view-public:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .btn-create-artwork, .btn-list-new {
          padding: 10px 22px;
          border-radius: 999px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.88rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }

        .btn-create-artwork:hover, .btn-list-new:hover {
          background: var(--color-accent-dark, #b83d12);
          transform: translateY(-1px);
        }

        .btn-dash-link {
          padding: 10px 20px;
          border-radius: 999px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-dash-link:hover {
          color: var(--color-text-primary);
          border-color: var(--color-border-hover);
        }

        .btn-become-artist {
          padding: 12px 24px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-become-artist:hover {
          background: var(--color-accent-dark, #b83d12);
        }

        .profile-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }

        .ptab {
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          background: transparent;
          color: var(--color-text-secondary);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
        }

        .ptab.active {
          background: var(--color-ink);
          color: var(--color-cream);
          border-color: var(--color-ink);
        }

        .ptab:hover:not(.active) {
          color: var(--color-text-primary);
          background: var(--color-bg-card);
        }

        .artist-stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-box {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }

        .stat-val {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-lbl {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .works-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .works-header-bar h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
        }

        .works-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        .portfolio-work-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast);
        }

        .portfolio-work-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--glass-shadow);
        }

        .portfolio-work-thumb {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--color-surface);
        }

        .portfolio-work-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .status-tag.active { background: rgba(58, 196, 106, 0.9); color: #fff; }
        .status-tag.draft { background: rgba(136, 136, 160, 0.9); color: #fff; }
        .status-tag.sold { background: rgba(232, 90, 90, 0.9); color: #fff; }

        .portfolio-work-details {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .work-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .work-medium {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
        }

        .work-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }

        .work-price-usd {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .work-price-ngn {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .work-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .btn-work-view, .btn-work-edit {
          flex: 1;
          text-align: center;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-work-view {
          background: var(--color-surface);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
        }

        .btn-work-view:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .btn-work-edit {
          background: var(--color-accent);
          color: #f2e9da;
        }

        .btn-work-edit:hover {
          background: var(--color-accent-dark, #b83d12);
        }

        .works-empty-state {
          text-align: center;
          padding: 60px 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }

        .works-empty-state h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          margin-bottom: 8px;
        }

        .works-empty-state p {
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-create-first {
          display: inline-block;
          padding: 12px 28px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 700;
        }

        .profile-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
        }

        .profile-card, .become-artist-card, .profile-summary-box {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 32px;
        }

        .card-section-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .profile-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .profile-form input, .profile-form textarea {
          padding: 12px 14px;
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
          padding: 14px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 1rem;
          transition: all var(--transition-fast);
          margin-top: 8px;
        }

        .btn-save:hover:not(:disabled) {
          background: var(--color-accent-dark, #b83d12);
        }

        .profile-sidebar-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .become-artist-card h3, .profile-summary-box h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .become-artist-card p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .btn-upgrade-role {
          width: 100%;
          padding: 12px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.92rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--color-border);
          font-size: 0.88rem;
        }

        .summary-row span {
          color: var(--color-text-secondary);
        }

        @media (max-width: 860px) {
          .profile-layout { grid-template-columns: 1fr; }
          .profile-header-banner { flex-direction: column; align-items: flex-start; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
