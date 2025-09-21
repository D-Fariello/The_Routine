import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Colonne */}
        <div className="footer__column">
          <h4>The Routine Podcast</h4>
          <p>
            Nice, France <br />
            (Studio & en ligne)
          </p>
          <p>
            <a href="mailto:contact@theroutinehq.com">
              contact@theroutinehq.com
            </a>
          </p>
        </div>

        <div className="footer__column">
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="#hero">Accueil</a>
            </li>
            <li>
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Suivez-nous</h4>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} The Routine – Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
