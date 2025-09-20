import React, { useEffect } from "react";
import TeamSection from "./TeamSection";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="about">
      {/* Bio + Logo/Manifesto */}
      <div className="about__team" data-aos="fade-up">
        <TeamSection />
      </div>

      {/* Mission */}
      <div className="about__content" data-aos="fade-up" data-aos-delay="100">
        <h2>Notre mission</h2>
        <p>
          <strong>The Routine</strong> explore les habitudes qui transforment :
          sport, bien-être et art de vivre. Discussions honnêtes, méthodes
          concrètes et inspirations pour une routine durable.
        </p>
      </div>

      {/* Valeurs */}
      <div className="about__values">
        <div className="about__value" data-aos="flip-left">
          <h3>Clarté</h3>
          <p>
            Des idées simples, des conseils concrets — pour passer à l’action.
          </p>
        </div>
        <div
          className="about__value"
          data-aos="flip-right"
          data-aos-delay="100"
        >
          <h3>Constance</h3>
          <p>Progresser un peu chaque jour, sans pression inutile.</p>
        </div>
        <div className="about__value" data-aos="flip-left" data-aos-delay="200">
          <h3>Équilibre</h3>
          <p>Corps, esprit, récupération — une vision vraiment globale.</p>
        </div>
      </div>

      {/* Plateformes */}
      <div className="about__platforms" data-aos="fade-up" data-aos-delay="150">
        <h3>Écouter le podcast</h3>
        <div className="about__platformButtons">
          <a
            className="about__platformBtn about__platformBtn--spotify"
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            className="about__platformBtn about__platformBtn--apple"
            href="https://podcasts.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Podcasts
          </a>
          <a
            className="about__platformBtn about__platformBtn--youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* CTA editoriale (cards con icone) */}
      <div className="about__ctaCards" data-aos="fade-up" data-aos-delay="180">
        <div className="about__ctaCard">
          <div className="about__ctaIcon" aria-hidden="true">
            🎙️
          </div>
          <div className="about__ctaBody">
            <h4>Devenir invité·e</h4>
            <p>
              Partagez votre parcours et vos idées concrètes pour inspirer la
              communauté.
            </p>
            <a href="#contact" className="about__link">
              Proposer ma candidature
            </a>
          </div>
        </div>

        <div className="about__ctaCard">
          <div className="about__ctaIcon" aria-hidden="true">
            💡
          </div>
          <div className="about__ctaBody">
            <h4>Proposer un sujet</h4>
            <p>
              Questions, thèmes, doutes du quotidien : aidez-nous à façonner les
              prochains épisodes.
            </p>
            <a href="#contact" className="about__link">
              Envoyer une idée
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
