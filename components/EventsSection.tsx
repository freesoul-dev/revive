'use client'

import Link from 'next/link'

// Event data structure
interface Event {
  id: string
  title: string
  subtitle?: string
  about: string
  date: string // ISO date string for comparison
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
    image: '',
    link: 'https://dharmakayacenter.org/',
    addlink: 'https://dharmakayacenter.secure.retreat.guru/program/soul-spa-wellness-weekend-for-bipoc-leaders-4/?lang=en',
    addlinktext: 'Last Year\'s Event'
  },
]

export default function EventsSection() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate >= today
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const pastEvents = events
    .filter(event => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate < today
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <p className="text-sm text-gray-600 font-medium">
            {formatDate(event.date)}
          </p>
        </div>
        <h3 className="text-2xl font-serif text-black mb-3">
          {event.title}
        </h3>
        <p className="text-md text-gray-600 font-medium">
          {event.subtitle}
        </p><br></br>
        <p className="text-black leading-relaxed mb-4">
          {event.about}
        </p>
        {event.link && (
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black hover:text-black underline transition-colors"
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
            className="inline-block text-black hover:text-black underline transition-colors"
          >
            {event.addlinktext}↗
          </Link>
        )}
      </div>
    </div>
  )

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
          Events
        </h1>
        <h3 className="text-xl md:text-xl font-serif text-black text-center mb-16">
        We gather in spaces of rest, inquiry, and relational practice. <br></br>
        Below are upcoming and past offerings. More are unfolding.
        </h3>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-black">
                Upcoming
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
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
              <h2 className="text-3xl md:text-4xl font-serif text-black">
                Past
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
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
            <p className="text-lg text-black italic">
              No events scheduled at this time. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
