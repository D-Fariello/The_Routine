import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EpisodesSection from "./components/EpisodesSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ReelsSection from "./components/ReelsSection";

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
      <EpisodesSection />
      <ReelsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
