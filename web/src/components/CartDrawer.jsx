import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { resolveImageUrl } from '../utils/imageUrl';

export default function CartDrawer() {
  const { items, removeItem, clearCart, totalNgn, totalUsd, showCart, setShowCart, count } = useCart();
  const navigate = useNavigate();

  if (!showCart) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setShowCart(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>Cart ({count})</h2>
          <button className="cart-close" onClick={() => setShowCart(false)}>×</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={resolveImageUrl(item.image)} alt={item.title} referrerPolicy="no-referrer" />
                  </div>
                  <div className="cart-item-info">
                    <strong>{item.title}</strong>
                    <span className="cart-item-artist">{item.artist}</span>
                    <span className="cart-item-price">${item.price?.usd?.toLocaleString()}</span>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeItem(item.id)}>×</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <div>
                  <strong>${totalUsd.toLocaleString()}</strong>
                  <small>₦{totalNgn.toLocaleString()}</small>
                </div>
              </div>
              <button className="cart-checkout" onClick={() => { setShowCart(false); navigate('/checkout'); }}>
                Checkout
              </button>
              <button className="cart-clear" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .cart-overlay {
          position: fixed; inset: 0; background: rgba(6, 9, 22, 0.55);
          backdrop-filter: blur(4px);
          z-index: 200; animation: asaFade 0.2s ease;
        }
        .cart-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; width: 380px;
          background: #fbf6ec;
          border-left: 1px solid var(--color-border);
          z-index: 201; display: flex; flex-direction: column;
          animation: asaDrawer 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          max-width: 100vw;
        }
        .cart-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 24px 24px 20px; border-bottom: 1px solid var(--color-border);
        }
        .cart-header h2 {
          font-family: var(--font-display); font-size: 1.6rem; font-weight: 400;
          letter-spacing: 0.01em;
        }
        .cart-close {
          font-size: 1.5rem; background: none; color: var(--color-text-secondary);
          padding: 4px 8px;
        }
        .cart-close:hover { color: var(--color-text-primary); }
        .cart-empty {
          flex: 1; display: flex; align-items: center; justify-content: center;
          color: var(--color-text-muted);
        }
        .cart-items {
          flex: 1; overflow-y: auto; padding: 16px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .cart-item {
          display: flex; gap: 12px; padding: 12px;
          background: var(--glass-bg); border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
          position: relative;
        }
        .cart-item-img {
          width: 64px; height: 64px; border-radius: var(--radius-sm);
          overflow: hidden; background: var(--color-surface); flex-shrink: 0;
        }
        .cart-item-img img { width: 100%; height: 100%; object-fit: cover; }
        .cart-item-info {
          flex: 1; display: flex; flex-direction: column; gap: 2px;
        }
        .cart-item-info strong { font-size: 0.9rem; }
        .cart-item-artist { color: var(--color-text-muted); font-size: 0.8rem; }
        .cart-item-price { color: var(--color-accent); font-weight: 700; font-size: 0.9rem; margin-top: auto; }
        .cart-item-remove {
          position: absolute; top: 8px; right: 8px;
          background: none; color: var(--color-text-muted); font-size: 1.2rem;
          padding: 2px 6px;
        }
        .cart-item-remove:hover { color: var(--color-error); }
        .cart-footer {
          padding: 20px 24px; border-top: 1px solid var(--color-border);
          display: flex; flex-direction: column; gap: 12px;
        }
        .cart-total {
          display: flex; justify-content: space-between; align-items: center;
        }
        .cart-total small {
          display: block; color: var(--color-text-muted); font-size: 0.8rem;
          text-align: right;
        }
        .cart-total strong { font-size: 1.3rem; font-family: var(--font-display); font-weight: 400; }
        .cart-checkout {
          padding: 15px; background: var(--color-accent); color: #f2e9da;
          border-radius: 999px; font-weight: 700; font-size: 1rem;
          transition: all var(--transition-fast);
        }
        .cart-checkout:hover { background: var(--color-accent-dark); transform: translateY(-1px); }
        .cart-clear {
          padding: 8px; background: none; color: var(--color-text-muted);
          font-size: 0.85rem;
        }
        .cart-clear:hover { color: var(--color-error); }
      `}</style>
    </>
  );
}
