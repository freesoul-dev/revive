import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

// Communities image
const communitiesImage = '/images/communities/communities-1.png'

const cards = [
  {
    label: 'Who',
    text: 'Organizations, friend groups, families, spiritual communities, workplace teams',
  },
  {
    label: 'What',
    text: 'Facilitation, conflict mediation, relationship building, sacred agreements, accountability practices, apologies, do [less] harm',
  },
  {
    label: 'When',
    text: 'During transitions, conflicts, growth periods, or when wanting to deepen connection',
  },
  {
    label: 'Why',
    text: 'Because we heal in relationship and community is how we become our fullest selves',
  },
]

export default function CommunitiesSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Text column */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Communities
              </h2>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                Your constellation of care philosophy in action—helping groups weave their own silk ribbon hammocks of support. Building containers where people can show up authentically, practice accountability with grace, and hold each other&apos;s becoming.
              </p>
            </ScrollReveal>

            {/* 2×2 card grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cards.map((card, i) => (
                <ScrollReveal key={card.label} direction="up" delay={100 + i * 80}>
                  <div className="bg-cream rounded-lg border border-cream-dark p-4 h-full">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-terracotta mb-2">
                      {card.label}
                    </h3>
                    <p className="text-lg text-charcoal leading-relaxed">{card.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={420}>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-terracotta border border-terracotta rounded-md hover:bg-terracotta hover:text-cream transition-colors"
              >
                Get in Touch
              </Link>
            </ScrollReveal>
          </div>

          {/* Image — slides in from right */}
          <ScrollReveal direction="right" delay={150}>
            <div className="relative w-full">
              <img
                src={communitiesImage}
                alt="Communities"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
