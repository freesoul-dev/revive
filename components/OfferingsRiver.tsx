'use client'

import { useEffect, useRef } from 'react'
import CeremoniesSection from './CeremoniesSection'
import ConversationsSection from './ConversationsSection'
import CommunitiesSection from './CommunitiesSection'

// Five strands that genuinely cross each other to create a woven/braided effect.
// viewBox 0 0 100 300.
// Each strand passes through two crossing points (~y=100 and ~y=200) where they
// swap sides, so adjacent strands change positions and visibly interweave.
const strands: {
  d: string
  stroke: string
  strokeWidth: number
  strokeOpacity: number
  delay: number // scroll-progress offset so strands draw at slightly different rates
}[] = [
  {
    // Strand A — very thick, faint. Starts far-left, sweeps hard right, returns left.
    d: 'M 12 0 C 12 60, 74 90, 74 150 C 74 210, 18 240, 18 300',
    stroke: '#828E77',
    strokeWidth: 55,
    strokeOpacity: 0.2,
    delay: 0.2,
  },
//   {
//     // Strand B — thick. Starts centre-left, goes right then far left then centre-right.
//     d: 'M 30 0 C 30 40, 62 60, 62 100 C 62 140, 14 165, 14 200 C 14 240, 58 265, 58 300',
//     stroke: '#C7943D',
//     strokeWidth: 7,
//     strokeOpacity: 0.07,
//     delay: 0.5,
//   },
//   {
//     // Strand C — medium. Starts centre, dives left then sweeps right then settles centre.
//     d: 'M 48 0 C 48 40, 16 60, 16 100 C 16 140, 78 165, 78 200 C 78 240, 40 265, 40 300',
//     stroke: '#A35638',
//     strokeWidth: 8,
//     strokeOpacity: 0.04,
//     delay: 0.3,
//   },
//   {
//     // Strand D — thin. Starts centre-right, goes left then centre then right.
//     d: 'M 64 0 C 64 40, 36 60, 36 100 C 36 140, 58 165, 58 200 C 58 240, 76 265, 76 300',
//     stroke: '#C7943D',
//     strokeWidth: 14,
//     strokeOpacity: 0.09,
//     delay: 0.12,
//   },
//   {
//     // Strand E — thinnest, sharpest. Starts far-right, sweeps left, ends right.
//     d: 'M 82 0 C 82 40, 54 60, 54 100 C 54 140, 28 165, 28 200 C 28 240, 64 265, 64 300',
//     stroke: '#C7943D',
//     strokeWidth: 9,
//     strokeOpacity: 0.03,
//     delay: 0.0,
//   },
]

export default function OfferingsRiver() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])

  useEffect(() => {
    const svgPaths = pathRefs.current.filter(Boolean) as SVGPathElement[]
    if (svgPaths.length === 0) return

    const lengths = svgPaths.map((p) => {
      const len = p.getTotalLength()
      p.style.strokeDasharray = `${len}`
      p.style.strokeDashoffset = `${len}`
      return len
    })

    // How far ahead of the user's scroll position the lines are drawn.
    // 0 = in sync with scroll, 0.3 = lines are ~30% drawn before the section is in view.
    const SCROLL_LEAD = 0.30

    const update = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight

      const base = (vh - rect.top) / (rect.height + vh)

      svgPaths.forEach((p, i) => {
        const progress = Math.min(Math.max(base + SCROLL_LEAD - strands[i].delay, 0), 1)
        p.style.strokeDashoffset = `${lengths[i] * (1 - progress)}`
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 100 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {strands.map((s, i) => (
          <path
            key={i}
            ref={(el) => { pathRefs.current[i] = el }}
            d={s.d}
            fill="none"
            stroke={s.stroke}
            strokeWidth={s.strokeWidth}
            strokeOpacity={s.strokeOpacity}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>

      <CeremoniesSection />
      <ConversationsSection />
      <CommunitiesSection />
    </div>
  )
}
