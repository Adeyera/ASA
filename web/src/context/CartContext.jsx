import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart');
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (artwork) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === artwork._id)) return prev;
      return [...prev, {
        id: artwork._id,
        title: artwork.title,
        price: artwork.price,
        image: artwork.images?.[0]?.url || artwork.thumbnail || '',
        artist: artwork.artist?.name || 'Unknown',
        artistId: artwork.artist?._id,
        dimensions: artwork.dimensions,
      }];
    });
    setShowCart(true);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalNgn = items.reduce((sum, i) => sum + (i.price?.ngn || 0), 0);
  const totalUsd = items.reduce((sum, i) => sum + (i.price?.usd || 0), 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, clearCart, totalNgn, totalUsd,
      showCart, setShowCart, count: items.length,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
