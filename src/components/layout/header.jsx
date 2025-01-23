// Header.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      setIsTop(currentScrollY === 0);

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleContactClick = () => {
    const section = document.getElementById('section3');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${showHeader ? 'visible' : 'hidden'} ${isTop ? 'transparent' : ''}`}>
      <nav className="left-nav">
        <Link to="/">
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
      </nav>
      <nav className="right-nav">
        <div className="language-switch">
          <button 
            className='paragraf-h1 sublinhado-animado language-button' 
            onClick={() => changeLanguage('pt')}
          >
            PT
          </button>
          <p className='paragraf-h1 special-caracter'>/</p>
          <button 
            className='paragraf-h1 sublinhado-animado language-button' 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
        <button className='create-link' onClick={handleContactClick}>
          <p>
            <Trans
              i18nKey="header.letsCreate"
              components={{
                special: <span className="special-caracter" />
              }}
            />
          </p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
