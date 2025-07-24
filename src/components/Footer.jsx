import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const webhookUrl = 'https://hook.us2.make.com/4s7maj63ursqfheh7k318f2vzgb6w2y1'
      const payload = {
        email: email,
        timestamp: new Date().toISOString(),
        source: 'footer_newsletter_signup'
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-dark border-t border-gray-700 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo className="w-12 h-12 mr-2" />
              <span className="text-xl font-medium text-white">NMW3</span>
            </div>
            <h3 className="text-2xl font-medium mb-4" style={{ color: '#ffffff' }}>
              Join my newsletter
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Sign up to our newsletter to get tactical advice on AI automation and lead generation.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Don't worry, we hate spam too.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-white font-medium rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(81,47,235,0.4)] hover:shadow-[0_0_30px_rgba(81,47,235,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#512FEB' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4325C7'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#512FEB'}
              >
                {isSubmitting ? 'Subscribing...' : 'Get Notified'}
              </button>
            </form>
            {message && (
              <p className={`text-sm mt-4 ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
            <p className="text-xs text-gray-600 mt-4 max-w-md">
              NMW3 needs the contact information you provide to us to contact you about our products and services. 
              You may unsubscribe from these communications at any time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4" style={{ color: '#ffffff' }}>
                Pages
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4" style={{ color: '#ffffff' }}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:nicolas@nmw3.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    nicolas@nmw3.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 NMW3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer