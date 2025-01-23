// Showcase.jsx
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import './heading.css';

import Img1 from '../assets/open1.jpg';
import Img2 from '../assets/open5.jpg';
import Img3 from '../assets/open3.jpg';
import Img4 from '../assets/open4.jpg';
import Img5 from '../assets/open2.jpg';
import Img6 from '../assets/open6.jpg';

const Showcase = () => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const section = document.getElementById('section3');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="showcase-container">
      <div className="images-column left-column">
        <img src={Img1} alt={t('showcase.work1')} className="img-overlap img1" />
        <img src={Img2} alt={t('showcase.work2')} className="img-overlap img2" />
        <img src={Img3} alt={t('showcase.work3')} className="img-overlap img3" />
      </div>

      <div className="center-text">
        <div className="center-content">
          <h1 className="main-title">
            <span className='orange-text'>{t('showcase.empowering')}</span> {t('showcase.homesBusinesses')} <span className='blue-text'>{t('showcase.advanced')}</span> {t('showcase.electricalSolutions')}
          </h1>
          <p className="additional-text">
            {t('showcase.innovativeIdeas')}
          </p>
          <div className="button-container">
            <Link to="/gallery" className='button-heading1 gallery-button'>
              <p>{t('showcase.gallery')}</p>
            </Link>
            <button className='button-heading2' onClick={handleContactClick}>
              <p>
                <Trans
                  i18nKey="showcase.contactUs"
                  components={{
                    special: <span className="special-caracter" />
                  }}
                />
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="images-column right-column">
        <img src={Img4} alt={t('showcase.work4')} className="img-overlap img4" />
        <img src={Img5} alt={t('showcase.work5')} className="img-overlap img5" />
        <img src={Img6} alt={t('showcase.work6')} className="img-overlap img6" />
      </div>
    </div>
  );
};

export default Showcase;
