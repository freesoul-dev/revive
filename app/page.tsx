import LandingSection from '@/components/LandingSection'
import OfferingsSection from '@/components/OfferingsSection'
import OfferingsRiver from '@/components/OfferingsRiver'
import PartnersSection from '@/components/PartnersSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingSection />
      <OfferingsSection />
      <OfferingsRiver />
      <PartnersSection />
      <AboutSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
