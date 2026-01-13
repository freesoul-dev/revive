import LandingSection from '@/components/LandingSection'
import OfferingsSection from '@/components/OfferingsSection'
import CeremoniesSection from '@/components/CeremoniesSection'
import ConversationsSection from '@/components/ConversationsSection'
import CommunitiesSection from '@/components/CommunitiesSection'
import PartnersSection from '@/components/PartnersSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingSection />
      <OfferingsSection />
      <CeremoniesSection />
      <ConversationsSection />
      <CommunitiesSection />
      <PartnersSection />
      <AboutSection />
      <Footer />
      <BackToTop />
    </main>
  )
}

