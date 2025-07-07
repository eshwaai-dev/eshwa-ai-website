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

      // Add autoplay handlers with fallback
      const handleAutoplay = () => {
        videoElement.play().catch(() => {
          console.log('Autoplay failed, trying again...')
          setTimeout(() => {
            videoElement.play().catch(() => {
              console.log('Autoplay failed after retry')
              // Add click handler as fallback
              videoElement.addEventListener('click', () => {
                videoElement.play().catch(() => {
                  console.log('Video play failed')
                })
              })
            })
          }, 1000)
        })
      }

      // Add multiple event listeners for different stages
      videoElement.addEventListener('loadeddata', handleAutoplay)
      videoElement.addEventListener('canplay', handleAutoplay)
      videoElement.addEventListener('canplaythrough', handleAutoplay)
      videoElement.addEventListener('loadedmetadata', handleAutoplay)

      // Try to play immediately
      videoElement.play().catch(() => {
        console.log('Initial play attempt failed')
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
        autoPlay
        muted
        playsInline
        preload="auto"
        loop
        className="w-full h-full object-cover object-center"
        id={videoId}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: 'cover',
          zIndex: -1,
          margin: 0,
          padding: 0,
          border: '2px solid #1f2937',
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
