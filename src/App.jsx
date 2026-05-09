import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ClientWork from "./components/ClientWork";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlitchLine from "./components/GlitchLine";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Fade-in observer
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".fade-in")
      .forEach((el) => fadeObserver.observe(el));

    return () => {
      observer.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <GlitchLine />
      <Services />
      <GlitchLine />
      <Projects />
      <GlitchLine />
      <ClientWork />
      <GlitchLine />
      <TechStack />
      <GlitchLine />
      <About />
      <GlitchLine />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
