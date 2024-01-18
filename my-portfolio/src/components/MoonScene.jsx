import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Moon from "./Moon";
import { SpotLightHelper, TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import Stars from "./Stars";

export default function MoonScene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 10]} />
      <color args={[0, 0, 0]} attach={"background"} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-5, 1.5, 5]} angle={0.5} intensity={200} />
      <Moon />
      <OrbitControls
        enableZoom={false}
        enableDamping={true}
        autoRotate={true}
        autoRotateSpeed={0.4}
      />
      {Array(200)
        .fill()
        .map((_, index) => (
          <Stars key={index} />
        ))}
    </Canvas>
  );
}
