'use client'

import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'left' | 'right'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number   // milliseconds — applied on enter; exit is always instant
  threshold?: number // 0–1, how much of the element must be visible to trigger
}

// Maps each direction to its hidden + visible Tailwind classes.
// All classes are spelled out as full strings so Tailwind JIT can detect them.
const variants: Record<Direction, { hidden: string; visible: string }> = {
  up:    { hidden: 'opacity-0 translate-y-10', visible: 'opacity-100 translate-y-0' },
  left:  { hidden: 'opacity-0 -translate-x-10', visible: 'opacity-100 translate-x-0' },
  right: { hidden: 'opacity-0 translate-x-10',  visible: 'opacity-100 translate-x-0' },
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate in after optional delay
          timer = setTimeout(() => setVisible(true), delay)
        } else {
          // Animate out immediately when leaving viewport
          clearTimeout(timer)
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [delay, threshold])

  const { hidden, visible: vis } = variants[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? vis : hidden} ${className}`}
    >
      {children}
    </div>
  )
}
