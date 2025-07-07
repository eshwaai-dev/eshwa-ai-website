"use client"

import { useEffect, useRef } from "react"

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoId = 'hero-video'

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Preload video before playing
      videoElement.preload = 'auto';
      videoElement.load();

      videoElement.addEventListener('error', (e) => {
        console.error('Video error:', e)
        // Add a fallback image when video fails to load
        const container = videoElement.parentElement
        if (container) {
          const fallbackImg = document.createElement('img')
          fallbackImg.src = '/placeholder.jpg'
          fallbackImg.className = 'w-full h-full object-cover object-center'
          container.appendChild(fallbackImg)
        }
      })

      // Prevent video from reloading when window resizes
      const handleResize = () => {
        if (videoElement.onplaying) {
          videoElement.pause();
          videoElement.currentTime = 0;
          videoElement.play().catch(console.error);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        id={videoId}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center transition-opacity duration-500 transform-none border-2 border-gray-900"
        style={{
          zIndex: -1,
          filter: 'brightness(0.8)',
          transform: 'none',
          rotate: '0deg',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0,
          padding: 0,
          border: '2px solid #1f2937'
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
