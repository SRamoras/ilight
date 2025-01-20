import React from 'react';
import './section1.css';  // Importa o arquivo de estilos
import Section1Image from '../assets/section1.jpg';  // Importa a imagem

const Section1 = () => {
  return (
    <div className="section1-container">
            <div className="section1-container-text">
      <p className="subtitle">WHAT WE DO</p>
      
      {/* Título estilizado para o setor elétrico */}
      <h1 className="electricity-title">
        Bright
        solutions
        for
        clean,<br />
         sustainable
        energy.
      </h1>

      <p className="description">
      We work with innovative electrical solutions, carrying out installations, maintenance and consultancy to ensure energy efficiency and safety in different environments.
      </p></div>
      <div className='img-section-1-container'>
      <img 
        src={Section1Image} 
        alt="Descrição da imagem" 
        className="section1-image" 
      />


</div>

      <div className='container-descreption-img'>

     <h1 className="electricity-title-1">
     Elegance and Efficiency: Transforming Spaces with Innovative Lighting
      </h1>

<p className='electricity-p-1'>Our lighting solutions transform homes into safer environments 
and welcoming, bringing efficiency and innovation to each space.</p>

    
    
    
    
    
    
    
    </div></div>
  );
}

export default Section1;
