import Link from 'next/link'

// Ceremonies background image
const ceremoniesBackground = '/images/ceremonies/ceremonies-1.jpg'

export default function CeremoniesSection() {
  return (
    <section 
      className="section-padding relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${ceremoniesBackground}')`,
      }}
    >
      <div className="absolute inset-0 bg-earth-900/50"></div>
      <div className="container-max relative z-10">
        <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-50 mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              Ceremonies
            </h2>
            <p className="text-lg text-earth-100 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
              Sacred moments that mark transitions, honor relationships, and create intentional space for what matters most. Not just weddings and funerals, but the everyday rituals that shape us—commitment ceremonies to ourselves, agreements between friends, marking seasons of grief or joy, blessing new beginnings.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Who:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Anyone ready to mark a transition, honor a relationship, or create sacred space</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>What:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Self-commitment ceremonies, relationship agreements, grief rituals, blessing ceremonies, seasonal transitions</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>When:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Life transitions, relationship milestones, healing moments, new beginnings</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Why:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Because our most important moments deserve to be held with intention and reverence</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-white bg-terracotta-600 border border-terracotta-600 rounded-md hover:bg-terracotta-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

