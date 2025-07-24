import React from 'react'
import Section from '../components/Section'

const BlogPage = () => {
  return (
    <div className="pt-44 pb-16 md:pt-52 md:pb-24 bg-dark">
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 md:mb-6 leading-tight px-4 md:px-0" style={{ color: '#ffffff' }}>
              Welcome to the <span className="serif-italic">blog.</span>
            </h1>
          </div>
          
          <div className="text-center py-12 px-4 md:px-0">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-medium mb-2" style={{ color: '#ffffff' }}>
                Coming Soon
              </h3>
              <p className="text-gray-400 mb-6">
                We're working on bringing you valuable content about AI automation and lead generation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BlogPage