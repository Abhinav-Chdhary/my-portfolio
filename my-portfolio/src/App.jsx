import React from "react";
import TopBar from "./components/TopBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MoonScene from "./components/MoonScene";

export default function App() {
  return (
    <div>
      <TopBar />
      <MoonScene />
    </div>
  );
}
