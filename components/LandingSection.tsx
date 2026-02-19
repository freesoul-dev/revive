'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

const videos = [
  'https://990-agency.b-cdn.net/flowers_water.mp4',
  'https://990-agency.b-cdn.net/woman_walking.mp4',
  'https://990-agency.b-cdn.net/woman_water.mp4',
]

const VIDEO_INDEX_KEY = 'revive_video_index'

export default function LandingSection() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position on reload,
    // which was causing the page to jump past the landing section.
    history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    // On each page load, read the current index, use it, then advance for next reload
    const stored = parseInt(localStorage.getItem(VIDEO_INDEX_KEY) || '0', 10)
    const index = isNaN(stored) ? 0 : stored % videos.length
    localStorage.setItem(VIDEO_INDEX_KEY, String((index + 1) % videos.length))
    setVideoSrc(videos[index])
  }, [])

  return (
    <section
      id="landing"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <Navigation />

      {/* Video background — fades in once ready; static image shows underneath while loading */}
      {videoSrc && (
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Cream overlay — sits above the video for text legibility */}
      <div className="absolute inset-0 bg-cream/45"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-serif text-charcoal mb-6 tracking-wide">
          rev&apos;ive
        </h1>
        <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4">
          Weaving Roots.
        </h2>
        <p className="text-2xl md:text-3xl text-charcoal max-w-2xl mx-auto">
          Paths through celebration, gathering, and transmutation.
        </p>
      </div>
    </section>
  )
}
