import moonImg from "../assets/moon.jpg";
import moonNormal from "../assets/normal.jpg";
import { TextureLoader } from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Moon() {
  const moonMap = new TextureLoader().load(moonImg);
  const moonNormalMap = new TextureLoader().load(moonNormal);
  const moonRef = useRef();
  useFrame(() => {
    moonRef.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={moonMap} />
    </mesh>
  );
}
