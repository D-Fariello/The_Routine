import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <h1 className="hero__headline">
          Bienvenue dans <span>The Routine</span>
        </h1>
        <p className="hero__subheadline">
          Le podcast qui mélange sport, bien-être et lifestyle.
          <br />
          Motivation, conseils pratiques et discussions inspirantes pour
          transformer ta routine au quotidien.
        </p>
        <a href="#contact" className="hero__cta">
          Écouter maintenant
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
