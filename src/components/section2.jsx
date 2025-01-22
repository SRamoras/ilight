import React from 'react';
import { useTranslation } from 'react-i18next';
import './section2.css';  // Import style file

import Section2Image1 from '../assets/section2_1img.jpg';  // Import image
import Section2Image2 from '../assets/section2_2img.jpg';  // Import image
import Section1Image from '../assets/section1.jpg';       // Import image

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className="section2-container">
      <div className="section1-container-text">
        <p className="why-choose-us">{t('section2.whyChooseUs')}</p>
        <h1 className="electricity-title">
          {t('section2.your')} <span className='orange-text'>{t('section2.partner')}</span> {t('section2.in')} <span className='blue-text'>{t('section2.solutions')}</span>
        </h1>
        <p className="description">
          {t('section2.description')}
        </p>
      </div>

      <div className='container-principal-services'>
        <div className="services-section-container">
          <div className="services-list">
            <div className="service-category">
              <h2>{t('section2.electricalInstallations.title')}</h2>
              <p className="services-text">
                {t('section2.electricalInstallations.text')}
              </p>
            </div>

            <div className="service-category">
              <h2>{t('section2.homeAutomation.title')}</h2>
              <p className="services-text">
                {t('section2.homeAutomation.text')}
              </p>
            </div>

            <div className="service-category">
              <h2>{t('section2.maintenance.title')}</h2>
              <p className="services-text">
                {t('section2.maintenance.text')}
              </p>
            </div>
          </div>

          <div className="services-image">
            <img src={Section2Image1} alt={t('section2.additionalServicesAlt')} className="additional-services-image"/>
          </div>
        </div>

        <div className="services-section-container">
          <div className="services-image">
            <img src={Section2Image2} alt={t('section2.additionalServicesAlt')} className="additional-services-image"/>
          </div>

          <div className="services-list">
            <div className="service-category">
              <h2>{t('section2.ited.title')}</h2>
              <p className="services-text">
                {t('section2.ited.text')}
              </p>
            </div>

            <div className="service-category">
              <h2>{t('section2.security.title')}</h2>
              <p className="services-text">
                {t('section2.security.text')}
              </p>
            </div>

            <div className="service-category">
              <h2>{t('section2.certification.title')}</h2>
              <p className="services-text">
                {t('section2.certification.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
