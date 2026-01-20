import Link from 'next/link'

// Ceremonies image
const ceremoniesImage = '/images/ceremonies/ceremonies-1.jpg'

export default function CeremoniesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
              Ceremonies
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Sacred moments that mark transitions, honor relationships, and create intentional space for what matters most. Not just weddings and funerals, but the everyday rituals that shape us—commitment ceremonies to ourselves, agreements between friends, marking seasons of grief or joy, blessing new beginnings.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-black mb-2">Who:</h3>
                <p className="text-black">Anyone ready to mark a transition, honor a relationship, or create sacred space</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">What:</h3>
                <p className="text-black">Self-commitment ceremonies, relationship agreements, grief rituals, blessing ceremonies, seasonal transitions</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">When:</h3>
                <p className="text-black">Life transitions, relationship milestones, healing moments, new beginnings</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">Why:</h3>
                <p className="text-black">Because our most important moments deserve to be held with intention and reverence</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative w-full">
            <img
              src={ceremoniesImage}
              alt="Ceremonies"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

