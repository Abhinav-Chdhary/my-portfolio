import React from "react";
import TopBar from "./components/TopBar";
import MoonScene from "./components/MoonScene";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div>
      <TopBar />
      <MoonScene />
      <AboutMe />
      <Skills />
    </div>
  );
}
