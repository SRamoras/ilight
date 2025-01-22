import React, { useState } from 'react';
import './showcaseAllImg.css';

// Usa import.meta.glob para obter todas as imagens que correspondam ao padrão 'open{n}.jpg'
const imagesModules = import.meta.glob('../assets/portfolio/open*.jpg', { eager: true });

// Extrai as URLs das imagens
const images = Object.values(imagesModules).map(module => module.default || module);

const ShowcaseAllImg = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (src) => {
    setSelectedImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div>
      <div className="masonry-container">
        {images.map((src, index) => (
          <div className="img-container" key={index}>
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              onClick={() => openModal(src)}
            />
            {/* Ícone que aparece ao passar o mouse */}
            <div className="hover-icon">
              <span className="material-symbols-outlined">
                zoom_in
              </span>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {selectedImg && <img src={selectedImg} alt="Imagem ampliada" />}
            <button className="close-btn" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseAllImg;
