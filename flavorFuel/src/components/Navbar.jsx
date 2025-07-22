import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icon library (optional)

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Maharaja
            </h1>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <a href="#home" className="nav-link">Home</a>
                <a href="#menu" className="nav-link">Menu</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
              </>
            ) : (
              <Link to="/" className="nav-link">Home</Link>
            )}
            {/* <Link to="/reservation" className="nav-link">Reservation</Link> */}
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
          {isHome ? (
            <>
              <a href="#home" className="block nav-link" onClick={handleLinkClick}>Home</a>
              <a href="#menu" className="block nav-link" onClick={handleLinkClick}>Menu</a>
              <a href="#about" className="block nav-link" onClick={handleLinkClick}>About</a>
              <a href="#contact" className="block nav-link" onClick={handleLinkClick}>Contact</a>
            </>
          ) : (
            <Link to="/" className="block nav-link" onClick={handleLinkClick}>Home</Link>
          )}
          {/* <Link to="/reservation" className="block nav-link" onClick={handleLinkClick}>Reservation</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
