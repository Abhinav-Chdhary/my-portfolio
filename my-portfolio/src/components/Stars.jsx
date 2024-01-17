import React from "react";
import { MathUtils } from "three/src/math/MathUtils";

export default function Stars() {
  const posi = Array(3)
    .fill()
    .map(() => MathUtils.randFloatSpread(200));
  return (
    <mesh position={posi}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshBasicMaterial color={"#ffffff"} />
    </mesh>
  );
}
