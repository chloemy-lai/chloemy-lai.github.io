import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Extra from './components/Extra';
import Skills from './components/Skills';
import Music from './components/Music';
import Footer from './components/Footer';
import { useInViewBlur } from './hooks/useInViewBlur';
import './styles/global.css';

export default function App() {
  const mainRef = useRef(null);
  useInViewBlur(mainRef, 'h1, p, .skill-item');

  // Re-run blur observer when late content mounts (YouTube stats, etc.)
  useEffect(() => {
    // Force a small delayed pass for dynamically updated text nodes
    const t = setTimeout(() => {
      const targets = mainRef.current?.querySelectorAll('h1, p, .skill-item');
      targets?.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) el.classList.add('in-view');
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="site-main" ref={mainRef}>
      <Header />
      <Hero />
      <Experience />
      <Extra />
      <Skills />
      <Music />
      <Footer />
    </div>
  );
}
