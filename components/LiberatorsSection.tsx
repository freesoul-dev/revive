'use client'

import { useState } from 'react'

// Liberator data structure
interface Liberator {
  id: string
  name: string
  photo: string
  bio: string
}

// TODO: Add liberator data here
// Example structure:
const liberators: Liberator[] = [
  {
    id: '1',
    name: 'Fawn',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '2',
    name: 'Lois',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '3',
    name: 'Germaine',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '4',
    name: 'Imhotep',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '5',
    name: 'James | Facilitator',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '6',
    name: 'Caprice',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '7',
    name: 'Tacumba',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '8',
    name: 'Shirley | Facilitator',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '9',
    name: 'Yvonne',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '10',
    name: 'Daphne',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '11',
    name: 'Onika',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '12',
    name: 'Margo',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '13',
    name: 'Akia',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '14',
    name: 'Chandler',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '15',
    name: 'An-ra',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '16',
    name: 'Nykké',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '17',
    name: 'Autumn | Facilitator',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '18',
    name: 'Marcela',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
  {
    id: '19',
    name: 'Yvette | Creator & Facilitator',
    photo: '/images/liberators/liberator-1.jpg',
    bio: 'Short bio text here...'
  },
]

export default function LiberatorsSection() {
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set())

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="section-padding bg-sage-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-12">
          Participants
        </h2>
        
        {liberators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-earth-700 italic">
              Liberator profiles coming soon...
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liberators.map((liberator) => {
              const isExpanded = expandedBios.has(liberator.id)
              return (
                <div
                  key={liberator.id}
                  className="bg-white rounded-lg shadow-sm border border-earth-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 bg-earth-200">
                    <img
                      src={liberator.photo}
                      alt={liberator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-serif text-earth-800 pr-2">
                        {liberator.name}
                      </h3>
                      <button
                        onClick={() => toggleBio(liberator.id)}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-terracotta-100 hover:bg-terracotta-200 text-terracotta-700 transition-colors"
                        aria-label={isExpanded ? 'Hide bio' : 'Show bio'}
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xl font-light">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {isExpanded && (
                      <p className="text-earth-700 leading-relaxed mt-3">
                        {liberator.bio}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

