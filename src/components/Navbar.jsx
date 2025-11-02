import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import './Navbar.css'; // Hum yeh file next banayenge

export default function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // Mobile menu toggle logic
  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        nav.style.background = "#000";
      } else {
        nav.style.background = "#111";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <span>Prepbot.AI</span>
      </div>
      <div className={isActive ? "nav-links active" : "nav-links"} id="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <a href="/#about" onClick={() => setIsActive(false)}>About Us</a>
        <a href="/#features" onClick={() => setIsActive(false)}>Features</a>
        <a href="/#contact" onClick={() => setIsActive(false)}>Contact Us</a>
        <div className="search-container">
          <SignedOut>
            <button className="cta-btn login-btn" onClick={() => navigate('/sign-in')}>
              Login/SignUp
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      <div 
        className={isActive ? "menu-toggle active" : "menu-toggle"} 
        id="mobile-menu" 
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}