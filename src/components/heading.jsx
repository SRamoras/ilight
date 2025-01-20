import React from 'react';
import './heading.css';

// Importe as imagens conforme necessário
import Img1 from '../assets/open1.jpg';
import Img2 from '../assets/open5.jpg';
import Img3 from '../assets/open3.jpg';
import Img4 from '../assets/open4.jpg';
import Img5 from '../assets/open2.jpg';
import Img6 from '../assets/open6.jpg';

const Showcase = () => {
  return (
    <div className="showcase-container">
      {/* Coluna da esquerda */}
      <div className="images-column left-column">
        <img src={Img1} alt="Trabalho 1" className="img-overlap img1" />
        <img src={Img2} alt="Trabalho 2" className="img-overlap img2" />
        <img src={Img3} alt="Trabalho 3" className="img-overlap img3" />
      </div>

      {/* Conteúdo central: título grande, parágrafo, e botões */}
      <div className="center-text">
        <div className="center-content">
          <h1 className="main-title">
            Empowering homes and businesses with advanced electrical solutions.
          </h1>
          {/* Novo parágrafo abaixo do título */}
          <p className="additional-text">
            We bring innovative ideas and professional expertise to light up your future.
          </p>
          <div className="button-container">
            <button>Gallery</button>
            <button>Contact us</button>
          </div>
        </div>
      </div>

      {/* Coluna da direita */}
      <div className="images-column right-column">
        <img src={Img4} alt="Trabalho 4" className="img-overlap img4" />
        <img src={Img5} alt="Trabalho 5" className="img-overlap img5" />
        <img src={Img6} alt="Trabalho 6" className="img-overlap img6" />
      </div>
    </div>
  );
};
export default Showcase;