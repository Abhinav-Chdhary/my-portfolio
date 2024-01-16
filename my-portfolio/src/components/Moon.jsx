import { Canvas } from "@react-three/fiber";
import React from "react";
import moon from "../assets/moon.jpg";
import moonNormal from "../assets/normal.jpg";
import { TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Stars from "./Stars";

export default function Moon() {
  const moonMap = new TextureLoader().load(moon);
  const moonNormalMap = new TextureLoader().load(moonNormal);
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={50} position={[3, 5, 5]} />
      <color args={[0, 0, 0]} attach={"background"} />
      <ambientLight intensity={Math.PI / 2} />
      <mesh>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial map={moonMap} normalMap={moonNormalMap} />
      </mesh>
      <OrbitControls enableZoom={false} />
      {Array(200)
        .fill()
        .map((_, index) => (
          <Stars key={index} />
        ))}
    </Canvas>
  );
}
