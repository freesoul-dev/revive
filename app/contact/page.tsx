import InquiryForm from '@/components/InquiryForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen section-padding bg-earth-50">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl font-serif text-earth-800 text-center mb-12">
          Let's Connect
        </h1>
        <InquiryForm />
      </div>
    </main>
  )
}

