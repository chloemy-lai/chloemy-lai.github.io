import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
]

const joinLinks = [
  { label: 'Become an ACE Member', to: '/ace-member' },
  { label: 'Team Hiring', to: '/team-hiring' },
]

export default function Navbar() {
  const [joinOpen, setJoinOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const joinTimeout = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDarkPage = isHome
  const darkText = "text-white"

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }
  const isJoinActive = joinLinks.some(l => isActive(l.to))

  const openJoin = () => {
    if (joinTimeout.current) clearTimeout(joinTimeout.current)
    setJoinOpen(true)
  }

  const closeJoin = () => {
    joinTimeout.current = setTimeout(() => setJoinOpen(false), 150)
  }

  return (
    <nav className="sticky top-0 z-50">
      <div className={`${isDarkPage ? '' : 'bg-white'} px-[45px] flex items-center justify-between h-16`}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src={import.meta.env.BASE_URL + 'img/icon/ace-utsc-logo-1.png'}
            alt="ACE UTSC"
            className="h-9 w-auto"
          />
          <span className={`text-sm tracking-tight hover:underline font-['League Spartan',sans-serif] text-[#09346A] hover:text-[#09346A]/70`}>ACE UTSC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`transition-colors hover:underline underline-offset-4 ${isActive(l.to) ? 'underline' : ''} ${isDarkPage ? `${darkText} hover:text-white/80` : 'text-[#09346A] hover:text-[#09346A]/70'}`}>
              {l.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={openJoin} onMouseLeave={closeJoin}>
            <button className={`flex items-center gap-1 transition-colors hover:underline underline-offset-4 ${isJoinActive ? 'underline' : ''} ${isDarkPage ? `${darkText} hover:text-white/80` : 'text-[#09346A] hover:text-[#09346A]/70'}`}>
              Join Us
              <span className="text-xs">▼</span>
            </button>
            {joinOpen && (
              <div
                className={`absolute left-0 top-full mt-1 w-56 shadow-lg py-2 rounded ${isDarkPage ? 'bg-[#1a1720] text-white' : 'bg-white text-[#222]'}`}
                onMouseEnter={openJoin}
                onMouseLeave={closeJoin}
              >
                {joinLinks.map((l) => (
                  <Link key={l.to} to={l.to} className={`block px-4 py-2 text-sm hover:underline underline-offset-2 hover:bg-gray-50 ${isActive(l.to) ? 'underline' : ''}`}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/our-team-2025-2026" className={`transition-colors hover:underline underline-offset-4 ${isActive('/our-team-2025-2026') ? 'underline' : ''} ${isDarkPage ? `${darkText} hover:text-white/80` : 'text-[#09346A] hover:text-[#09346A]/70'}`}>
            Our Team
          </Link>
          <Link to="/contact" className={`transition-colors hover:underline underline-offset-4 ${isActive('/contact') ? 'underline' : ''} ${isDarkPage ? `${darkText} hover:text-white/80` : 'text-[#09346A] hover:text-[#09346A]/70'}`}>
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden text-2xl ${isDarkPage ? darkText : 'text-[#09346A]'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
 
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t px-[45px] py-4 flex flex-col gap-3 text-sm ${isDarkPage ? 'bg-[#120F17] text-white' : 'bg-white text-[#09346A]'}`}>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className={`hover:underline underline-offset-2 ${isActive(l.to) ? 'underline' : ''}`}>{l.label}</Link>
          ))}
          <div className="font-medium">Join Us</div>
          {joinLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`pl-4 hover:underline underline-offset-2 ${isActive(l.to) ? 'underline' : ''}`} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/our-team-2025-2026" onClick={() => setMobileOpen(false)} className={`hover:underline underline-offset-2 ${isActive('/our-team-2025-2026') ? 'underline' : ''}`}>Our Team</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className={`hover:underline underline-offset-2 ${isActive('/contact') ? 'underline' : ''}`}>Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
