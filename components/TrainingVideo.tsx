"use client"

import { useRef, useEffect } from "react"

export default function TrainingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoId = 'training-video'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Add error handling
    const handleError = (e: Event) => {
      console.error('Video error:', e)
      const container = video.parentElement
      if (container) {
        const fallbackImg = document.createElement('img')
        fallbackImg.src = '/placeholder.jpg'
        fallbackImg.className = 'w-full h-full object-cover object-center'
        container.appendChild(fallbackImg)
      }
    }

    // Add smooth transition on loop
    const handleLoop = () => {
      video.style.opacity = '0.5'
      setTimeout(() => {
        video.style.opacity = '1'
      }, 250)
    }

    // Add toggle play/pause functionality
    const handleToggle = () => {
      if (video.paused) {
        video.play().catch(() => {
          console.log('Video play failed')
        })
      } else {
        video.pause()
      }
    }

    // Add autoplay handlers with fallback
    const handleAutoplay = () => {
      video.play().catch(() => {
        console.log('Autoplay failed, trying again...')
        setTimeout(() => {
          video.play().catch(() => {
            console.log('Autoplay failed after retry')
          })
        }, 1000)
      })
    }

    // Add event listeners
    video.addEventListener('error', handleError)
    video.addEventListener('ended', handleLoop)
    video.addEventListener('loadeddata', handleAutoplay)
    video.addEventListener('canplay', handleAutoplay)
    video.addEventListener('canplaythrough', handleAutoplay)
    video.addEventListener('loadedmetadata', handleAutoplay)

    // Try to play immediately
    video.play().catch(() => {
      console.log('Initial play attempt failed')
    })

    // Add click handler to toggle play/pause
    video.addEventListener('click', (e) => {
      e.stopPropagation()
      handleToggle()
    })

    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('ended', handleLoop)
      video.removeEventListener('loadeddata', handleAutoplay)
      video.removeEventListener('canplay', handleAutoplay)
      video.removeEventListener('canplaythrough', handleAutoplay)
      video.removeEventListener('loadedmetadata', handleAutoplay)
      video.removeEventListener('click', handleToggle)
    }
  }, [])

  return (
    <div 
      className="relative w-full h-full cursor-pointer" 
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        loop
        className="w-full h-full object-cover object-center"
        id={videoId}
        style={{
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source src="/videos/Abstract DNA Helix Animation.mp4" type="video/mp4" />
        <img
          src="/placeholder.jpg"
          alt="Training Video"
          className="w-full h-full object-cover object-center"
        />
      </video>
    </div>
  )
}
