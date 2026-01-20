import InquiryForm from '@/components/InquiryForm'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-serif text-black text-center mb-12">
            Let's Connect
          </h1>
          <InquiryForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}

