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
          <p>
            Via Hans Wasserman 14, <br />
            39039 Villabassa Niederdof
          </p>
        </div>
        <div className="contact__item" data-aos="zoom-in" data-aos-delay="300">
          <h3>Telefono</h3>
          <p>
            <a href="tel:+390474615718">+39 04 74 61 57 18</a>
            <br />
            <a href="tel:+390474615718">+39 377 30 62 677</a>
          </p>
        </div>
        <div className="contact__item" data-aos="zoom-in" data-aos-delay="400">
          <h3>Email</h3>
          <p>
            <a href="mailto:schonhairvillabassa@gmail.com">
              schonhairvillabassa@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="contact__cta" data-aos="fade-up" data-aos-delay="500">
        <a
          href="https://wa.me/393773062677"
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
