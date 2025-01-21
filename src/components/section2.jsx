import React from 'react';
import './section2.css';  // Importa o arquivo de estilos

import Section2Image1 from '../assets/section2_1img.jpg';  // Importa a imagem
import Section2Image2 from '../assets/section2_2img.jpg';  // Importa a imagem
import Section1Image from '../assets/section1.jpg';  // Importa a imagem

const Section1 = () => {
  return (
    <div className="section2-container">
      <div className="section1-container-text">
        <p className="why-choose-us">Why Choose Us</p>
        <h1 className="electricity-title">
          Your       <span className='orange-text'>Partner </span>  in Innovative Electrical       <span className='blue-text'>Solutions </span>  
        </h1>
        <p className="description">
          Discover how our expertise and commitment to quality can help transform your spaces with cutting-edge electrical solutions. Explore a range of services designed to meet diverse needs, ensuring efficiency, safety, and sustainability.
        </p>
      </div>




<div className='container-principal-services'>
      <div className="services-section-container">
        <div className="services-list">
          {/* Categoria: Instalações Eléctricas */}
          <div className="service-category">
            <h2>Instalações Eléctricas</h2>
            <p className="services-text">
              Instalações em baixa tensão • Luminotecnia • Postos de transformação • Grupos Geradores • UPS • Energias renováveis • Baterias de correção de fator de potencia • Projeto
            </p>
          </div>

          <div className="service-category">
            <h2>Home Automation e Conforto</h2>
            <p className="services-text">
              Home Automation e Conforto • Som ambiente • Piso Radiante • Domótica
            </p>
          </div>

          <div className="service-category">
            <h2>Manutenção</h2>
            <p className="services-text">
              Infraestrutura • Instalações técnicas
            </p>
          </div>

          {/* Categoria: ITED */}

        </div>

        <div className="services-image">
          {/* Foto adicional à direita da lista de serviços */}
          <img src={Section2Image1} alt="Additional Services" className="additional-services-image"/>
        </div>
      </div>






      <div className="services-section-container">  <div className="services-image">
          {/* Foto adicional à direita da lista de serviços */}
          <img src={Section2Image2} alt="Additional Services" className="additional-services-image"/>
        </div>

        <div className="services-list">
          {/* Categoria: Instalações Eléctricas */}
         

          {/* Categoria: ITED */}
          <div className="service-category">
            <h2>ITED</h2>
            <p className="services-text">
              Instalações de infraestruturas de telecomunicações • Bastidores • Projeto
            </p>
          </div>

          {/* Categoria: Segurança */}
          <div className="service-category">
            <h2>Segurança</h2>
            <p className="services-text">
              Sistemas de deteção e extinção de incêndios • Implementação das medidas de autoproteção • Sistema de deteção de intrusão • CCTV
            </p>
          </div>

          {/* Categoria: Certificação */}
          <div className="service-category">
            <h2>Certificação</h2>
            <p className="services-text">
              Instalações
            </p>
          </div>
        </div>

      </div>




        
      </div>














    </div>
  );
}

export default Section1;
