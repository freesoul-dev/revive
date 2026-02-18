'use client'

import Link from 'next/link'

// Event data structure
interface Event {
  id: string
  title: string
  subtitle?: string
  about: string
  date: string     // ISO date string (YYYY-MM-DD) — start date
  endDate?: string // ISO date string (YYYY-MM-DD) — optional end date for ranges
  image: string
  link?: string
  addlink?: string
  addlinktext?: string
}

// Placeholder events - replace with real data
const events: Event[] = [

  {
    id: '1',
    title: 'A Place to Begin: Liberation Genealogy in Community',
    subtitle: 'Pittsburgh Racial Justice Summit',
    about: 'This 90-minute session offers a community-centered introduction to Liberation Genealogy for people of African descent, with particular care for Black participants whose family histories are shaped by enslavement, displacement, and record loss. Participants will learn how to begin genealogical inquiry using what they already know, engaging living relatives, and orienting to foundational research tools, alongside guided reflection and small-group sharing for support and connection. Ancestral veneration is honored through remembrance and acknowledgment; this is not a ritual space.',
    date: '2026-02-21',
    image: 'https://lh7-us.googleusercontent.com/BoTgJCbtujfMAxZZDWJc4FNe7j3liXpCA_5Eutgc6e3lPFqO4pyWjVGEj4g5eb7_plGFeaw3EgHeOPy5EMjdVsa9qBw-eUEJSqro0I7IdUymerDD3_8FKDZylPT7y7dkbY0fiaIdNv_3eOgb82wJ6A',
    addlink: 'https://www.eventbrite.com/e/28th-annual-pittsburgh-racial-justice-summit-tickets-1976990532903',
    addlinktext: 'Register'
  },
  {
    id: '2',
    title: 'Soul Spa 2026',
    about: 'Soul Spa is a curated summer weekend retreat, co-facilitated with extraordinary collaborators, devoted to restoration, depth, and elemental presence. We gather for spacious practice, sound, night skies, embodied reflection, and shared rest, while also welcoming the fire energy that calls us toward clarity, courage, and transformation.',
    date: '2026-07-17',
    endDate: '2026-07-19',
    image: '',
    link: 'https://dharmakayacenter.org/',
    addlink: 'https://dharmakayacenter.secure.retreat.guru/program/soul-spa-wellness-weekend-for-bipoc-leaders-4/?lang=en',
    addlinktext: 'Last Year\'s Event'
  },
]

// Parse an ISO date string (YYYY-MM-DD) as local midnight to avoid timezone shifts
const parseLocalDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const formatDate = (startString: string, endString?: string) => {
  const start = parseLocalDate(startString)
  const opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  if (!endString) {
    return start.toLocaleDateString('en-US', opts)
  }

  const end = parseLocalDate(endString)
  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = sameYear && start.getMonth() === end.getMonth()

  if (sameMonth) {
    // e.g. "July 17–20, 2026"
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}–${end.getDate()}, ${end.getFullYear()}`
  } else if (sameYear) {
    // e.g. "July 31 – August 3, 2026"
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, ${end.getFullYear()}`
  } else {
    // e.g. "December 30, 2025 – January 2, 2026"
    return `${start.toLocaleDateString('en-US', opts)} – ${end.toLocaleDateString('en-US', opts)}`
  }
}

export default function EventsSection() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Use endDate if present to determine past/upcoming; event is "past" only after its last day
  const upcomingEvents = events
    .filter(event => {
      const compareDate = parseLocalDate(event.endDate ?? event.date)
      return compareDate >= today
    })
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime())

  const pastEvents = events
    .filter(event => {
      const compareDate = parseLocalDate(event.endDate ?? event.date)
      return compareDate < today
    })
    .sort((a, b) => parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime())

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-cream-light rounded-lg shadow-sm border border-cream-dark overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-cream-dark">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <p className="text-sm text-charcoal-muted font-medium">
            {formatDate(event.date, event.endDate)}
          </p>
        </div>
        <h3 className="text-2xl font-serif text-charcoal mb-3">
          {event.title}
        </h3>
        <p className="text-md text-charcoal-muted font-medium">
          {event.subtitle}
        </p><br></br>
        <p className="text-charcoal leading-relaxed mb-4">
          {event.about}
        </p>
        {event.link && (
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-terracotta hover:text-terracotta-dark underline transition-colors"
          >
            Learn More ↗
          </Link>
        )}
        <br></br>
        {event.addlink && (
          <Link
            href={event.addlink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-terracotta hover:text-terracotta-dark underline transition-colors"
          >
            {event.addlinktext}↗
          </Link>
        )}
      </div>
    </div>
  )

  return (
    <section className="bg-cream">
      {/* Hero header with background image */}
      <div
        className="relative flex flex-col items-center justify-center py-32 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-cream/80"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">
            Events
          </h1>
          <h3 className="text-xl font-serif text-charcoal max-w-2xl mx-auto leading-relaxed">
            We gather in spaces of rest, inquiry, and relational practice.<br />
            Below are upcoming and past offerings. More are unfolding.
          </h3>
        </div>
      </div>

      <div className="section-padding">
      <div className="container-max">

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
                Upcoming
              </h2>
              <div className="flex-1 h-px bg-cream-dark"></div>
              <span className="text-sm text-charcoal-muted bg-cream-dark px-3 py-1 rounded-full">
                {upcomingEvents.length}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal">
                Past
              </h2>
              <div className="flex-1 h-px bg-cream-dark"></div>
              <span className="text-sm text-charcoal-muted bg-cream-dark px-3 py-1 rounded-full">
                {pastEvents.length}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="opacity-60">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Events Message */}
        {upcomingEvents.length === 0 && pastEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-charcoal italic">
              No events scheduled at this time. Check back soon!
            </p>
          </div>
        )}
      </div>
      </div>
    </section>
  )
}
