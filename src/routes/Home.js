import React from "react";
import HeroSection from "../components/HeroSection";
import HighlightSection from "../components/HighlightSection";
import TesimonialSection from "../components/TestimonialSection";
import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightSection />
      <TesimonialSection />
      <About />
      <Footer />
    </>
  );
}

export default Home;
