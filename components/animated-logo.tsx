"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function InfinityDots() {
  const groupRef = useRef<THREE.Group>(null)

  // Create single infinity curve points
  const infinityPoints = useMemo(() => {
    const points = []
    const scale = 2.5
    const numPoints = 32

    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 2

      // Parametric equations for infinity symbol (lemniscate)
      const denominator = 1 + Math.sin(t) * Math.sin(t)
      const x = (scale * Math.cos(t)) / denominator
      const y = (scale * Math.sin(t) * Math.cos(t)) / denominator
      const z = Math.sin(t * 3) * 0.15 // Add slight Z variation for depth

      // Vary dot sizes based on position for visual interest
      const size = 0.1 + Math.abs(Math.sin(t * 2.5)) * 0.04

      points.push({
        position: [x, y, z],
        size,
        delay: i * 0.08,
        originalY: y,
      })
    }

    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Slight tilt on X axis
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.04
      
      const totalDots = infinityPoints.length
      const time = state.clock.elapsedTime
      
      // Calculate the base position for the first pulsing dot
      const basePosition = (time * 0.5) % 1 // Moves from 0 to 1 over time
      
      // Animate individual dots
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh
        const point = infinityPoints[index]
        if (point) {
          // Calculate the position of this dot in the sequence (0 to 1)
          const dotPosition = index / totalDots
          
          // Calculate distance to the current pulse position (handling wrap-around)
          let distance = Math.abs((dotPosition - basePosition + 1.5) % 1 - 0.5)
          
          // Create a pulse effect that follows the base position
          const pulseWidth = 0.2 // Slightly reduced pulse width
          const pulse = Math.max(0, 1 - (distance / pulseWidth) * 2)
          
          // Apply scaling with easing for smoother pulse (slightly increased amplitude)
          const scale = 0.9 + Math.pow(pulse, 1.8) * 0.6 // Increased max scale and adjusted easing
          mesh.scale.setScalar(scale)
          
          // Adjusted emissive intensity
          const material = mesh.material as THREE.MeshStandardMaterial
          material.emissiveIntensity = 0.1 + pulse * 0.2 // Slightly increased emissive intensity
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {infinityPoints.map((point, index) => (
        <mesh key={index} position={point.position}>
          <sphereGeometry args={[point.size, 12, 12]} />
          <meshStandardMaterial
            color="#f3f4f6"
            metalness={0.4}
            roughness={0.3}
            emissive="#3b82f6"
            emissiveIntensity={0.08}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(60 * 3) // Reduced particle count
    for (let i = 0; i < 60; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#6366f1" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function LogoFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-12 h-6">
        <div
          className="absolute w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse"
          style={{ top: "1px", left: "0px" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-gray-400 rounded-full animate-pulse"
          style={{ top: "0px", left: "4px" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"
          style={{ top: "1px", left: "7px" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-gray-600 rounded-full animate-pulse"
          style={{ top: "3px", left: "9px" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-gray-600 rounded-full animate-pulse"
          style={{ top: "3px", left: "11px" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"
          style={{ top: "1px", left: "13px" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-gray-400 rounded-full animate-pulse"
          style={{ top: "0px", left: "16px" }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 bg-gray-300 rounded-full animate-pulse"
          style={{ top: "1px", left: "20px" }}
        ></div>
      </div>
    </div>
  )
}

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<LogoFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={(state) => {
            state.gl.setClearColor(0x000000, 0)
          }}
        >
          {/* Lighting setup */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[8, 8, 5]}
            intensity={0.8}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-6, -6, -6]} intensity={0.4} color="#3b82f6" />
          <spotLight position={[0, 8, 0]} angle={0.4} penumbra={1} intensity={0.3} color="#8b5cf6" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Single infinity symbol */}
          <InfinityDots />


          {/* Controls for interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
