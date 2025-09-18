import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>Schönhair Beauty</h4>
          <p>
            Via Hans Wasserman 14, <br />
            39039 Villabassa Niederdof
          </p>
          <p>
            <a href="tel:+390474615718">+39 04 74 61 57 18</a>
            <br />
            <a href="tel:+390474615718">+39 377 30 62 677</a>
          </p>
          <p>
            <a href="mailto:schonhairvillabassa@gmail.com">
              schonhairvillabassa@gmail.com
            </a>
          </p>
        </div>

        <div className="footer__column">
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Servizi</a>
            </li>
            <li>
              <a href="#about">Chi siamo</a>
            </li>
            <li>
              <a href="#contact">Contatti</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>Seguici</h4>
          <ul className="footer__social">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Schönhair Beauty – Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
