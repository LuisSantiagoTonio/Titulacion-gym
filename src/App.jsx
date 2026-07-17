import { useEffect } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import Machines from './components/Machines';
import Videos from './components/Videos';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';

export default function App() {
  // Aparición progresiva de las secciones al hacer scroll
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (!elements.length) return;

    // Fallback: si el navegador no soporta IntersectionObserver, se muestra todo
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-body bg-iron-950 text-chalk flex flex-col justify-between">
      <Intro />
      <div>
        <Navbar />
        <Hero />
        <SobreNosotros />
        <Machines />
        <Videos />
        <Dashboard />
        <Contact />
      </div>
      <footer className="border-t border-iron-800 py-8 text-center font-mono text-xs text-slate2">
        VIKINGOS GYM — Canalejas, Jilotepec, Estado de México
      </footer>
    </div>
  );
}

