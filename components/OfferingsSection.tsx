import ScrollReveal from './ScrollReveal'

export default function OfferingsSection() {
  return (
    <section id="offerings" className="section-padding bg-cream">
      <div className="container-max">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal text-center mb-6">
            Ceremonies, Communities, and Conversations for those Seeking Wholeness.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-lg md:text-xl text-charcoal text-center max-w-3xl mx-auto leading-relaxed">
            We believe that sustaining space for reverence, connection, and personal reclaimation is how we preserve our humanity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
