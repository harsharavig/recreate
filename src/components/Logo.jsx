import React from 'react'

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <img
      src="/assets/NMW3-logo.png"
      alt="NMW3 Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}

export default Logo