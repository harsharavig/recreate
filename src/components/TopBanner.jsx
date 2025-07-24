import React from 'react'
import { Link } from 'react-router-dom'

const TopBanner = () => {
  return (
    <Link to="/contact" className="top-banner block">
      <span className="hidden md:inline font-bold">
        Limited spots available this month for new clients. Book a free demo now.
      </span>
      <span className="md:hidden font-bold">
        Limited spots available. Apply here!
      </span>
    </Link>
  )
}

export default TopBanner