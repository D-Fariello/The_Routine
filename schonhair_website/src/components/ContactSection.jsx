import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="contact__text" data-aos="fade-up" data-aos-delay="100">
        <h2>Contattaci</h2>
        <p>Per prenotazioni o informazioni, puoi scriverci o chiamarci:</p>
      </div>

      <div className="contact__info">
        <div className="contact__item" data-aos="zoom-in" data-aos-delay="200">
          <h3>Indirizzo</h3>
          <p>Via Bellezza 23, 20100 Milano</p>
        </div>
        <div className="contact__item" data-aos="zoom-in" data-aos-delay="300">
          <h3>Telefono</h3>
          <p>
            <a href="tel:+390212345678">+39 02 123 456 78</a>
          </p>
        </div>
        <div className="contact__item" data-aos="zoom-in" data-aos-delay="400">
          <h3>Email</h3>
          <p>
            <a href="mailto:info@schonhair.it">info@schonhair.it</a>
          </p>
        </div>
      </div>

      <div className="contact__cta" data-aos="fade-up" data-aos-delay="500">
        <a
          href="https://wa.me/393331112222"
          target="_blank"
          rel="noreferrer"
          className="contact__button"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
