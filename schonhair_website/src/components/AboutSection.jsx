import React from "react";
import img1 from "/images/image_1.jpg";
import img2 from "/images/image_2.jpg";
import img3 from "/images/image_7.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about__text">
        <h2>Servizi di Bellezza Curati per Te</h2>
        <p>
          Utilizziamo prodotti esclusivi e tecniche su misura per garantirti un
          risultato che valorizza la tua unicità.
        </p>
      </div>

      <div className="about__services">
        <div className="about__card">
          <img src={img1} alt="Custom Color" />
          <div className="about__label">Colorazioni Personalizzate</div>
        </div>
        <div className="about__card">
          <img src={img2} alt="Hair Cut & Styling" />
          <div className="about__label">Taglio e Styling</div>
        </div>
        <div className="about__card">
          <img src={img3} alt="Extensions" />
          <div className="about__label">Extension</div>
        </div>
      </div>

      <div className="about__button">
        <a href="#contact" className="about__cta">
          Prenota Ora
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
