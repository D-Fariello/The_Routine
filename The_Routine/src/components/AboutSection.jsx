import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="about">
      <h2 className="about__title" data-aos="fade-up">
        À propos
      </h2>
      {/* Host */}
      <section className="about__host" data-aos="fade-up">
        <div className="about__hostPhotoWrap">
          <img
            className="about__hostPhoto"
            src="/images/foto-03.avif"
            alt="Photo de l’animatrice du podcast"
          />
          <span className="about__micBadge" aria-hidden="true">
            🎙️
          </span>
          <span className="about__waveBg" aria-hidden="true" />
        </div>

        <div className="about__hostBody">
          <h3 className="about__hostName">Dalila</h3>
          <p className="about__hostRole">Animatrice & Productrice</p>
          <p className="about__hostBio">
            Passionnée par les routines simples qui changent la vie : sport,
            bien-être et petits rituels du quotidien. Ici, on partage des
            pratiques concrètes, des invité·e·s sincères et zéro blabla.
          </p>
        </div>
      </section>

      {/* Podcast */}
      <section
        className="about__podcast"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        <div className="about__podcastLogoWrap">
          <img
            className="about__podcastLogo"
            src="/images/foto-04.avif"
            alt="Logo du podcast The Routine"
          />
          <span className="about__podcastBadge" aria-hidden="true">
            🎧
          </span>
          <span className="about__waveBg" aria-hidden="true" />
        </div>

        <div className="about__podcastBody">
          <h3 className="about__podcastTitle">À propos du podcast</h3>
          <p className="about__podcastDesc">
            <strong>The Routine</strong>, c’est un podcast qui explore les
            habitudes qui transforment : sport, bien-être et art de vivre. Des
            échanges honnêtes, des méthodes concrètes et une bonne dose
            d’inspiration pour bâtir ta routine durable.
          </p>
        </div>
      </section>

      {/* Boutons d’écoute */}
      <div className="about__platforms" data-aos="fade-up" data-aos-delay="140">
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
    </section>
  );
};

export default AboutSection;
