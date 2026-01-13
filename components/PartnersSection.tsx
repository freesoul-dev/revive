// Partner data structure
interface Partner {
  id: string
  name: string
  logo: string
  url: string
}

// Partner data
const partners: Partner[] = [
  {
    id: '1',
    name: 'Opportunity Fund',
    logo: '/images/partners/opportunity-fund.png',
    url: 'https://theopportunityfund.org',
  },
  {
    id: '2',
    name: 'Pittsburgh Cultural Trust',
    logo: '/images/partners/Pittsburgh-Cultural-Trust.jpg',
    url: 'https://trustarts.org',
  },
  {
    id: '3',
    name: 'The Pittsburgh Foundation',
    logo: '/images/partners/pitt_foundatn.png',
    url: 'https://pittsburghfoundation.org',
  },
]

export default function PartnersSection() {
  return (
    <section className="section-padding bg-sage-100">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-8">
          Partners
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-lg text-earth-700 text-center leading-relaxed">
            We are grateful for the partnerships that enable our work and amplify our impact.
          </p>
          <p className="text-lg text-earth-700 text-center leading-relaxed">
            These long-standing collaborators share our commitment to creating spaces for healing, connection, and transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-opacity hover:opacity-80"
              aria-label={`Visit ${partner.name}`}
            >
              <div className="relative w-full h-32 bg-white rounded-lg shadow-sm border border-earth-200 flex items-center justify-center p-4 group-hover:shadow-md transition-shadow">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

