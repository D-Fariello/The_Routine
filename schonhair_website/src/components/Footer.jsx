import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4>Schönhair</h4>
          <p>
            Via Bellezza 23
            <br />
            20100 Milano
          </p>
          <p>
            <a href="tel:+390212345678">+39 02 123 456 78</a>
          </p>
          <p>
            <a href="mailto:info@schonhair.it">info@schonhair.it</a>
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
          &copy; {new Date().getFullYear()} Schönhair – Tutti i diritti
          riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
