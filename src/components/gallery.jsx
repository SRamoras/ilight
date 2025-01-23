// Carousel.jsx
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './gallery.css';

import img1 from '../assets/open1.jpg';
import img2 from '../assets/open5.jpg';
import img3 from '../assets/open3.jpg';
import img4 from '../assets/open4.jpg';
import img5 from '../assets/open2.jpg';
import img6 from '../assets/open6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const { t } = useTranslation();

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Replicamos as imagens para criar looping
  const [slides] = useState([
    ...images, ...images, ...images, ...images, ...images,
    ...images, ...images, ...images, ...images, ...images,
    ...images, ...images, ...images, ...images, ...images,
    ...images, ...images, ...images, ...images, ...images
  ]);

  let rafId;

  const updateArcEffect = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(applyArcEffect);
  };

  const applyArcEffect = () => {
    const container = carouselRef.current;
    if (!container) return;

    const imgs = container.querySelectorAll('img');
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    const amplitude = window.innerWidth < 768 ? 20 : 40;
    const angleAmplitude = window.innerWidth < 768 ? 5 : 10;
    const maxDistance = container.offsetWidth / 2;

    imgs.forEach(img => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(containerCenter - imgCenter);

      // Define a direção e calcula offset e ângulo
      const direction = containerCenter > imgCenter ? -1 : 1;
      const offset = -amplitude * Math.cos((distance / maxDistance) * Math.PI);
      const angle = Math.min(angleAmplitude, (angleAmplitude * distance) / maxDistance);

      img.style.transform = `translateY(${offset}px) rotateZ(${direction * angle}deg)`;
    });
  };

  const adjustSlides = () => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const containerWidth = container.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;
    const threshold = containerWidth;

    // Se estiver muito no início, recola para o meio
    if (container.scrollLeft < threshold) {
      container.scrollLeft += maxScrollLeft / 2;
    }
    // Se estiver muito no fim, recola para trás
    else if (container.scrollLeft > maxScrollLeft - threshold) {
      container.scrollLeft -= maxScrollLeft / 2;
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    // Centraliza o scroll ao iniciar
    const totalWidth = container.scrollWidth;
    container.scrollLeft = totalWidth / 2;
    updateArcEffect();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      adjustSlides();
      updateArcEffect();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    adjustSlides();
    updateArcEffect();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = carouselRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
    updateArcEffect();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const container = carouselRef.current;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
    updateArcEffect();
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      adjustSlides();
      updateArcEffect();
    }
  };

  return (
    <div className="showcase-container-gallery">
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel">
          {slides.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className='text-gallery'>
        <p className='description1'>
          <Trans
            i18nKey="gallery.welcome"
            components={{
              special: <span className="special-caracter" />
            }}
          />
        </p>
        <h1 className='electricity-title1'>{t('gallery.servicesOffered')}</h1>
        <p className='description1'>{t('gallery.photoReflects')}</p>
      </div>
    </div>
  );
};

export default Carousel;
