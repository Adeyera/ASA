import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { orders } from '../services/api';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalNgn, totalUsd, clearCart } = useCart();
  const [form, setForm] = useState({
    fullName: '', phone: '', address: '', city: '', state: '', country: 'Nigeria', zipCode: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { data } = await orders.create({
        items: items.map((i) => ({ artworkId: i.id, quantity: 1 })),
        shippingAddress: form,
        currency: 'NGN',
      });

      clearCart();
      if (data.paymentUrl) {
        window.open(data.paymentUrl, '_blank');
      }
      navigate('/dashboard', { state: { orderCreated: true } });
    } catch (err) {
      setError(err.response?.data?.message || 'Checkout failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate('/')}>Browse Artworks</button>
        </div>
        <style>{checkoutStyles}</style>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-layout">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>
          <div className="checkout-grid">
            <div className="form-group full">
              <label>Full Name</label>
              <input name="fullName" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
            </div>
            <div className="form-group full">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            </div>
            <div className="form-group full">
              <label>Address</label>
              <input name="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>City</label>
              <input name="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>State</label>
              <input name="state" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input name="country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input name="zipCode" value={form.zipCode} onChange={(e) => setForm({ ...form, zipCode: e.target.value })} />
            </div>
          </div>
          {error && <div className="form-error">{error}</div>}
          <button type="submit" className="btn-place-order" disabled={submitting}>
            {submitting ? 'Processing...' : `Place Order — ₦${totalNgn.toLocaleString()}`}
          </button>
        </form>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="checkout-item-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <strong>{item.title}</strong>
                <span className="checkout-item-price">${item.price?.usd?.toLocaleString()}</span>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <span>Total</span>
            <strong>₦{totalNgn.toLocaleString()} (${totalUsd.toLocaleString()})</strong>
          </div>
        </div>
      </div>

      <style>{checkoutStyles}</style>
    </div>
  );
}

const checkoutStyles = `
  .checkout-page {
    max-width: 900px; margin: 0 auto; padding: 100px 24px 60px;
    animation: fadeIn 0.4s ease;
  }
  .checkout-title {
    font-family: var(--font-display); font-size: 1.8rem; font-weight: 700;
    margin-bottom: 32px;
  }
  .checkout-layout {
    display: grid; grid-template-columns: 1fr 320px; gap: 32px;
  }
  .checkout-form {
    background: var(--glass-bg); border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg); padding: 24px;
  }
  .checkout-form h3, .checkout-summary h3 {
    font-family: var(--font-display); font-size: 1.1rem;
    margin-bottom: 20px; padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
  }
  .checkout-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  }
  .checkout-grid .full { grid-column: 1 / -1; }
  .checkout-grid .form-group {
    display: flex; flex-direction: column; gap: 4px;
  }
  .checkout-grid label {
    font-size: 0.8rem; color: var(--color-text-secondary);
    font-weight: 500;
  }
  .checkout-grid input {
    padding: 10px 12px; background: var(--color-bg-card);
    border: 1px solid var(--color-border); border-radius: var(--radius-sm);
    color: var(--color-text-primary); font-size: 0.9rem;
  }
  .checkout-grid input:focus {
    border-color: var(--color-accent); outline: none;
  }
  .btn-place-order {
    width: 100%; margin-top: 20px; padding: 14px;
    background: var(--color-accent); color: var(--color-bg);
    border-radius: var(--radius-sm); font-weight: 700; font-size: 1rem;
  }
  .btn-place-order:hover:not(:disabled) { background: var(--color-accent-light); }
  .btn-place-order:disabled { opacity: 0.6; }
  .checkout-summary {
    background: var(--glass-bg); border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg); padding: 24px;
    height: fit-content;
  }
  .checkout-item {
    display: flex; gap: 12px; padding: 12px 0;
    border-bottom: 1px solid var(--color-border);
  }
  .checkout-item-img {
    width: 56px; height: 56px; border-radius: var(--radius-sm);
    overflow: hidden; background: var(--color-surface); flex-shrink: 0;
  }
  .checkout-item-img img { width: 100%; height: 100%; object-fit: cover; }
  .checkout-item strong { display: block; font-size: 0.9rem; }
  .checkout-item-price { color: var(--color-accent); font-weight: 600; font-size: 0.85rem; }
  .checkout-total {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 16px; margin-top: 8px;
  }
  .checkout-total strong { font-size: 1.1rem; color: var(--color-accent); }
  .form-error {
    margin-top: 12px; padding: 10px 14px;
    background: rgba(232,90,90,0.1); border: 1px solid rgba(232,90,90,0.3);
    border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.85rem;
  }
  .checkout-empty {
    text-align: center; padding: 80px 20px;
  }
  .checkout-empty h2 { font-family: var(--font-display); margin-bottom: 16px; }
  .checkout-empty button {
    padding: 12px 32px; background: var(--color-accent); color: var(--color-bg);
    border-radius: var(--radius-sm); font-weight: 700;
  }
  @media (max-width: 768px) {
    .checkout-layout { grid-template-columns: 1fr; }
  }
`;
