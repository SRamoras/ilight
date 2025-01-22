import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';               // Importa GSAP
import './section1.css';                    // Importa o arquivo de estilos
import Section1Image from '../assets/casa.jpg';  // Importa a imagem

const Section1 = () => {
  const { t } = useTranslation();
  
  // Referências para os contêineres que queremos animar
  const textContainerRef = useRef(null);
  const descriptionContainerRef = useRef(null);

  useEffect(() => {
    // Cria uma instância do Intersection Observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animação para todos os elementos filhos do container que entrou na viewport
          gsap.from(entry.target.children, {
            duration: 1,
            y: 50,                              // Inicia 50px abaixo
            opacity: 0,                         // Inicia transparente
       
            stagger: 0.3,                       // Atraso entre cada elemento
            ease: "power4.out"
          });

          // Para de observar este elemento após a animação
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1  // Ajusta a porcentagem de visibilidade necessária para disparar a animação
    });

    // Observa os contêineres de texto e descrição
    if (textContainerRef.current) observer.observe(textContainerRef.current);
    if (descriptionContainerRef.current) observer.observe(descriptionContainerRef.current);

    // Cleanup ao desmontar o componente
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section1-container">
      <div className="section1-container-text" ref={textContainerRef}>
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

      <div className='container-descreption-img' ref={descriptionContainerRef}>
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
