import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Machines from './components/Machines';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacto-section') {
      // Pequeño timeout para asegurar que el DOM se haya renderizado
      const timer = setTimeout(() => {
        const element = document.getElementById('contacto-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <Routes>
      {/* Ruta para el Login del Administrador */}
      <Route path="/login" element={<Login />} />

      {/* Rutas principales de la aplicación */}
      <Route
        path="/*"
        element={
          <div className="min-h-screen font-body bg-iron-950 text-chalk flex flex-col justify-between">
            <div>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Machines />
                      <Contact />
                    </>
                  }
                />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
            <footer className="border-t border-iron-800 py-8 text-center font-mono text-xs text-slate2">
              HIERRO GYM — datos servidos desde MySQL (XAMPP) vía API en Node.js
            </footer>
          </div>
        }
      />
    </Routes>
  );
}

