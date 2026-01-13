'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatCallsYou: '',
    question1: '',
    question2: '',
    question3: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a form service like Formspree, EmailJS, or your own API
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Basic Info Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-earth-200">
        <h2 className="text-2xl font-serif text-earth-800 mb-6">Basic Info</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
            />
          </div>
          
          <div>
            <label htmlFor="whatCallsYou" className="block text-sm font-medium text-earth-700 mb-2">
              What calls you here?
            </label>
            <select
              id="whatCallsYou"
              name="whatCallsYou"
              value={formData.whatCallsYou}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
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
      <div className="bg-white p-8 rounded-lg shadow-sm border border-earth-200">
        <h2 className="text-2xl font-serif text-earth-800 mb-6">Three Questions That Matter</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="question1" className="block text-sm font-medium text-earth-700 mb-2">
              What brought you to my doorstep? <span className="text-earth-500 italic">(What's stirring in your life right now?)</span>
            </label>
            <textarea
              id="question1"
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
            />
          </div>
          
          <div>
            <label htmlFor="question2" className="block text-sm font-medium text-earth-700 mb-2">
              If we were sharing tea, what would you want me to know? <span className="text-earth-500 italic">(What feels important for me to understand about where you are?)</span>
            </label>
            <textarea
              id="question2"
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
            />
          </div>
          
          <div>
            <label htmlFor="question3" className="block text-sm font-medium text-earth-700 mb-2">
              Is there anything your ancestors and/or your future self would want present in our work together? <span className="text-earth-500 italic">(Any traditions, timeframes, or sacred elements to honor?)</span>
            </label>
            <textarea
              id="question3"
              name="question3"
              value={formData.question3}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-terracotta-600 text-white rounded-md hover:bg-terracotta-700 transition-colors font-medium text-lg"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  )
}

