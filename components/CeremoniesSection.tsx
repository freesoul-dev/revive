import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

// Ceremonies image
const ceremoniesImage = '/images/ceremonies/ceremonies-1.jpg'

const cards = [
  {
    label: 'Who',
    text: 'Anyone ready to mark a transition, honor a relationship, or create sacred space',
  },
  {
    label: 'What',
    text: 'Self-commitment ceremonies, relationship agreements, grief rituals, blessing ceremonies, seasonal transitions',
  },
  {
    label: 'When',
    text: 'Life transitions, relationship milestones, healing moments, new beginnings',
  },
  {
    label: 'Why',
    text: 'Because our most important moments deserve to be held with intention and reverence',
  },
]

export default function CeremoniesSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Text column */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Ceremonies
              </h2>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                Sacred moments that mark transitions, honor relationships, and create intentional space for what matters most. Not just weddings and funerals, but the everyday rituals that shape us—commitment ceremonies to ourselves, agreements between friends, marking seasons of grief or joy, blessing new beginnings.
              </p>
            </ScrollReveal>

            {/* 2×2 card grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cards.map((card, i) => (
                <ScrollReveal key={card.label} direction="up" delay={100 + i * 80}>
                  <div className="bg-cream rounded-lg border border-cream-dark p-4 h-full">
                    <h3 className="text-sm md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-2">
                      {card.label}
                    </h3>
                    <p className="text-sm md:text-lg text-charcoal leading-relaxed">{card.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={420}>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-terracotta border border-terracotta rounded-md hover:bg-terracotta hover:text-cream transition-colors"
              >
                Learn More
              </Link>
            </ScrollReveal>
          </div>

          {/* Image — slides in from right */}
          <ScrollReveal direction="right" delay={150}>
            <div className="relative w-full">
              <img
                src={ceremoniesImage}
                alt="Ceremonies"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
