'use client'

import { useState } from 'react'
import Link from 'next/link'

// Collaborator data structure
interface Collaborator {
  id: string
  name: string
  photo: string
  bio: string
}

// Placeholder collaborators
const collaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Pastor Chad Collins & Johanna Collins, Valley View Church',
    photo: '/images/collaborators/chad.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: '2',
    name: 'Shirley Salmon-Davis, PsyD',
    photo: '/images/collaborators/shirley.png',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    name: 'Autumn Redcross, PhD',
    photo: '/images/collaborators/autumn.jpg',
    bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
]

export default function AboutSection() {
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
    <section id="about" className="section-padding bg-terracotta-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-12">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/about-image.JPG"
                alt="About"
                className="w-full h-auto max-w-md mx-auto object-contain"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-earth-800 mb-4">Yvette Shipman (Rev. Ivé)</h3>
            <h4 className="text-xl font-serif text-earth-700 mb-4">Founder</h4>
            <p className="text-lg text-earth-700 leading-relaxed">
            Reverend Yvette Shipman, also known as Rev. Ivé and 'dear one,' is an internationally recognized facilitator, interspiritual minister, and the founder of Rev 'Ivé, a practice dedicated to collective healing and restorative connection. With an M.A. in Social and Public Policy specializing in conflict mediation and peace studies, Reverend Shipman integrates decades of global experience, including consulting for the United Nations Foundation's Peace on Purpose program, into her transformative work.
            <br></br><br></br>
            Yvette founded and leads the Liberation Genealogy Project, an ancestral methodology of "re-membering."
            By weaving together ritual and radical accountability, Reverend Shipman works to unearth meanings from our psycho-somatic and epigenetic legacies. Her work centers the experiences of people of African descent while welcoming all committed to the deep labor of communal care and humanity-preserving relationship.
            <br></br><br></br>
            Yvette is also a Program Officer at Opportunity Fund.
            </p>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
        {/* Collaborators Sub-section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif text-earth-800 text-center mb-8">
            Collaborators
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((collaborator) => {
              const isExpanded = expandedBios.has(collaborator.id)
              return (
                <div
                  key={collaborator.id}
                  className="bg-white rounded-lg shadow-sm border border-earth-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 bg-earth-200">
                    <img
                      src={collaborator.photo}
                      alt={collaborator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-serif text-earth-800 pr-2">
                        {collaborator.name}
                      </h4>
                      <button
                        onClick={() => toggleBio(collaborator.id)}
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
                        {collaborator.bio}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-earth-700 leading-relaxed">
              Interested in joining Rev'Ive as a fellow or collaborator?{' '}
              <Link
                href="/contact"
                className="text-terracotta-700 hover:text-terracotta-800 underline transition-colors"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

