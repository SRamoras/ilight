import React from 'react';
import './heading.css';  // Importa o arquivo de estilos
import Open1 from '../assets/open1.jpg';  // Importa a imagem

const Heading = () => {
  return (
    <div className="full-screen-image-container">
      <img 
        src={Open1} 
        alt="Descrição da imagem" 
        className="full-screen-image" 
      />
      <h1>Lighting the future with innovative electrical solutions.</h1>
    </div>
  );
}

export default Heading;
