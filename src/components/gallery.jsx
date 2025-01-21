import React, { useRef, useState, useEffect } from 'react';
import './gallery.css';
import img1 from '../assets/open1.jpg';
import img2 from '../assets/open5.jpg';
import img3 from '../assets/open3.jpg';
import img4 from '../assets/open4.jpg';
import img5 from '../assets/open2.jpg';
import img6 from '../assets/open6.jpg';






const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    
    const images = container.querySelectorAll('img');
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    
    const amplitude = 40;
    const angleAmplitude = 10;
    const maxDistance = container.offsetWidth / 2;

    images.forEach(img => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const distance = Math.abs(containerCenter - imgCenter);
      
      // Direção invertida: esquerda -> esquerda, direita -> direita
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

    if (container.scrollLeft < threshold) {
      container.scrollLeft += maxScrollLeft / 2;
    } else if (container.scrollLeft > maxScrollLeft - threshold) {
      container.scrollLeft -= maxScrollLeft / 2;
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    container.scrollLeft = totalWidth / 2;
    updateArcEffect();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
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

  return (
    




    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="carousel">
        {slides.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      </div> 
  );
};

export default Carousel;
