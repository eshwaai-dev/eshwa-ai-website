'use client'

import { useEffect, useRef } from 'react'

export default function DNAVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.5 // Slow down the video for better effect
      video.loop = true
      video.muted = true
      video.play().catch(() => {
        // Autoplay failed, but that's okay
      })
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: 'brightness(0.3) contrast(1.2)' }}
      >
        <source src="/videos/Microscopic Blue Glowing Cells Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 opacity-90"></div>
    </div>
  )
} 