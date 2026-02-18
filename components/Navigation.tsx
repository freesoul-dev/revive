'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
    // Handle hash navigation when coming from an external page (e.g. /contact → /#offerings).
    // After scrolling we clear the hash from the URL so that a subsequent reload
    // does NOT re-trigger the jump and always starts at the top.
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        // Remove the hash so reloads always land at the top
        history.replaceState(null, '', '/')
      }, 150)
    }
  }, [isHomePage])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  const handleSectionClick = (id: string) => {
    if (isHomePage) {
      scrollToSection(id)
    } else {
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { label: 'Home',      href: '/',           sectionId: 'landing'   },
    { label: 'Offerings', href: '/#offerings', sectionId: 'offerings' },
    { label: 'About',     href: '/#about',     sectionId: 'about'     },
    { label: 'Contact',   href: '/contact',    sectionId: null        },
    { label: 'LGP',       href: '/liberation-genealogy', sectionId: null },
    { label: 'Events',    href: '/events',     sectionId: null        },
  ]

  const scrolledOrOpen = isScrolled || menuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolledOrOpen ? 'bg-cream shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Home link */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('landing')}
              className="text-2xl md:text-3xl font-serif text-charcoal hover:text-terracotta transition-colors"
            >
              rev&apos;ive
            </button>
          ) : (
            <Link
              href="/"
              className="text-2xl md:text-3xl font-serif text-charcoal hover:text-terracotta transition-colors"
            >
              rev&apos;ive
            </Link>
          )}

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.sectionId && isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.sectionId!)}
                  className="text-base md:text-lg text-charcoal hover:text-terracotta transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base md:text-lg text-charcoal hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-cream-dark">
            {navLinks.map((link) =>
              link.sectionId && isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => handleSectionClick(link.sectionId!)}
                  className="text-lg text-charcoal text-left px-1 py-1 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-charcoal px-1 py-1 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
