import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { artworks, orders } from '../services/api';
import { resolveImageUrl } from '../utils/imageUrl';

export default function ArtistDashboard() {
  const navigate = useNavigate();
  const [myArtworks, setMyArtworks] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [salesOverview, setSalesOverview] = useState(null);
  const [activeTab, setActiveTab] = useState('artworks');
  const [loading, setLoading] = useState(true);
  const [updatingOrder, setUpdatingOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artRes, orderRes, salesRes] = await Promise.all([
          artworks.getMy(),
          orders.getAll(),
          orders.getSalesOverview().catch(() => null),
        ]);
        setMyArtworks(artRes.data.artworks);
        setMyOrders(orderRes.data.orders);
        if (salesRes) setSalesOverview(salesRes.data);
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateOrderStatus = async (orderId, status) => {
    setUpdatingOrder(orderId);
    try {
      await orders.updateStatus(orderId, { status });
      setMyOrders((prev) =>
        prev.map((o) => (o._id === orderId ? { ...o, status } : o))
      );
    } catch (err) {
      alert('Failed to update order');
    }
    setUpdatingOrder(null);
  };

  if (loading) {
    return (
      <div className="dash-loading">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 120, marginBottom: 16 }} />
        ))}
      </div>
    );
  }

  const stats = [
    { label: 'Total Artworks', value: myArtworks.length },
    { label: 'Active Listings', value: myArtworks.filter((a) => a.status === 'Active').length },
    { label: 'Total Orders', value: myOrders.length },
    { label: 'Revenue (NGN)', value: `₦${(salesOverview?.totalRevenue || 0).toLocaleString()}` },
  ];

  return (
    <div className="dashboard">
      <div className="dash-header">
        <div>
          <h1 className="dash-title">Artist Dashboard</h1>
          <p className="dash-subtitle">Manage your artworks and orders</p>
        </div>
        <button className="btn-create" onClick={() => navigate('/create')}>
          + Create Artwork
        </button>
      </div>

      <div className="dash-stats">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-card-value">{stat.value}</span>
            <span className="stat-card-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="dash-tabs">
        <button
          className={`tab ${activeTab === 'artworks' ? 'active' : ''}`}
          onClick={() => setActiveTab('artworks')}
        >
          My Artworks
        </button>
        <button
          className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders ({myOrders.length})
        </button>
      </div>

      {activeTab === 'artworks' && (
        <div className="dash-artworks">
          {myArtworks.length === 0 ? (
            <div className="dash-empty">
              <p>No artworks yet. Create your first listing!</p>
            </div>
          ) : (
            <div className="artwork-table">
              <div className="table-header">
                <span>Artwork</span>
                <span>Status</span>
                <span>Price</span>
                <span>Views</span>
                <span>Created</span>
                <span>Action</span>
              </div>
              {myArtworks.map((art) => (
                <div key={art._id} className="table-row">
                  <div className="row-title">
                    <div className="row-thumb">
                      <img src={resolveImageUrl(art.images?.[0]?.url || art.thumbnail)} alt="" referrerPolicy="no-referrer" />
                    </div>
                    <span>{art.title}</span>
                  </div>
                  <span className={`status-badge ${art.status.toLowerCase()}`}>
                    {art.status}
                  </span>
                  <span>${art.price?.usd?.toLocaleString()}</span>
                  <span>{art.viewCount || 0}</span>
                  <span>{new Date(art.createdAt).toLocaleDateString()}</span>
                  <span>
                    <button className="btn-edit-art" onClick={() => navigate(`/edit/${art._id}`)}>
                      Edit
                    </button>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="dash-orders">
          {myOrders.length === 0 ? (
            <div className="dash-empty">
              <p>No orders yet.</p>
            </div>
          ) : (
            <div className="order-table">
              <div className="table-header">
                <span>Order ID</span>
                <span>Status</span>
                <span>Amount</span>
                <span>Date</span>
                <span>Action</span>
              </div>
              {myOrders.map((order) => (
                <div key={order._id} className="table-row">
                  <span className="row-id">#{order._id.slice(-8)}</span>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                  <span>₦{order.totalAmount?.ngn?.toLocaleString()}</span>
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                  <span>
                    {(order.status === 'Confirmed' || order.status === 'Processing') && (
                      <button
                        className="btn-update-status"
                        disabled={updatingOrder === order._id}
                        onClick={() =>
                          updateOrderStatus(
                            order._id,
                            order.status === 'Confirmed' ? 'Processing' : 'Shipped'
                          )
                        }
                      >
                        {updatingOrder === order._id
                          ? '...'
                          : order.status === 'Confirmed'
                          ? 'Process'
                          : 'Ship'}
                      </button>
                    )}
                    {order.status === 'Shipped' && (
                      <span className="status-badge shipped">In Transit</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        .dashboard {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .dash-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
        }

        .dash-subtitle {
          color: var(--color-text-secondary);
          margin-top: 8px;
        }

        .btn-create {
          padding: 10px 24px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .btn-create:hover {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .dash-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-card-value {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-card-label {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dash-tabs {
          display: flex;
          gap: 4px;
          background: var(--color-bg-card);
          border-radius: var(--radius-md);
          padding: 4px;
          margin-bottom: 24px;
        }

        .tab {
          flex: 1;
          padding: 10px 20px;
          background: transparent;
          color: var(--color-text-secondary);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .tab.active {
          background: var(--color-accent);
          color: var(--color-bg);
        }

        .tab:hover:not(.active) {
          color: var(--color-text-primary);
        }

        .artwork-table,
        .order-table {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          padding: 14px 20px;
          background: var(--color-surface);
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .artwork-table .table-header,
        .artwork-table .table-row {
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 0.5fr;
        }

        .order-table .table-header {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          padding: 14px 20px;
          align-items: center;
          border-top: 1px solid var(--color-border);
          font-size: 0.9rem;
          transition: background var(--transition-fast);
        }

        .order-table .table-row {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .table-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .row-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .row-thumb {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--color-surface);
          flex-shrink: 0;
        }

        .row-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .row-id {
          font-family: monospace;
          color: var(--color-text-muted);
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
          justify-self: start;
        }

        .status-badge.active {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.draft {
          background: rgba(136, 136, 160, 0.15);
          color: var(--color-text-secondary);
        }

        .status-badge.sold {
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
        }

        .status-badge.pending,
        .status-badge.processing {
          background: rgba(232, 184, 58, 0.15);
          color: var(--color-warning);
        }

        .status-badge.confirmed {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.shipped,
        .status-badge.delivered {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.cancelled {
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
        }

        .btn-update-status {
          padding: 6px 16px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-update-status:hover:not(:disabled) {
          background: var(--color-accent-light);
        }

        .btn-update-status:disabled {
          opacity: 0.5;
        }

        .btn-edit-art {
          padding: 6px 14px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-edit-art:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .dash-empty {
          text-align: center;
          padding: 48px 20px;
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 1fr;
          }
          .table-header span:nth-child(4),
          .table-header span:nth-child(5),
          .table-row span:nth-child(4),
          .table-row span:nth-child(5) {
            display: none;
          }
        }

        .dash-loading {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px;
        }
      `}</style>
    </div>
  );
}
