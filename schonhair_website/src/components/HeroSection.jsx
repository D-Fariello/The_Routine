import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h1 className="hero__headline">
          Tagli su misura per la tua bellezza autentica
        </h1>
        <p className="hero__subheadline">
          Schönhair è il tuo salone di fiducia per un look che parla di te.
          <br />
          Perché il tuo stile racconta chi sei, anche senza dire una parola.
        </p>
        <a href="#contact" className="hero__cta">
          Prenota ora
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
