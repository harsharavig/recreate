import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location, closeMenu])

  const handleHashLink = useCallback((hash) => {
    if (hash.startsWith('#')) {
      if (location.pathname !== '/') {
        window.location.href = `/${hash}`
      } else {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    closeMenu()
  }, [location.pathname, closeMenu])

  const navItems = useMemo(() => [
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Instagram', path: 'https://www.instagram.com/nmw3_/', external: true },
    { name: 'X', path: 'https://x.com/nmw3_', external: true },
  ], [])

  const headerClasses = useMemo(() => 
    `fixed top-12 left-0 right-0 z-40 transition-all duration-300`, 
    [isScrolled]
  )

  return (
    <header className={headerClasses}>
      <div className="container flex justify-center" style={{ paddingTop: '13px' }}>
        <div className={`navbar-container transition-all duration-300 ${
          isScrolled ? 'border-gray-600/50 shadow-lg' : 'border-gray-700/50'
        }`}>
          <nav className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <Logo className="w-12 h-12" />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => 
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                ) : item.path.startsWith('#') ? (
                  <button
                    key={item.path}
                    onClick={() => handleHashLink(item.path)}
                    className="nav-link"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                to="/contact"
                primary
                className="px-4 py-2 text-sm shadow-[0_0_20px_rgba(81,47,235,0.3)] hover:shadow-[0_0_30px_rgba(81,47,235,0.5)]"
              >
                Book a call
              </Button>
            </div>

            <button
              aria-label="Toggle menu"
              className="lg:hidden text-white p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-dark/95 backdrop-blur-sm border border-gray-700/50 rounded-xl animate-fadeIn">
            <div className="py-6 px-6 flex flex-col space-y-4">
              {navItems.map((item) => 
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base py-2 transition-colors duration-300 font-normal text-gray-300 hover:text-white text-left"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                ) : item.path.startsWith('#') ? (
                  <button
                    key={item.path}
                    onClick={() => handleHashLink(item.path)}
                    className="text-base py-2 transition-colors duration-300 font-normal text-gray-300 hover:text-white text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-base py-2 transition-colors duration-300 font-normal text-gray-300 hover:text-white"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-gray-700 space-y-4">
                <Button
                  to="/contact"
                  primary
                  className="w-full shadow-[0_0_30px_rgba(81,47,235,0.4)] hover:shadow-[0_0_40px_rgba(81,47,235,0.6)]"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header