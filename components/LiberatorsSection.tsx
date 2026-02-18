'use client'

import { useState } from 'react'

// Liberator data structure
interface Liberator {
  id: string
  name: string
  photo: string
  bio: string
}

// Cohort data structure
interface Cohort {
  id: string
  name: string
  liberators: Liberator[]
}

// Cohort data - add more cohorts here
const cohorts: Cohort[] = [
  {
    id: 'cohort-1',
    name: '1st Cohort',
    liberators: [
      { id: '1',  name: 'Fawn',     photo: '/images/liberators/fawn.jpeg',    bio: 'Short bio text here...' },
      { id: '2',  name: 'Lois',     photo: '/images/liberators/lois.jpg',     bio: 'Short bio text here...' },
      { id: '3',  name: 'Germaine', photo: '/images/liberators/germaine.jpeg',bio: 'Short bio text here...' },
      { id: '4',  name: 'Imhotep',  photo: '/images/liberators/imhotep.jpeg', bio: 'Short bio text here...' },
      { id: '5',  name: 'James',    photo: '/images/liberators/james.png',    bio: 'Short bio text here...' },
      { id: '6',  name: 'Caprice',  photo: '/images/liberators/caprice.jpeg', bio: 'Short bio text here...' },
      { id: '7',  name: 'Tacumba',  photo: '/images/liberators/tacumba.JPG',  bio: 'Short bio text here...' },
      { id: '8',  name: 'Shirley',  photo: '/images/liberators/shirley.jpg',  bio: 'Short bio text here...' },
      { id: '9',  name: 'Yvonne',   photo: '/images/liberators/Yvonne.jpeg',  bio: 'Short bio text here...' },
      { id: '10', name: 'Daphne',   photo: '/images/liberators/daphne.jpg',   bio: 'Short bio text here...' },
      { id: '11', name: 'Onika',    photo: '/images/liberators/onika.jpg',    bio: 'Short bio text here...' },
      { id: '12', name: 'Margo',    photo: '/images/liberators/margo.JPG',    bio: 'Short bio text here...' },
      { id: '14', name: 'Chandler', photo: '/images/liberators/chandler.jpg', bio: 'Short bio text here...' },
      { id: '17', name: 'Autumn',   photo: '/images/liberators/autumn.jpg',   bio: 'Short bio text here...' },
      { id: '18', name: 'Marcela',  photo: '/images/liberators/marcela.JPEG', bio: 'Short bio text here...' },
    ]
  },
  // Add more cohorts here as needed
  // {
  //   id: 'cohort-2',
  //   name: 'Cohort II',
  //   liberators: [...]
  // },
]

export default function LiberatorsSection() {
  const [selectedCohort, setSelectedCohort] = useState<string>(cohorts[0]?.id || '')
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({})

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const currentCohort = cohorts.find(c => c.id === selectedCohort)
  const currentLiberators = currentCohort?.liberators || []

  return (
    <section className="section-padding bg-cream-light">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal text-center mb-8">
          Participants
        </h2>
        
        {/* Cohort Dropdown */}
        <div className="flex justify-center mb-12">
          <select
            value={selectedCohort}
            onChange={(e) => {
              setSelectedCohort(e.target.value)
              setExpandedBios({})
            }}
            className="px-6 py-3 text-lg border border-cream-dark rounded-md bg-cream text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
          >
            {cohorts.map((cohort) => (
              <option key={cohort.id} value={cohort.id}>
                {cohort.name}
              </option>
            ))}
          </select>
        </div>
        
        {currentLiberators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-charcoal italic">
              Participant profiles coming soon...
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentLiberators.map((liberator) => {
              const isExpanded = expandedBios[liberator.id] === true
              return (
                <div
                  key={liberator.id}
                  className="bg-cream-light rounded-lg shadow-sm border border-cream-dark overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 bg-cream-dark">
                    <img
                      src={liberator.photo}
                      alt={liberator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-serif text-charcoal pr-2">
                        {liberator.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleBio(liberator.id)
                        }}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cream-dark hover:bg-ochre/20 text-charcoal transition-colors"
                        aria-label={isExpanded ? 'Hide bio' : 'Show bio'}
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xl font-light">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="mt-3 max-h-48 overflow-y-auto">
                        <p className="text-charcoal leading-relaxed">
                          {liberator.bio}
                        </p>
                      </div>
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
