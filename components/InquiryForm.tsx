'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatCallsYou: '',
    question1: '',
    question2: '',
    question3: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const text = await res.text()
      const data = text ? JSON.parse(text) : {}

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', whatCallsYou: '', question1: '', question2: '', question3: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputClass = "w-full px-4 py-2 border border-cream-dark rounded-md bg-cream-light text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Basic Info Section */}
      <div className="bg-cream-light p-8 rounded-lg shadow-sm border border-cream-dark">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Basic Info</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          
          <div>
            <label htmlFor="whatCallsYou" className="block text-sm font-medium text-charcoal mb-2">
              What calls you here?
            </label>
            <select
              id="whatCallsYou"
              name="whatCallsYou"
              value={formData.whatCallsYou}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select an option</option>
              <option value="ceremony">Ceremony - marking transitions, creating sacred agreements</option>
              <option value="community">Community - weaving stronger connections, navigating conflict with grace</option>
              <option value="conversation">Conversation - spiritual companionship for the journey</option>
              <option value="fellow-collaborator">Prospective fellow or collaborator</option>
              <option value="something-else">Something else is stirring</option>
            </select>
          </div>
        </div>
      </div>

      {/* Three Questions Section */}
      <div className="bg-cream-light p-8 rounded-lg shadow-sm border border-cream-dark">
        <h2 className="text-2xl font-serif text-charcoal mb-6">Three Questions That Matter</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="question1" className="block text-sm font-medium text-charcoal mb-2">
              What brought you to my doorstep? <span className="text-charcoal-muted italic">(What&apos;s stirring in your life right now?)</span>
            </label>
            <textarea
              id="question1"
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              required
              rows={4}
              className={inputClass}
            />
          </div>
          
          <div>
            <label htmlFor="question2" className="block text-sm font-medium text-charcoal mb-2">
              If we were sharing tea, what would you want me to know? <span className="text-charcoal-muted italic">(What feels important for me to understand about where you are?)</span>
            </label>
            <textarea
              id="question2"
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              required
              rows={4}
              className={inputClass}
            />
          </div>
          
          <div>
            <label htmlFor="question3" className="block text-sm font-medium text-charcoal mb-2">
              Is there anything your ancestors and/or your future self would want present in our work together? <span className="text-charcoal-muted italic">(Any traditions, timeframes, or sacred elements to honor?)</span>
            </label>
            <textarea
              id="question3"
              name="question3"
              value={formData.question3}
              onChange={handleChange}
              rows={4}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        {status === 'success' ? (
          <p className="text-green-700 bg-green-50 border border-green-200 rounded-md px-6 py-4 text-lg">
            Thank you for reaching out. Your inquiry has been sent — we&apos;ll be in touch soon.
          </p>
        ) : (
          <>
            {status === 'error' && (
              <p className="text-red-700 bg-red-50 border border-red-200 rounded-md px-6 py-3 text-sm">
                {errorMsg}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 bg-terracotta text-cream rounded-md hover:bg-terracotta-dark transition-colors font-medium text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </>
        )}
      </div>
    </form>
  )
}
