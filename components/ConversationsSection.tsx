import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

// Conversations image
const conversationsImage = '/images/conversations/conversations-2.jpg'

const cards = [
  {
    label: 'Who',
    text: 'Seeking spiritual companionship, folks navigating transitions, those who want to deepen in relationship with themselves, folks called to explore ancestry or healing journey',
  },
  {
    label: 'What',
    text: 'One-on-one\, Liberation Genealogy sessions, accountability and grace work, herbal tea ceremonies, support during hard transitions, help find your way back to you',
  },
  {
    label: 'When',
    text: 'During major life transitions, spiritual awakening moments, times of loss or grief, feeling disconnected from self, while on healing journey, or self exploration',
  },
  {
    label: 'Why',
    text: "We are the experts of our own lives but sometimes need a spiritual companion to help us remember who we are, honor where we've come from, and step into who we're becoming",
  },
]

export default function ConversationsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Image — slides in from left */}
          <ScrollReveal direction="left" delay={150} className="relative w-full order-2 md:order-1">
            <img
              src={conversationsImage}
              alt="Conversations"
              className="w-full h-auto object-contain rounded-lg"
            />
          </ScrollReveal>

          {/* Text column — slides in from right */}
          <div className="order-1 md:order-2">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Conversations
              </h2>
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                The art of creating space where one&apos;s own truth can be spoken and respected, even if not completely heard. One-on-one spiritual companionship that helps people find their way back to themselves or forward into who they&apos;re becoming.
              </p>
            </ScrollReveal>

            {/* 2×2 card grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cards.map((card, i) => (
                <ScrollReveal key={card.label} direction="up" delay={100 + i * 80}>
                  <div className="bg-cream-light rounded-lg border border-cream-dark p-4 h-full">
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
                Connect
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
