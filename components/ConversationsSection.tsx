import Link from 'next/link'

// Conversations image
const conversationsImage = '/images/conversations/conversations-2.JPG'

export default function ConversationsSection() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full order-2 md:order-1">
            <img
              src={conversationsImage}
              alt="Conversations"
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
              Conversations
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              The art of creating space where one's own truth can be spoken and respected, even if not completely heard. One-on-one spiritual companionship that helps people find their way back to themselves or forward into who they're becoming.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-black mb-2">Who:</h3>
                <p className="text-black">Seeking spiritual companionship, folks navigating transitions, those who want to deepen in relationship with themselves, folks called to explore ancestry or healing journey</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">What:</h3>
                <p className="text-black">1-1, Liberation Genealogy sessions, accountability and grace work, herbal tea ceremonies, support during hard transitions, help find your way back to you</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">When:</h3>
                <p className="text-black">During major life transitions, spiritual awakening moments, times of loss or grief, feeling disconnected from self, while on healing journey, or self exploration</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-black mb-2">Why:</h3>
                <p className="text-black">We are the experts of our own lives but sometimes need a spiritual companion to help us remember who we are, honor where we've come from, and step into who we're becoming</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}