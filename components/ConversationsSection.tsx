import Link from 'next/link'

// Conversations background image
const conversationsBackground = '/images/conversations/conversations-2.JPG'

export default function ConversationsSection() {
  return (
    <section 
      className="section-padding relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${conversationsBackground}')`,
      }}
    >
      <div className="absolute inset-0 bg-earth-900/50"></div>
      <div className="container-max relative z-10">
        <div className="max-w-3xl ml-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-50 mb-6" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              Conversations
            </h2>
            <p className="text-lg text-earth-100 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
              The art of creating space where one's own truth can be spoken and respected, even if not completely heard. One-on-one spiritual companionship that helps people find their way back to themselves or forward into who they're becoming.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Who:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Seeking spiritual companionship, folks navigating transitions, those who want to deepen in relationship with themselves, folks called to explore ancestry or healing journey</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>What:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>1-1, Liberation Genealogy sessions, accountability and grace work, herbal tea ceremonies, support during hard transitions, help find your way back to you</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>When:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>During major life transitions, spiritual awakening moments, times of loss or grief, feeling disconnected from self, while on healing journey, or self exploration</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-earth-50 mb-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>Why:</h3>
                <p className="text-earth-100" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>We are the experts of our own lives but sometimes need a spiritual companion to help us remember who we are, honor where we've come from, and step into who we're becoming</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm text-white bg-terracotta-600 border border-terracotta-600 rounded-md hover:bg-terracotta-700 transition-colors"
              >
                Connect
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}