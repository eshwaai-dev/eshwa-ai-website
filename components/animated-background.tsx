"use client"

import { useEffect, useState } from "react"

interface CircularProgressProps {
  percentage: number
  size: number
  strokeWidth: number
  delay: number
  x: string
  y: string
}

function CircularProgress({ percentage, size, strokeWidth, delay, x, y }: CircularProgressProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return prev + 1
        })
      }, 50)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="absolute opacity-20 animate-pulse" style={{ left: x, top: y }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out drop-shadow-lg"
          style={{
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
          }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-blue-400 font-bold text-xs"
        style={{ fontSize: `${size / 8}px` }}
      >
        {currentPercentage}%
      </div>
    </div>
  )
}

interface AnimatedBarProps {
  width: number
  height: number
  percentage: number
  delay: number
  x: string
  y: string
}

function AnimatedBar({ width, height, percentage, delay, x, y }: AnimatedBarProps) {
  const [currentWidth, setCurrentWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentWidth((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return prev + 2
        })
      }, 30)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="absolute opacity-30" style={{ left: x, top: y }}>
      <div className="bg-gray-700 rounded-sm" style={{ width: `${width}px`, height: `${height}px` }}>
        <div
          className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm transition-all duration-1000 ease-out"
          style={{
            width: `${(currentWidth / 100) * width}px`,
            height: `${height}px`,
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
          }}
        />
      </div>
    </div>
  )
}

interface ConcentricCirclesProps {
  x: string
  y: string
  delay: number
}

function ConcentricCircles({ x, y, delay }: ConcentricCirclesProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`absolute opacity-20 transition-all duration-2000 ${isVisible ? "scale-100" : "scale-0"}`}
      style={{ left: x, top: y }}
    >
      <div className="relative w-24 h-24">
        {[1, 2, 3, 4].map((ring, index) => (
          <div
            key={ring}
            className="absolute border border-blue-400 rounded-full animate-ping"
            style={{
              width: `${ring * 15}px`,
              height: `${ring * 15}px`,
              left: `${(96 - ring * 15) / 2}px`,
              top: `${(96 - ring * 15) / 2}px`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
    </div>
  )
}

interface GridPatternProps {
  x: string
  y: string
}

function GridPattern({ x, y }: GridPatternProps) {
  return (
    <div className="absolute opacity-10" style={{ left: x, top: y }}>
      <div className="grid grid-cols-8 gap-1 w-32 h-32">
        {Array.from({ length: 64 }).map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 bg-blue-500 rounded-sm animate-pulse"
            style={{
              animationDelay: `${(index * 0.1) % 3}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circular Progress Indicators */}
      <CircularProgress percentage={87} size={80} strokeWidth={6} delay={500} x="10%" y="15%" />
      <CircularProgress percentage={94} size={60} strokeWidth={4} delay={1200} x="85%" y="25%" />
      <CircularProgress percentage={76} size={70} strokeWidth={5} delay={2000} x="15%" y="70%" />
      <CircularProgress percentage={92} size={50} strokeWidth={3} delay={2800} x="80%" y="75%" />
      <CircularProgress percentage={68} size={90} strokeWidth={7} delay={3500} x="50%" y="10%" />

      {/* Animated Bars */}
      <AnimatedBar width={120} height={8} percentage={85} delay={800} x="20%" y="40%" />
      <AnimatedBar width={100} height={6} percentage={72} delay={1500} x="70%" y="50%" />
      <AnimatedBar width={80} height={10} percentage={91} delay={2200} x="25%" y="85%" />
      <AnimatedBar width={140} height={7} percentage={78} delay={2900} x="60%" y="20%" />
      <AnimatedBar width={90} height={9} percentage={88} delay={3600} x="5%" y="60%" />

      {/* Multi-bar Charts */}
      <div className="absolute opacity-25" style={{ left: "40%", top: "60%" }}>
        <div className="flex items-end space-x-1 h-16">
          {[65, 80, 45, 90, 70, 85].map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-blue-600 to-cyan-400 w-3 transition-all duration-1000 ease-out"
              style={{
                height: `${height}%`,
                animationDelay: `${index * 200 + 1000}ms`,
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Concentric Circles */}
      <ConcentricCircles x="30%" y="30%" delay={1000} />
      <ConcentricCircles x="75%" y="60%" delay={2500} />
      <ConcentricCircles x="10%" y="45%" delay={4000} />

      {/* Grid Patterns */}
      <GridPattern x="5%" y="5%" />
      <GridPattern x="85%" y="10%" />
      <GridPattern x="90%" y="80%" />

      {/* Floating Data Points */}
      <div className="absolute opacity-20" style={{ left: "60%", top: "40%" }}>
        <div className="relative w-32 h-32">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 120}px`,
                top: `${Math.random() * 120}px`,
                animationDelay: `${index * 0.3}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scanning Lines */}
      <div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"
        style={{ top: "35%" }}
      />
      <div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"
        style={{ top: "65%", animationDelay: "1s" }}
      />

      {/* Vertical Scanning Lines */}
      <div
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-20 animate-pulse"
        style={{ left: "25%", animationDelay: "2s" }}
      />
      <div
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-15 animate-pulse"
        style={{ left: "75%", animationDelay: "3s" }}
      />

      {/* Hexagonal Patterns */}
      <div className="absolute opacity-10" style={{ left: "45%", top: "80%" }}>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 border border-blue-400 transform rotate-45 animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
