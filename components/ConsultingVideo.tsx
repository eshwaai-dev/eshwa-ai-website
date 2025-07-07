"use client"

import { useEffect, useRef } from "react"

export default function ConsultingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoId = 'consulting-video'

  useEffect(() => {
    const videoElement = videoRef.current
    const container = containerRef.current
    
    if (videoElement && container) {
      // Preload video before playing
      videoElement.preload = 'auto'
      videoElement.load()

      // Add smooth transition on loop
      videoElement.addEventListener('ended', () => {
        videoElement.style.opacity = '0.5'
        setTimeout(() => {
          videoElement.style.opacity = '1'
        }, 250)
      })

      // Add error handling
      const handleError = (e: Event) => {
        console.error('Video error:', e)
        const container = videoElement.parentElement
        if (container) {
          const fallbackImg = document.createElement('img')
          fallbackImg.src = '/placeholder.jpg'
          fallbackImg.className = 'w-full h-full object-cover object-center'
          container.appendChild(fallbackImg)
        }
      }

      // Add toggle play/pause functionality
      const handleToggle = () => {
        if (videoElement.paused) {
          videoElement.play().catch(() => {
            console.log('Video play failed')
          })
        } else {
          videoElement.pause()
        }
      }

      // Add autoplay handlers with fallback
      const handleAutoplay = () => {
        videoElement.play().catch(() => {
          console.log('Autoplay failed, trying again...')
          setTimeout(() => {
            videoElement.play().catch(() => {
              console.log('Autoplay failed after retry')
            })
          }, 1000)
        })
      }

      // Add event listeners
      videoElement.addEventListener('error', handleError)
      videoElement.addEventListener('ended', () => {
        videoElement.style.opacity = '0.5'
        setTimeout(() => {
          videoElement.style.opacity = '1'
        }, 250)
      })
      videoElement.addEventListener('loadeddata', handleAutoplay)
      videoElement.addEventListener('canplay', handleAutoplay)
      videoElement.addEventListener('canplaythrough', handleAutoplay)
      videoElement.addEventListener('loadedmetadata', handleAutoplay)

      // Try to play immediately
      videoElement.play().catch(() => {
        console.log('Initial play attempt failed')
      })

      // Add click handler to toggle play/pause
      videoElement.addEventListener('click', (e) => {
        e.stopPropagation()
        handleToggle()
      })

      // Create intersection observer
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              console.log('Video play failed on intersection')
            })
          } else {
            videoElement.pause()
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(container)

      return () => {
        observer.unobserve(container)
        videoElement.removeEventListener('error', handleError)
        videoElement.removeEventListener('ended', () => {
          videoElement.style.opacity = '0.5'
          setTimeout(() => {
            videoElement.style.opacity = '1'
          }, 250)
        })
        videoElement.removeEventListener('loadeddata', handleAutoplay)
        videoElement.removeEventListener('canplay', handleAutoplay)
        videoElement.removeEventListener('canplaythrough', handleAutoplay)
        videoElement.removeEventListener('loadedmetadata', handleAutoplay)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
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
        <source src="/videos/consulting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
