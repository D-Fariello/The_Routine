import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import CarouselSection from "./components/CarouselSection";

const App = () => {
  useEffect(() => {
    if (!window.location.hash && window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CarouselSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
