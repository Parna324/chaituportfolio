"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import type { Group } from "three";

const particlePositions: [number, number, number][] = Array.from({ length: 150 }, () => [
  (Math.random() - 0.5) * 20,
  (Math.random() - 0.5) * 20,
  (Math.random() - 0.5) * 20,
]);

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          emissive="#6d28d9"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const BackgroundParticles = () => {
  const points = useRef<Group>(null);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={points}>
      {particlePositions.map((position, i) => (
        <mesh
          key={i}
          position={position}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#ec4899" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={2} />
        <AnimatedSphere />
        <BackgroundParticles />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};
