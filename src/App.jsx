import React from "react";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import SideBar from "./components/SideBar";
import Achievements from "./sections/Achievements";
const App = () => {
  return (
    <div className="bg-background  text-primary transition-all duration-300 min-h-screen">
      <SEO
        title="Aayan Patel | Web Developer"
        description="Creative frontend developer portfolio using React"
        keywords="web developer, react, portfolio, frontend"
      />
      <SideBar />
      <Hero />
      <Achievements />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
