import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            letsCreate: "Let<special>'</special>s create something"
          },
          showcase: {
            work1: "Work 1",
            work2: "Work 2",
            work3: "Work 3",
            work4: "Work 4",
            work5: "Work 5",
            work6: "Work 6",
            empowering: "Empowering",
            homesBusinesses: "homes and businesses with",
            advanced: "advanced",
            electricalSolutions: "electrical solutions.",
            innovativeIdeas: "We bring innovative ideas and professional expertise to light up your future.",
            gallery: "Gallery",
            contactUs: "Contact us"
          },
          section1: {
            whatWeDo: "WHAT WE DO",
            bright: "Bright",
            solutionsFor: "solutions for",
            sustainable: "clean, sustainable",
            energy: "energy.",
            description: "We work with innovative electrical solutions, carrying out installations, maintenance and consultancy to ensure energy efficiency and safety in different environments.",
            imageAlt: "Description of the image",
            eleganceEfficiency: "Elegance and Efficiency: Transforming Spaces with Innovative Lighting",
            lightingSolutions: "Our lighting solutions transform homes into safer and more welcoming environments, bringing efficiency and innovation to each space."
          },
          section2: {
            whyChooseUs: "Why Choose Us",
            your: "Your",
            partner: "Partner",
            in: "in Innovative Electrical ",
            solutions: "Solutions",
            description: "Discover how our expertise and commitment to quality can help transform your spaces with cutting-edge electrical solutions. Explore a range of services designed to meet diverse needs, ensuring efficiency, safety, and sustainability.",
            electricalInstallations: {
              title: "Electrical Installations",
              text: "Low-voltage installations • Lighting design • Transformer stations • Generator sets • UPS • Renewable energies • Power factor correction batteries • Project"
            },
            homeAutomation: {
              title: "Home Automation and Comfort",
              text: "Home Automation and Comfort • Ambient sound • Underfloor heating • Domotics"
            },
            maintenance: {
              title: "Maintenance",
              text: "Infrastructure • Technical installations"
            },
            additionalServicesAlt: "Additional Services",
            ited: {
              title: "ITED",
              text: "Installation of telecommunications infrastructure • Cabinets • Project"
            },
            security: {
              title: "Security",
              text: "Fire detection and extinguishing systems • Implementation of self-protection measures • Intrusion detection system • CCTV"
            },
            certification: {
              title: "Certification",
              text: "Installations"
            }
          },
          section3: {
            titleLine1: "Energize your world",
            titleLine2: "with efficient electrical solutions",
            imageAlt: "Example",
            startHere: "Start here",
            intro: "iLight specializes in sustainable electrical systems for homes and businesses. Fill out the form below and receive personalized assistance on how to optimize your energy consumption.",
            contact: "Contact",
            form: {
              nameLabel: "Name",
              namePlaceholder: "Enter your name...",
              phoneLabel: "Phone",
              phonePlaceholder: "Enter your phone number...",
              emailLabel: "Email",
              emailPlaceholder: "Enter your email...",
              subjectLabel: "Subject",
              subjectPlaceholder: "Enter the subject...",
              messageLabel: "Message",
              messagePlaceholder: "Enter your message...",
              submit: "Submit"
            }
          },
          footer: {
            loveOurCompany: "LOVE OUR COMPANY",
            companyTaglineLine1: "iLight: Brightening",
            companyTaglineLine2: "the future with innovative LED solutions.",
            contactUs: "CONTACT US",
            followUs: "FOLLOW US",
            rightsReserved: "© 2025 All the rights reserved to ILight"
          },
          gallery: {
            welcome: "Welcome to our gallery",
            servicesOffered: "In this gallery, you can find some of the services we offer to our clients",
            photoReflects: "Each photo reflects the dedication, craftsmanship, and attention to detail that define our work. We are proud to share these moments of excellence with you."
          }
        }
      },
      pt: {
        translation: {
          header: {
            letsCreate: "Vamos criar algo"
          },
          showcase: {
            work1: "Trabalho 1",
            work2: "Trabalho 2",
            work3: "Trabalho 3",
            work4: "Trabalho 4",
            work5: "Trabalho 5",
            work6: "Trabalho 6",
            empowering: "Empoderando",
            homesBusinesses: "lares e empresas com",
            advanced: "avançadas",
            electricalSolutions: "soluções elétricas.",
            innovativeIdeas: "Trazemos ideias inovadoras e expertise profissional para iluminar seu futuro.",
            gallery: "Galeria",
            contactUs: "Contate<special>-</special>nos"
          },
          section1: {
            whatWeDo: "O QUE FAZEMOS",
            bright: "Brilhantes",
            solutionsFor: "soluções para",
            sustainable: "limpa, sustentável",
            energy: "energia.",
            description: "Trabalhamos com soluções elétricas inovadoras, realizando instalações, manutenção e consultoria para garantir eficiência energética e segurança em diferentes ambientes.",
            imageAlt: "Descrição da imagem",
            eleganceEfficiency: "Elegância e Eficiência: Transformando Espaços com Iluminação Inovadora",
            lightingSolutions: "Nossas soluções de iluminação transformam lares em ambientes mais seguros e acolhedores, trazendo eficiência e inovação para cada espaço."
          },
          section2: {
            whyChooseUs: "Porquê nos escolher",
            your: "Seu",
            partner: "Parceiro",
            in: "em soluções Elétricas ",
            solutions: "Inovadoras",
            description: "Descubra como nossa experiência e compromisso com a qualidade podem transformar seus espaços com soluções elétricas de ponta. Explore uma variedade de serviços projetados para atender a diversas necessidades, garantindo eficiência, segurança e sustentabilidade.",
            electricalInstallations: {
              title: "Instalações Elétricas",
              text: "Instalações em baixa tensão • Luminotecnia • Postos de transformação • Grupos Geradores • UPS • Energias renováveis • Baterias de correção de fator de potência • Projeto"
            },
            homeAutomation: {
              title: "Automação Residencial e Conforto",
              text: "Home Automation e Conforto • Som ambiente • Piso radiante • Domótica"
            },
            maintenance: {
              title: "Manutenção",
              text: "Infraestrutura • Instalações técnicas"
            },
            additionalServicesAlt: "Serviços Adicionais",
            ited: {
              title: "ITED",
              text: "Instalação de infraestrutura de telecomunicações • Bastidores • Projeto"
            },
            security: {
              title: "Segurança",
              text: "Sistemas de detecção e extinção de incêndios • Implementação de medidas de autoproteção • Sistema de detecção de intrusão • CCTV"
            },
            certification: {
              title: "Certificação",
              text: "Instalações"
            }
          },
          section3: {
            titleLine1: "Energize seu mundo",
            titleLine2: "com soluções elétricas eficientes",
            imageAlt: "Exemplo",
            startHere: "Comece aqui",
            intro: "A iLight se especializa em sistemas elétricos sustentáveis para residências e empresas. Preencha o formulário abaixo e receba assistência personalizada sobre como otimizar seu consumo de energia.",
            contact: "Contato",
            form: {
              nameLabel: "Nome",
              namePlaceholder: "Digite seu nome...",
              phoneLabel: "Telefone",
              phonePlaceholder: "Digite seu número de telefone...",
              emailLabel: "Email",
              emailPlaceholder: "Digite seu email...",
              subjectLabel: "Assunto",
              subjectPlaceholder: "Digite o assunto...",
              messageLabel: "Mensagem",
              messagePlaceholder: "Digite sua mensagem...",
              submit: "Enviar"
            }
          },
          footer: {
            loveOurCompany: "AMAMOS NOSSA EMPRESA",
            companyTaglineLine1: "iLight: Iluminando",
            companyTaglineLine2: "o futuro com soluções LED inovadoras.",
            contactUs: "CONTATE<special>-</special>NOS",
            followUs: "SIGA<special>-</special>NOS",
            rightsReserved: "© 2025 Todos os direitos reservados à ILight"
          },
          gallery: {
            // Parênteses e hífen com placeholders <special>
            welcome: "Bem<special>-</special>vindo<special>(</special>a<special>)</special> à nossa galeria",
            servicesOffered: "Nesta galeria, você pode encontrar alguns dos serviços que oferecemos aos nossos clientes",
            photoReflects: "Cada foto reflete a dedicação, o artesanato e a atenção aos detalhes que definem nosso trabalho. Temos orgulho de compartilhar esses momentos de excelência com você."
          }
        }
      }
    }
  });

export default i18n;
