import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = ({
  email = "hello@theroutine.com",
  whatsapp = "+393773062677",
  instagram = "https://www.instagram.com/the.routineofficial/",
}) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const mailHref = `mailto:${email}`;
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <div className="contact__intro" data-aos="fade-up" data-aos-delay="80">
        <h2>Entrer en contact</h2>
        <p>
          Devenir invité·e, proposer un sujet ou travailler ensemble —
          écrivez-moi.
          <br />
          <span className="contact__muted">
            The Routine, le podcast des habitudes qui transforment.
          </span>
        </p>
      </div>

      {/* Blocchi */}
      <div className="contact__blocks">
        <article
          className="contact__block"
          data-aos="zoom-in"
          data-aos-delay="120"
        >
          <div className="contact__icon">🎙️</div>
          <h3>Devenir invité·e</h3>
          <p>
            Une histoire, une expertise, une pratique utile ? Partagez-la dans
            un épisode.
          </p>
        </article>

        <article
          className="contact__block"
          data-aos="zoom-in"
          data-aos-delay="180"
        >
          <div className="contact__icon">💡</div>
          <h3>Proposer un sujet</h3>
          <p>
            Vos questions et thèmes inspirent les prochains épisodes — sport,
            bien-être, art de vivre.
          </p>
        </article>

        <article
          className="contact__block"
          data-aos="zoom-in"
          data-aos-delay="240"
        >
          <div className="contact__icon">🤝</div>
          <h3>Travailler avec moi</h3>
          <p>
            Coaching, collaborations, contenu — construisons quelque chose
            ensemble.
          </p>
        </article>
      </div>

      {/* Bottoni globali sotto */}
      <div className="contact__buttons" data-aos="fade-up" data-aos-delay="300">
        <a
          className="btn btn--ghost"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a className="btn btn--primary" href={mailHref}>
          Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
