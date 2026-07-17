import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import Machines from './components/Machines';
import Videos from './components/Videos';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen font-body bg-iron-950 text-chalk flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SobreNosotros />
                <Machines />
                <Videos />
                <Dashboard />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
      <footer className="border-t border-iron-800 py-8 text-center font-mono text-xs text-slate2">
        VIKINGOS GYM — Canalejas, Jilotepec, Estado de México
      </footer>
    </div>
  );
}

