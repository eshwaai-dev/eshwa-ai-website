"use client"

import { useEffect, useState } from "react"

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}

interface CircularProgressProps {
  percentage: number
  size: number
  strokeWidth: number
  delay: number
  x: string
  y: string
  prefersReducedMotion: boolean
}

function CircularProgress({ percentage, size, strokeWidth, delay, x, y, prefersReducedMotion }: CircularProgressProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentPercentage(percentage)
      return
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return prev + 2
        })
      }, 40)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay, prefersReducedMotion])

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
  prefersReducedMotion: boolean
}

function AnimatedBar({ width, height, percentage, delay, x, y, prefersReducedMotion }: AnimatedBarProps) {
  const [currentWidth, setCurrentWidth] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentWidth(percentage)
      return
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentWidth((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return prev + 3
        })
      }, 25)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay, prefersReducedMotion])

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
  prefersReducedMotion: boolean
}

function ConcentricCircles({ x, y, delay, prefersReducedMotion }: ConcentricCirclesProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, prefersReducedMotion])

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
              animationDelay: `${index * 0.3}s`,
              animationDuration: "2.5s",
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
              animationDelay: `${(index * 0.05) % 2}s`,
              animationDuration: "1.5s",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static version with minimal animations */}
        <div className="absolute opacity-10" style={{ left: "10%", top: "15%" }}>
          <div className="w-20 h-20 border-2 border-blue-400 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">87%</span>
          </div>
        </div>
        <div className="absolute opacity-10" style={{ left: "85%", top: "25%" }}>
          <div className="w-15 h-15 border-2 border-blue-400 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">94%</span>
          </div>
        </div>
        <div className="absolute opacity-10" style={{ left: "15%", top: "70%" }}>
          <div className="w-18 h-18 border-2 border-blue-400 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">76%</span>
          </div>
        </div>

        {/* Static bars */}
        <div className="absolute opacity-20" style={{ left: "20%", top: "40%" }}>
          <div className="bg-gray-700 rounded-sm w-30 h-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm w-4/5 h-2" />
          </div>
        </div>
        <div className="absolute opacity-20" style={{ left: "70%", top: "50%" }}>
          <div className="bg-gray-700 rounded-sm w-25 h-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm w-3/4 h-2" />
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute opacity-5" style={{ left: "5%", top: "5%" }}>
          <div className="grid grid-cols-8 gap-1 w-32 h-32">
            {Array.from({ length: 64 }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-blue-500 rounded-sm opacity-50" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circular Progress Indicators */}
      <div style={{ animationDelay: "0s" }}>
        <CircularProgress
          percentage={87}
          size={80}
          strokeWidth={6}
          delay={300}
          x="10%"
          y="15%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "1s" }}>
        <CircularProgress
          percentage={94}
          size={60}
          strokeWidth={4}
          delay={800}
          x="85%"
          y="25%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "2s" }}>
        <CircularProgress
          percentage={76}
          size={70}
          strokeWidth={5}
          delay={1500}
          x="15%"
          y="70%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "3s" }}>
        <CircularProgress
          percentage={92}
          size={50}
          strokeWidth={3}
          delay={2200}
          x="80%"
          y="75%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "4s" }}>
        <CircularProgress
          percentage={68}
          size={90}
          strokeWidth={7}
          delay={3000}
          x="50%"
          y="10%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>

      {/* Animated Bars */}
      <div style={{ animationDelay: "0.5s" }}>
        <AnimatedBar
          width={120}
          height={8}
          percentage={85}
          delay={600}
          x="20%"
          y="40%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "1.5s" }}>
        <AnimatedBar
          width={100}
          height={6}
          percentage={72}
          delay={1200}
          x="70%"
          y="50%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "2.5s" }}>
        <AnimatedBar
          width={80}
          height={10}
          percentage={91}
          delay={1800}
          x="25%"
          y="85%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "3.5s" }}>
        <AnimatedBar
          width={140}
          height={7}
          percentage={78}
          delay={2400}
          x="60%"
          y="20%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
      <div style={{ animationDelay: "4.5s" }}>
        <AnimatedBar
          width={90}
          height={9}
          percentage={88}
          delay={3200}
          x="5%"
          y="60%"
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>

      {/* Multi-bar Charts */}
      <div className="absolute opacity-25" style={{ left: "40%", top: "60%", animationDelay: "1s" }}>
        <div className="flex items-end space-x-1 h-16">
          {[65, 80, 45, 90, 70, 85].map((height, index) => (
            <div
              key={index}
              className={`bg-gradient-to-t from-blue-600 to-cyan-400 w-3 ${prefersReducedMotion ? "" : "transition-all duration-1000 ease-out"}`}
              style={{
                height: `${height}%`,
                animationDelay: prefersReducedMotion ? "0ms" : `${index * 150 + 800}ms`,
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Concentric Circles */}
      <div style={{ animationDelay: "0s" }}>
        <ConcentricCircles x="30%" y="30%" delay={1000} prefersReducedMotion={prefersReducedMotion} />
      </div>
      <div style={{ animationDelay: "2s" }}>
        <ConcentricCircles x="75%" y="60%" delay={2000} prefersReducedMotion={prefersReducedMotion} />
      </div>
      <div style={{ animationDelay: "3.5s" }}>
        <ConcentricCircles x="10%" y="45%" delay={3500} prefersReducedMotion={prefersReducedMotion} />
      </div>

      {/* Grid Patterns - Disable animations if reduced motion */}
      <div style={{ animationDelay: "0.5s" }}>
        <div className="absolute opacity-10" style={{ left: "5%", top: "5%" }}>
          <div className="grid grid-cols-8 gap-1 w-32 h-32">
            {Array.from({ length: 64 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 bg-blue-500 rounded-sm ${prefersReducedMotion ? "opacity-50" : "animate-pulse"}`}
                style={
                  prefersReducedMotion
                    ? {}
                    : {
                        animationDelay: `${(index * 0.05) % 2}s`,
                        animationDuration: "1.5s",
                      }
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Disable other animated elements for reduced motion */}
      {!prefersReducedMotion && (
        <>
          {/* Floating Data Points */}
          <div className="absolute opacity-20" style={{ left: "60%", top: "40%", animationDelay: "1.5s" }}>
            <div className="relative w-32 h-32">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 120}px`,
                    top: `${Math.random() * 120}px`,
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "2.5s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Scanning Lines */}
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse"
            style={{ top: "35%", animationDelay: "0s" }}
          />
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse"
            style={{ top: "65%", animationDelay: "1.5s" }}
          />

          {/* Vertical Scanning Lines */}
          <div
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-20 animate-pulse"
            style={{ left: "25%", animationDelay: "3s" }}
          />
          <div
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-15 animate-pulse"
            style={{ left: "75%", animationDelay: "4.5s" }}
          />

          {/* Hexagonal Patterns */}
          <div className="absolute opacity-10" style={{ left: "45%", top: "80%", animationDelay: "2s" }}>
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
        </>
      )}
    </div>
  )
}
