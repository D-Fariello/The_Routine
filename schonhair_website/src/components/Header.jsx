import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__logo">Schönhair</div>
      <nav className="header__nav">
        <a href="#hero">Home</a>
        <a href="#services">Servizi</a>
        <a href="#about">Chi Siamo</a>
        <a href="#contact">Contatti</a>
      </nav>
    </header>
  );
};

export default Header;
