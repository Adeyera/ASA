import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import GlassNavbar from './components/GlassNavbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import DiscoverArtworks from './pages/DiscoverArtworks';
import ExploreArtists from './pages/ExploreArtists';
import ArtistProfile from './pages/ArtistProfile';
import ArtworkDetail from './pages/ArtworkDetail';
import ArtistDashboard from './pages/ArtistDashboard';
import CreateArtwork from './pages/CreateArtwork';
import EditArtwork from './pages/EditArtwork';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import RoomRender from './pages/RoomRender';
import './styles/global.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <GlassNavbar />
        <CartDrawer />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/discover" element={<DiscoverArtworks />} />
            <Route path="/artists" element={<ExploreArtists />} />
            <Route path="/artist/:id" element={<ArtistProfile />} />
            <Route path="/artists/:id" element={<ArtistProfile />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            <Route path="/dashboard" element={<ArtistDashboard />} />
            <Route path="/create" element={<CreateArtwork />} />
            <Route path="/edit/:id" element={<EditArtwork />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/artwork/:id/render" element={<RoomRender />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

