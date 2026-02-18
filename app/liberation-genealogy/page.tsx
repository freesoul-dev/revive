import LGPAboutSection from '@/components/LGPAboutSection'
import LiberatorsSection from '@/components/LiberatorsSection'
import Navigation from '@/components/Navigation'

export default function LiberationGenealogyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <LGPAboutSection />
      <LiberatorsSection />
    </main>
  )
}

