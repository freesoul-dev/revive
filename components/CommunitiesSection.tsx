import Link from 'next/link'

// Communities background image
const communitiesBackground = '/images/communities/communities-1.png'

export default function CommunitiesSection() {
  return (
    <section 
      className="section-padding relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${communitiesBackground}')`,
      }}
    >
      <div className="absolute inset-0 bg-earth-900/50"></div>
      <div className="container-max relative z-10">
        <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-50 mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              Communities
            </h2>
            <p className="text-lg text-earth-100 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
              Your constellation of care philosophy in action—helping groups weave their own silk ribbon hammocks of support. Building containers where people can show up authentically, practice accountability with grace, and hold each other's becoming.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Who:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Organizations, friend groups, families, spiritual communities, workplace teams</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>What:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Facilitation, conflict mediation, relationship building, sacred agreements, accountability practices, apologies, do [less] harm</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>When:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>During transitions, conflicts, growth periods, or when wanting to deepen connection</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Why:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Because we heal in relationship and community is how we become our fullest selves</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-white bg-terracotta-600 border border-terracotta-600 rounded-md hover:bg-terracotta-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

