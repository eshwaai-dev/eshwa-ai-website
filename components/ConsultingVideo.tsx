"use client"

import { useEffect, useRef } from "react"

export default function ConsultingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoId = 'consulting-video'

  useEffect(() => {
    const videoElement = videoRef.current;
    const container = containerRef.current;
    
    if (videoElement && container) {
      // Preload video before playing
      videoElement.preload = 'auto';
      videoElement.load();

      // Add smooth transition on loop
      videoElement.addEventListener('ended', () => {
        videoElement.style.opacity = '0';
        setTimeout(() => {
          videoElement.style.opacity = '1';
        }, 100);
      });

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

      // Create intersection observer
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(console.error);
          } else {
            videoElement.pause();
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );

      observer.observe(container);

      return () => {
        observer.unobserve(container);
      };
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover object-center"
        id={videoId}
      >
        <source src="/videos/consulting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
