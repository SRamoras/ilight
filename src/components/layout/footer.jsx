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
          <p  className='paragraf-h1'>geral@ilight.pt</p>
        </div>
        {/* Contact and social links */}
  <div className='last-footer-links'>

        <div className="footer-links1">
           <p className='subtitle-paragraf-footer'>FOLLOW US</p>          
           <a className='paragraf-h1' href="https://www.facebook.com/ilight.pt">Facebook</a>
        </div>

        <div>
          <div className="footer-links2">
         <a className='paragraf-h1' href="/fr">FR</a><p className='paragraf-h1'>/</p><a className='paragraf-h1' href="/en">EN</a>
          </div>
        </div>

 </div>

     
        </div>

      </div>



      <div className="footer-bottom">
        <p>© 2024 Base Habitation</p>
    
      </div>
    </footer>
  );
};

export default Footer;
