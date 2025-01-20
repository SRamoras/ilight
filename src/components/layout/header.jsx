import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="left-nav">
        <Link to="/">
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
      </nav>
      <nav className="right-nav">
        <div className="language-switch">
          <button className="lang-btn">PT</button> / <button className="lang-btn">ING</button>
        </div>
        <Link to="/gallery" className="create-link">
          Let's create something
        </Link>
      </nav>
    </header>
  );
};

export default Header;
