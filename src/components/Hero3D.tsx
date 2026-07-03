"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function GlowOrb() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.25;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.9}>
      <group>
        <Sphere ref={coreRef} args={[1.6, 48, 48]}>
          <MeshDistortMaterial
            color="#7B2FF7"
            emissive="#00E5FF"
            emissiveIntensity={0.5}
            distort={0.35}
            speed={1.6}
            roughness={0.15}
            metalness={0.6}
          />
        </Sphere>
        <mesh ref={ringRef} rotation={[Math.PI / 2.6, 0, 0]}>
          <torusGeometry args={[2.3, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, 0.6, 0]}>
          <torusGeometry args={[2.7, 0.012, 16, 100]} />
          <meshBasicMaterial color="#FFD60A" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} color="#00E5FF" intensity={3} distance={20} />
      <pointLight position={[-4, -2, 4]} color="#7B2FF7" intensity={3} distance={20} />
      <pointLight position={[0, 4, -3]} color="#FFD60A" intensity={1.5} distance={15} />
    </>
  );
}

function StaticGlowOrb() {
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-56 w-56 animate-pulse-glow rounded-full bg-[radial-gradient(circle_at_35%_30%,#a78bfa,#7B2FF7_45%,#0D1340_75%)] shadow-glow-purple-lg sm:h-72 sm:w-72" />
      <div className="absolute h-64 w-64 rounded-full border border-cyan/30 sm:h-80 sm:w-80" />
      <div className="absolute h-72 w-72 rounded-full border border-yellow/20 sm:h-96 sm:w-96" />
    </div>
  );
}

export default function Hero3D() {
  const [renderCanvas, setRenderCanvas] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    })();

    setRenderCanvas(!isSmallScreen && !prefersReducedMotion && hasWebGL);
  }, []);

  if (!renderCanvas) {
    return <StaticGlowOrb />;
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <Lights />
      <GlowOrb />
    </Canvas>
  );
}
