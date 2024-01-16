import React from "react";
import TopBar from "./components/TopBar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./components/Box";
import Moon from "./components/Moon";

export default function App() {
  return (
    <div>
      <TopBar />
      <Moon />
    </div>
  );
}
