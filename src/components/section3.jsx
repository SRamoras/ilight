import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap'; 
import './section3.css'; 
import Section3Image from '../assets/formimg.png'; 

const Section3 = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elementsToAnimate = entry.target.querySelectorAll('*');
          gsap.from(elementsToAnimate, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.05,
            ease: "power2.out"
          });
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
    <section id='section3' className="section3-container" ref={sectionRef}>
      <div className="container-section-3"> 

        {/* LEFT COLUMN: Title + Image */}
        <div className="container-section-3-left">  
          <h1>
            {t('section3.titleLine1')}<br/>
            {t('section3.titleLine2')}
          </h1>
          
          <div className="section3-image">
            <img
              src={Section3Image}
              alt={t('section3.imageAlt')}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Text + Form */}
        <div className="container-section-3-right">  
          <div className="intro-container-section-3">
            <p>{t('section3.startHere')}</p>
            <p>{t('section3.intro')}</p>
          </div>

          <div className="section3-form">
            <h2>{t('section3.contact')}</h2>
            <form className="form-container">
              <div className="form-group">
                <label htmlFor="name">{t('section3.form.nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('section3.form.namePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('section3.form.phoneLabel')}</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={t('section3.form.phonePlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('section3.form.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('section3.form.emailPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('section3.form.subjectLabel')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t('section3.form.subjectPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('section3.form.messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t('section3.form.messagePlaceholder')}
                />
              </div>

              <button type="submit">{t('section3.form.submit')}</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section3;
