'use client'

import { useState } from 'react'
import Link from 'next/link'

// Collaborator data structure
interface Collaborator {
  id: string
  name: string
  photo: string
  bio?: string
  link?: string
}

// Placeholder collaborators
const collaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Autumn Redcross, PhD',
    photo: '/images/collaborators/autumn.jpg',
    bio: "Autumn's work in genealogy began in the early 2000s, documenting her own family history and teaching research and storytelling to students. She co-authored African Americans in Sewickley Valley, a photographic history of her local community. With the Liberation Genealogy Project, Autumn brings her experience in genealogical research and documentation, guiding participants as they explore their lineages and uncover ancestral connections. Her focus is on accurate research, historical context, and helping people navigate their family histories with care and clarity.",
  },
  {
    id: '2',
    name: 'Shirley Salmon-Davis, PsyD',
    photo: '/images/collaborators/shirley.png',
    link:'https://mudita.rest/'
  },
  {
    id: '3',
    name: 'Pastor Chad Collins & Johanna Collins, Valley View Church',
    photo: '/images/collaborators/chad.png',
    bio: "Rev. Chad Collins was raised in what is now called Pittsburgh, Pennsylvania. He holds a degree in Africana Studies from the University of Pittsburgh and a Master of Divinity from Pittsburgh Theological Seminary. Chad has served as pastor of Valley View Presbyterian Church in the Garfield and East Liberty neighborhoods since 2005. He and his wife, Johanna—who leads the church’s youth ministry—share a deep commitment to faith, community, and justice. Together, they are known for their joy, openness, and long-standing care for young people and families. Chad’s work has also been shaped by racial justice efforts and global solidarity, including time spent in Palestine and leadership with national faith-based justice organizations.",
    link:'https://www.facebook.com/ValleyView412/'
  }
]

export default function AboutSection() {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({})

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-12">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          <div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/about-image.JPG"
                alt="About"
                className="w-full h-auto max-w-md mx-auto object-contain rounded-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-black mb-4">yvette shipman (rev. ivé)</h3>
            <h4 className="text-xl font-serif text-black mb-4">Founder</h4>
            <p className="text-lg text-black leading-relaxed">
            Reverend yvette shipman—also known as Rev. ivé and dear one—is an interspiritual minister, facilitator, and founder of Rev ivé, a practice devoted to collective healing and restorative connection. She holds a B.A. in Television and Video Production and an M.A. in Social and Public Policy with a focus on conflict mediation and peace studies. Her work has been shaped by decades of global experience, including consulting with the United Nations Foundation’s Peace on Purpose program.            <br></br><br></br>
            yvette is the founder and steward of the Liberation Genealogy Project, an ancestral practice of re-membering that weaves ritual, inquiry, and accountability to tend the psycho-somatic and epigenetic legacies we carry. Her work centers people of African descent while remaining open to all willing to engage the deep labor of care, truth, and humanity-preserving relationship.
            <br></br><br></br>
            She is currently completing Reiki certification, having studied through the Godmothers of MINKA brooklyn, and brings this lineage of care into her work. yvette also serves as a Program Officer at Opportunity Fund.            </p>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
        {/* Collaborators Sub-section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif text-black text-center mb-8">
            Collaborators
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((collaborator) => {
              const isExpanded = expandedBios[collaborator.id] === true
              return (
                <div
                  key={collaborator.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 bg-gray-200">
                    <img
                      src={collaborator.photo}
                      alt={collaborator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-serif text-black pr-2">
                        {collaborator.name} 
                      </h4>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleBio(collaborator.id)
                        }}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-black transition-colors"
                        aria-label={isExpanded ? 'Hide bio' : 'Show bio'}
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xl font-light">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="mt-3 max-h-64 overflow-y-auto">
                        {collaborator.bio && (
                          <p className="text-black leading-relaxed">
                            {collaborator.bio}
                          </p>
                        )}
                        {collaborator.link && (
                          <p className="text-black hover:text-black underline transition-colors mt-3">
                            <Link href={collaborator.link} target="_blank" rel="noopener noreferrer">
                              ↗ 
                            </Link>
                          </p>
                        )}
                      </div> 
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-black leading-relaxed">
              Interested in joining Rev'Ive as a fellow or collaborator?{' '}
              <Link
                href="/contact"
                className="text-black hover:text-black underline transition-colors"
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