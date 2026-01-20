'use client'

import Link from 'next/link'

// Event data structure
interface Event {
  id: string
  title: string
  about: string
  date: string // ISO date string for comparison
  image: string
  link?: string
}

// Placeholder events - replace with real data
const events: Event[] = [

  {
    id: '1',
    title: 'Liberation Genealogy Workshop',
    about: 'Join us for an exploration of ancestral connections and family history.',
    date: '2026-06-15',
    image: '/images/events/event-1.jpg',
    link: 'https://example.com/event1'
  },
  {
    id: '2',
    title: 'Community Healing Circle',
    about: 'A space for collective healing and restorative connection.',
    date: '2025-05-20',
    image: '/images/events/event-2.jpg'
  },
  {
    id: '3',
    title: 'Spiritual Companionship Workshop',
    about: 'Learn the art of creating space for truth and spiritual growth.',
    date: '2024-12-10',
    image: '/images/events/event-3.jpg',
    link: 'https://example.com/event3'
  },
  {
    id: '4',
    title: 'Ancestor Reverence Ceremony',
    about: 'Honoring our ancestors of blood and spirit through ritual and remembrance.',
    date: '2024-11-05',
    image: '/images/events/event-4.jpg'
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
      </div>
    </div>
  )

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl font-serif text-black text-center mb-16">
          Events
        </h1>

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
