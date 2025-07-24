import React, { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    revenue: '',
    canAfford: '',
    website: '',
    reason: '',
    concerns: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    if (submitError) {
      setSubmitError('')
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.revenue) newErrors.revenue = 'Please select your revenue range'
    if (!formData.canAfford) newErrors.canAfford = 'Please select an option'
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you reached out'
    
    if (formData.website && formData.website.trim() !== '') {
      try {
        let url = formData.website.trim()
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'https://' + url
        }
        new URL(url)
        setFormData(prev => ({ ...prev, website: url }))
      } catch (error) {
        newErrors.website = 'Please enter a valid URL (e.g., https://yourwebsite.com)'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        service: formData.service,
        revenue: formData.revenue,
        can_afford: formData.canAfford,
        website: formData.website.trim() || null,
        reason: formData.reason.trim(),
        concerns: formData.concerns.trim() || null,
        source: 'contact_form'
      }
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark pt-32 pb-8 md:pt-40 md:pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4 md:mb-6" style={{ color: '#ffffff' }}>
              Thank <span className="serif-italic">you!</span>
            </h1>
            <div className="max-w-2xl mx-auto space-y-3 md:space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We've received your information and will be in touch within 24 hours.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                In the meantime, check out our blog and see how you can increase your sales using AI automation.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button to="/" primary className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark pt-32 pb-16 md:pt-40 md:pb-24">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: '#ffffff' }}>
              Let's <span className="serif-italic">talk.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed">
              Fill out the form below to book a Free AI Web Agent demo. No pressure. No hard sell. Just results.
            </p>
          </div>

          <div className="card p-6 md:p-8 mx-4 md:mx-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p className="text-red-400 text-sm">{submitError}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="name@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-700'
                    }`}
                    placeholder="Enter your company name"
                    disabled={isSubmitting}
                  />
                  {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                  What service are you looking for? *
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                    errors.service ? 'border-red-500' : 'border-gray-700'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="AI Chat Agent">AI Chat Agent</option>
                  <option value="AI Phone Agent">AI Phone Agent</option>
                  <option value="Instant Website Building Services">Instant Website Building Services</option>
                </select>
                {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium mb-2" style={{ color: '#ffffff' }}>
                  What made you want to reach out to us today? *
                </label>
                <p className="text-sm text-gray-400 mb-3">
                  e.g. paying too much for live representatives, high bounce rate, etc.
                </p>
                <textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => handleChange('reason', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none ${
                    errors.reason ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Tell us what brought you here..."
                  disabled={isSubmitting}
                />
                {errors.reason && <p className="text-red-400 text-sm mt-1">{errors.reason}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ContactPage