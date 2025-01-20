import React from 'react';
import './footer.css';
import Logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and description */}
        <div className="footer-description">
       
        <div className="footer-description-text">
           <p className='subtitle-paragraf-footer'>LOVE OUR COMPANY</p>
        <h1>iLight: Brightening 
          the future <br />with innovative LED solutions.</h1>
          </div>
       
        <div><img src={Logo} alt="Base Logo" className="footer-logo" /></div>
         
        </div>



        <div className='right-footer-links'>        
     


        <div className="footer-links1">
          <p className='subtitle-paragraf-footer'>CONTACT US</p>
          <p  className='paragraf-h1'>geral<span className='special-caracter'>@</span>ilight.pt</p>
        </div>
        {/* Contact and social links */}
  <div className='last-footer-links'>

        <div className="footer-links1">
           <p className='subtitle-paragraf-footer'>FOLLOW US</p>          
           <a className='paragraf-h1 sublinhado-animado' href="https://www.facebook.com/ilight.pt">Facebook</a>
        </div>

        <div>
          <div className="footer-links2">
         <a className='paragraf-h1 sublinhado-animado' href="/fr">FR</a><p className='paragraf-h1 special-caracter'>/</p><a className='paragraf-h1 sublinhado-animado' href="/en">EN</a>
          </div>
        </div>

 </div>

     
        </div>

      </div>



      <div className="footer-bottom">
        <p>© 2025 All the rights reserved to ILight</p>
    
      </div>
    </footer>
  );
};

export default Footer;
