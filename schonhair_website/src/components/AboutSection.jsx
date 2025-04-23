import React, { useEffect } from "react";
import TeamSection from "./TeamSection";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durata dell'animazione
      once: true, // esegue solo la prima volta
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about__team">
        <TeamSection />
      </div>
      <div className="about__content">
        <h2>La nostra filosofia</h2>
        <p>
          In Schönhair crediamo che la bellezza sia un riflesso della propria
          identità. Il nostro salone nasce per offrire un’esperienza
          personalizzata, dove ogni trattamento è pensato per far emergere la
          tua unicità.
        </p>
      </div>

      <div className="about__values">
        <div className="about__value" data-aos="flip-left">
          <h3>Ascolto</h3>
          <p>
            Ogni look nasce da una vera consulenza. Prima di tagliare,
            ascoltiamo.
          </p>
        </div>
        <div className="about__value" data-aos="flip-right">
          <h3>Autenticità</h3>
          <p>Valorizziamo la tua personalità con uno stile che parla di te.</p>
        </div>
      </div>
      <div className="about__button">
        <a href="#contact" className="about__cta">
          Contattaci
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
