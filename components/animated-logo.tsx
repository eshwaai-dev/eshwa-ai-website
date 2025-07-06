"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function InfinityDots() {
  const groupRef = useRef<THREE.Group>(null)

  // Create infinity curve points
  const infinityPoints = useMemo(() => {
    const points = []
    const scale = 2

    // Left loop
    for (let i = 0; i <= 50; i++) {
      const t = (i / 50) * Math.PI * 2
      const x = (-scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t))
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t))
      const z = Math.sin(t * 4) * 0.1 // Add slight Z variation

      // Vary dot sizes based on position
      const size = 0.08 + Math.abs(Math.sin(t * 3)) * 0.04
      points.push({ position: [x - 1, y, z], size, delay: i * 0.1 })
    }

    // Right loop
    for (let i = 0; i <= 50; i++) {
      const t = (i / 50) * Math.PI * 2
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t))
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t))
      const z = Math.sin(t * 4 + Math.PI) * 0.1

      const size = 0.08 + Math.abs(Math.sin(t * 3)) * 0.04
      points.push({ position: [x + 1, y, z], size, delay: (i + 50) * 0.1 })
    }

    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05

      // Animate individual dots
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh
        const point = infinityPoints[index]
        if (point) {
          // Pulsing effect
          const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + point.delay) * 0.2
          mesh.scale.setScalar(pulse)

          // Floating effect
          mesh.position.y = point.position[1] + Math.sin(state.clock.elapsedTime + point.delay) * 0.1
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {infinityPoints.map((point, index) => (
        <mesh key={index} position={point.position}>
          <sphereGeometry args={[point.size, 16, 16]} />
          <meshStandardMaterial
            color="#e5e7eb"
            metalness={0.3}
            roughness={0.2}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#6366f1" transparent opacity={0.6} sizeAttenuation />
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
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={(state) => {
            state.gl.setClearColor(0x000000, 0)
          }}
        >
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#8b5cf6" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Main logo */}
          <InfinityDots />

          {/* Background particles */}
          <FloatingParticles />

          {/* Controls for interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
