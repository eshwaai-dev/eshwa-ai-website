"use client"

import { useRef, useEffect } from "react"

export default function TrainingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener("error", () => {
      console.error("Error loading training video")
    })

    video.addEventListener("loadeddata", () => {
      video.play().catch(console.error)
    })

    video.addEventListener("playing", () => {
      video.style.opacity = "1"
    })

    video.addEventListener("ended", () => {
      video.style.opacity = "0"
      setTimeout(() => {
        video.style.opacity = "1"
      }, 100)
    })

    return () => {
      video?.removeEventListener("error", () => {})
      video?.removeEventListener("loadeddata", () => {})
      video?.removeEventListener("play", () => {})
      video?.removeEventListener("loop", () => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover object-center"
      id="training-video"
    >
      <source src="/videos/training.mp4" type="video/mp4" />
      <img
        src="/placeholder.jpg"
        alt="Training"
        style={{ display: "none" }}
      />
    </video>
  )
}
