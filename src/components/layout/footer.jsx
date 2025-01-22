import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './footer.css';
import Logo from '../../assets/logo.png';

const Footer = () => {
  const { t, i18n } = useTranslation();

  // Função para trocar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo e Descrição */}
        <div className="footer-description">
          <div className="footer-description-text">
            <p className='subtitle-paragraf-footer'>{t('footer.loveOurCompany')}</p>
            <h1>
              {t('footer.companyTaglineLine1')}<br />
              {t('footer.companyTaglineLine2')}
            </h1>
          </div>
          <div>
            <img src={Logo} alt="Base Logo" className="footer-logo" />
          </div>
        </div>

        <div className='right-footer-links'>
          <div className="footer-links1">
            {/* Contate-nos usando placeholder <special>-</special> */}
            <p className='subtitle-paragraf-footer'>
              <Trans 
                i18nKey="footer.contactUs"
                components={{
                  special: <span className="special-caracter" />
                }}
              />
            </p>
            <p className='paragraf-h1'>
              geral<span className='special-caracter'>@</span>ilight.pt
            </p>
          </div>

          {/* Links Sociais e Seleção de Idioma */}
          <div className='last-footer-links'>
            <div className="footer-links1">
              {/* Siga-nos usando placeholder <special>-</special> */}
              <p className='subtitle-paragraf-footer'>
                <Trans
                  i18nKey="footer.followUs"
                  components={{
                    special: <span className="special-caracter" />
                  }}
                />
              </p>
              <a
                className='paragraf-h1 sublinhado-animado'
                href="https://www.facebook.com/ilight.pt"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <div className="footer-links2">
                <button 
                  className='paragraf-h1 sublinhado-animado language-button' 
                  onClick={() => changeLanguage('pt')}
                >
                  PT
                </button>
                <p className='paragraf-h1 special-caracter'>/</p>
                <button 
                  className='paragraf-h1 sublinhado-animado language-button' 
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.rightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
