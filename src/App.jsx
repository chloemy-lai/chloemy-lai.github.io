import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import AceMember from './pages/AceMember'
import TeamHiring from './pages/TeamHiring'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import EventDetail from './pages/EventDetail'
import WelcomeScreen from './components/layout/WelcomeScreen';

function Layout({ children }) {
  return (
    <div className="min-h-screen text-[#222] flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {showWelcome ? (
        <>
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        </>
      ) : (
        <>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<EventDetail />} />
              <Route path="/ace-member" element={<AceMember />} />
              <Route path="/team-hiring" element={<TeamHiring />} />
              <Route path="/our-team-2025-2026" element={<OurTeam />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </>
      )}
    </BrowserRouter>
  );
}