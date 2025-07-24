import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  primary, 
  secondary, 
  outline, 
  className = "" 
}) => {
  const buttonClass = useMemo(() => {
    if (primary) return 'btn-primary'
    if (secondary) return 'btn-secondary'
    if (outline) return 'btn-outline'
    return 'btn-primary'
  }, [primary, secondary, outline])

  const combinedClassName = useMemo(() => `${buttonClass} ${className}`, [buttonClass, className])

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

export default Button