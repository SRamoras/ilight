import React from 'react';
import { useTranslation } from 'react-i18next';
import './section1.css';  // Importa o arquivo de estilos
import Section1Image from '../assets/casa.jpg';  // Importa a imagem

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <div className="section1-container">
      <div className="section1-container-text">
        <p className="subtitle">{t('section1.whatWeDo')}</p>
        
        {/* Título estilizado para o setor elétrico */}
        <h1 className="electricity-title">
          <span className='blue-text'>{t('section1.bright')}</span> {t('section1.solutionsFor')}<br />
          {t('section1.sustainable')} <span className='orange-text'>{t('section1.energy')}</span>
        </h1>

        <p className="description">
          {t('section1.description')}
        </p>
      </div>
      
      <div className='img-section-1-container'>
        <img 
          src={Section1Image} 
          alt={t('section1.imageAlt')} 
          className="section1-image" 
        />
      </div>

      <div className='container-descreption-img'>
        <h1 className="electricity-title-1">
          {t('section1.eleganceEfficiency')}
        </h1>
        <p className='electricity-p-1'>
          {t('section1.lightingSolutions')}
        </p>
      </div>
    </div>
  );
}

export default Section1;
