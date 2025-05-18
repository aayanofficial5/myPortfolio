import React, { useState } from "react";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Achievements from "./sections/Achievements";
import Timeline from "./sections/TimeLine";
import NavBar from "./components/NavBar";
const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <NavBar setShowSideBar={setShowSideBar} />
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="bg-background  text-primary transition-all duration-300 min-h-screen mt-7 md:mt-0 md:ml-[110px]">
        <Hero />
        <Achievements />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
