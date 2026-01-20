import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsSection />
      <Footer />
    </main>
  )
}
