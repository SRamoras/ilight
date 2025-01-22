import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';  // Importa o hook e o componente Trans
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

  // Função para trocar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
            className='paragraf-h1 sublinhado-animado  language-button' 
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
        <Link to="/gallery" className="create-link">
          <Trans
            i18nKey="header.letsCreate"
            components={{
              // Define um componente para estilizar o apóstrofo
              special: <span className="special-caracter" />
            }}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
