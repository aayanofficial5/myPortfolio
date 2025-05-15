import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import SEO from "./components/SEO";
const App = () => {
  return (
    <div className="bg-background dark:bg-background text-primary dark:text-primary transition-colors duration-300 min-h-screen w-screen">
      <SEO
        title="Aayan Patel | Web Developer"
        description="Creative frontend developer portfolio using React"
        keywords="web developer, react, portfolio, frontend"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default App;
