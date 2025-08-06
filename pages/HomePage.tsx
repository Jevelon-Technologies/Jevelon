import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import TechStackStrip from "../components/TechStackStrip";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import { scrollToSectionMobile, scrollToTopMobile } from "../utils/useScrollToTop";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      // Wait for components to render
      setTimeout(() => {
        scrollToSectionMobile(location.hash);
      }, 100);
    } else {
      // If no hash, ensure we're at the top of the page
      // This handles cases where user navigates to home page without a hash
      setTimeout(() => {
        scrollToTopMobile();
      }, 100);
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <TechStackStrip />
      <Services />
      <About />
      <Contact />
    </>
  );
}