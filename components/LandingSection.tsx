import Navigation from '@/components/Navigation'

export default function LandingSection() {
  return (
    <section 
      id="landing"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-50"
    >
      <Navigation />
      <div className="absolute inset-0 bg-gray-100"></div>
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-7xl md:text-9xl font-serif text-black mb-6 tracking-wide"
          // style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)' }}
        >
          rev'ive
        </h1>
        <h2 
          className="text-4xl md:text-6xl font-serif text-black mb-4"
          // style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)' }}
        >
          Weaving Roots.
        </h2>
        <p 
          className="text-2xl md:text-3xl text-black max-w-2xl mx-auto"
          // style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.2)' }}
        >
          Paths through celebration, gathering, and transmutation.
        </p>
      </div>
    </section>
  )
}

