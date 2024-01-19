import React from "react";
import TopBar from "./components/TopBar";
import MoonScene from "./components/MoonScene";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <TopBar />
      <MoonScene />
      <AboutMe />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}
