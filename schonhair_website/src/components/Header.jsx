import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <a href="#hero" className="header__logo">
        Schönhair Beauty
      </a>

      <button className="header__burger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Servizi
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          Chi Siamo
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contatti
        </a>
      </nav>
    </header>
  );
};

export default Header;
