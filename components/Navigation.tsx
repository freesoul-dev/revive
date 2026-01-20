'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Handle hash navigation when coming from external pages
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [isHomePage])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleSectionClick = (id: string) => {
    if (isHomePage) {
      scrollToSection(id)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-50 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('landing')}
              className="text-2xl md:text-3xl font-serif text-black hover:text-black transition-colors"
            >
              rev'ive
            </button>
          ) : (
            <Link
              href="/"
              className="text-2xl md:text-3xl font-serif text-black hover:text-black transition-colors"
            >
              rev'ive
            </Link>
          )}
          <div className="flex items-center gap-4 md:gap-6">
            {isHomePage ? (
              <button
                onClick={() => handleSectionClick('offerings')}
                className="text-base md:text-lg text-black hover:text-black transition-colors"
              >
                Offerings
              </button>
            ) : (
              <Link
                href="/#offerings"
                className="text-base md:text-lg text-black hover:text-black transition-colors"
              >
                Offerings
              </Link>
            )}
            {isHomePage ? (
              <button
                onClick={() => handleSectionClick('about')}
                className="text-base md:text-lg text-black hover:text-black transition-colors"
              >
                About
              </button>
            ) : (
              <Link
                href="/#about"
                className="text-base md:text-lg text-black hover:text-black transition-colors"
              >
                About
              </Link>
            )}
            <Link
              href="/contact"
              className="text-base md:text-lg text-black hover:text-black transition-colors"
              //style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.3)' }}
            >
              Contact
            </Link>
            <Link
              href="/liberation-genealogy"
              className="text-base md:text-lg text-black hover:text-black transition-colors"
              //style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.3)' }}
            >
              LGP
            </Link>
            <Link
              href="/events"
              className="text-base md:text-lg text-black hover:text-black transition-colors"
              //style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.3)' }}
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
