import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Verifica se está no topo da página
      setIsTop(currentScrollY === 0);

      if (currentScrollY < lastScrollY) {
        // Scroll Up
        setShowHeader(true);
      } else {
        // Scroll Down
        setShowHeader(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${showHeader ? 'visible' : 'hidden'} ${isTop ? 'transparent' : ''}`}>
      <nav className="left-nav">
        <Link to="/">
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
      </nav>
      <nav className="right-nav">
        <div className="language-switch">
          <a className='paragraf-h1 sublinhado-animado' href="/fr">PT</a>
          <p className='paragraf-h1 special-caracter'>/</p>
          <a className='paragraf-h1 sublinhado-animado' href="/en">ENG</a>
        </div>
        <Link to="/gallery" className="create-link">
          Let<span className='special-caracter'>'</span>s create something
        </Link>
      </nav>
    </header>
  );
};

export default Header;
