import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="services">
      <div className="services__text">
        <h2>Servizi di Bellezza Curati per Te</h2>
        <p>
          Utilizziamo prodotti esclusivi e tecniche su misura per garantirti un
          risultato che valorizza la tua unicità.
        </p>
      </div>

      <div className="services__cards">
        <div className="services__card" data-aos="zoom-in">
          <img src="/images/image_1.jpg" alt="Custom Color" />
          <div className="services__label">Colorazioni Personalizzate</div>
        </div>
        <div className="services__card" data-aos="zoom-in" data-aos-delay="100">
          <img src="/images/image_2.jpg" alt="Hair Cut & Styling" />
          <div className="services__label">Taglio e Styling</div>
        </div>
        <div className="services__card" data-aos="zoom-in" data-aos-delay="200">
          <img src="/images/image_7.jpg" alt="Extensions" />
          <div className="services__label">Extension</div>
        </div>
      </div>

      <div className="services__button">
        <a href="#contact" className="services__cta">
          Prenota Ora
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
