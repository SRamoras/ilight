// Section2.jsx
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';  // Importa GSAP
import './section2.css';       // Importa o arquivo de estilos

import Section2Image1 from '../assets/section2_1img.jpg';  // Importa imagens
import Section2Image2 from '../assets/section2_2img.jpg';

const Section2 = () => {
  const { t } = useTranslation();
  
  // Referência para o contêiner inteiro da seção
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Seleciona todos os elementos filhos da seção que entra na viewport
          const elementsToAnimate = entry.target.querySelectorAll('*');
          
          // Aplica animação em todos os elementos filhos
          gsap.from(elementsToAnimate, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
          });

          // Para de observar após a animação
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section2-container" ref={sectionRef}>
      <div className="section2-container-text">
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

export default Section2;
