import Link from 'next/link'

// Communities image
const communitiesImage = '/images/communities/communities-1.png'

export default function CommunitiesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
              Communities
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Your constellation of care philosophy in action—helping groups weave their own silk ribbon hammocks of support. Building containers where people can show up authentically, practice accountability with grace, and hold each other's becoming.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-black mb-2">Who:</h3>
                <p className="text-black">Organizations, friend groups, families, spiritual communities, workplace teams</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">What:</h3>
                <p className="text-black">Facilitation, conflict mediation, relationship building, sacred agreements, accountability practices, apologies, do [less] harm</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">When:</h3>
                <p className="text-black">During transitions, conflicts, growth periods, or when wanting to deepen connection</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">Why:</h3>
                <p className="text-black">Because we heal in relationship and community is how we become our fullest selves</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="relative w-full">
            <img
              src={communitiesImage}
              alt="Communities"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

