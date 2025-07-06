"use client"

import dynamic from "next/dynamic"

// Dynamically import the 3D logo to prevent SSR issues
const AnimatedLogo = dynamic(() => import("@/components/animated-logo"), {
  ssr: false,
  loading: () => (
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
  ),
})

export default function LogoWrapper({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <AnimatedLogo />
    </div>
  )
}
