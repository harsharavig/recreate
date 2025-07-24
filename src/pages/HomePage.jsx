import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  X, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Settings, 
  Users, 
  Workflow, 
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen pt-44 pb-16 md:pt-52 md:pb-24 flex items-center relative overflow-hidden bg-dark">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 md:mb-8 px-4 md:px-0"
              style={{ color: '#ffffff', lineHeight: '1.0' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="block mb-1 md:mb-0">Get More Clients</span>
              <span className="block">
                And <span className="serif-italic">more sales.</span>
              </span>
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 md:mb-6 px-4 md:px-0"
              style={{ color: '#ffffff' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Most Websites Drop the Ball. Yours Won't...
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4 md:px-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              ...Not with a 24/7 AI Web Agent that engages every visitor, captures every lead, and books more appointments on autopilot.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button
                to="/contact"
                primary
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto shadow-[0_0_30px_rgba(81,47,235,0.4)] hover:shadow-[0_0_40px_rgba(81,47,235,0.6)]"
              >
                Book a call
              </Button>
              <Button
                secondary
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('problem')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <Section id="problem" className="bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4 md:mb-6 tracking-tight leading-tight px-4 md:px-0" style={{ color: '#ffffff' }}>
            Your Website Gets Traffic.<br />
            But It's <span className="serif-italic">not converting.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 px-4 md:px-0 leading-relaxed max-w-2xl mx-auto">
            You're investing in ads, SEO, and content to drive traffic.{' '}
            <span className="sm:hidden">
              But most visitors leave without doing anything. No form fill. No message. No sale.
            </span>
            <span className="hidden sm:inline">
              <br />
              But most visitors leave without doing anything. No form fill. No message. No sale.
            </span>
          </p>
          <motion.div
            className="card p-6 md:p-8 mb-8 md:mb-12 mx-4 md:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-medium mb-2" style={{ color: '#ffffff' }}>
              97%
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              of website visitors leave without converting
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="bg-dark">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Features</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: '#ffffff' }}>
            "But What Makes <span className="serif-italic">you different?</span>"
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 md:px-0 leading-relaxed">
            Our AI agents work 24/7 to capture leads, qualify prospects, and book appointments while you focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {[
            {
              icon: <CheckCircle size={28} />,
              title: "Guaranteed",
              description: "We only win when you win. That's the basis for a great partnership. If you don't like the results, you get your money back. Guaranteed."
            },
            {
              icon: <Search size={28} />,
              title: "Lead Qualification",
              description: "Automatically qualify leads based on your criteria, ensuring you only spend time on high-value prospects."
            },
            {
              icon: <Zap size={28} />,
              title: "Instant Response",
              description: "Respond to inquiries in seconds, not hours. Keep prospects engaged when they're most interested."
            },
            {
              icon: <Settings size={28} />,
              title: "CRM Integration",
              description: "Seamlessly integrate with your existing CRM and tools for a unified workflow."
            },
            {
              icon: <Calendar size={28} />,
              title: "Appointment Booking",
              description: "Automatically schedule appointments based on your availability and preferences."
            },
            {
              icon: <Workflow size={28} />,
              title: "Custom Workflows",
              description: "Tailored automation workflows designed specifically for your business needs."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="glowing-card feature-card-content p-5 md:p-6">
                <div className="feature-card-body">
                  <div>
                    <div className="text-purple-400 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium mb-3" style={{ color: '#ffffff' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: '#ffffff' }}>
            Want to See It <span className="serif-italic">in action?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 px-4 md:px-0 leading-relaxed max-w-2xl mx-auto">
            Book a free AI Web Agent demo and see it on your site.{' '}
            <span className="sm:hidden">
              No pressure. No hard sell. Just results.
            </span>
            <span className="hidden sm:inline">
              <br />
              No pressure. No hard sell. Just results.
            </span>
          </p>
          <motion.div
            className="px-4 md:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              to="/contact"
              primary
              className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 w-full sm:w-auto shadow-[0_0_30px_rgba(81,47,235,0.4)] hover:shadow-[0_0_40px_rgba(81,47,235,0.6)]"
            >
              Apply now
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default HomePage