import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative mt-0 text-sm text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://aceuoft.wordpress.com/wp-content/uploads/2025/08/utsc_campus.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative px-[45px] py-5 flex flex-col md:flex-row md:justify-between gap-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={import.meta.env.BASE_URL + 'img/icon/ACEUTSC.png'}
              alt="ACE UTSC"
              className="h-6"
            />
            <span className="font-semibold tracking-tight">ACE UTSC</span>
          </div>
          <p className="mb-1 opacity-90">1265 Military Trail</p>
          <p className="mb-1 opacity-90">University of Toronto Scarborough</p>
          <p className="opacity-90">ON M1C 1A4, CA</p>
        </div>

        <div className="md:text-right text-sm">
          <div className="mb-2 flex flex-wrap md:justify-end gap-x-5 gap-y-1 opacity-90">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/ace-member" className="hover:underline">Become an ACE Member</Link>
            <Link to="/team-hiring" className="hover:underline">Team Hiring</Link>
            <Link to="/our-team-2025-2026" className="hover:underline">Our Team</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        <div className="mt-5 flex gap-5 items-center md:justify-end">
            <a href="https://www.instagram.com/aceutsc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4 grayscale hover:grayscale-0 transition" /></a>
            <a href="https://www.linkedin.com/company/ace-utsc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4 grayscale hover:grayscale-0 transition" /></a>
            <a href="mailto:ace.uoftscarborough@gmail.com" className="hover:underline opacity-90">Mail</a>
            <div className="text-xs text-white/60">© {new Date().getFullYear()} ACE UTSC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
