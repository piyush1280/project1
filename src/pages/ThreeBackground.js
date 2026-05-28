import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Sphere() {
  return (
    <mesh rotation={[10, 15, 0]}>
      <sphereGeometry args={[1, 100, 200]} />
      <meshStandardMaterial color="#ff4fd8" wireframe />
    </mesh>
  );
}

function ThreeBackground() {
  return (
    <Canvas className="canvas-bg">
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere />
      <Stars />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default ThreeBackground;