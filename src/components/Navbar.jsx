import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'inicio-section', label: 'Inicio' },
  { id: 'nosotros-section', label: 'Nosotros' },
  { id: 'videos-section', label: 'Videos' },
  { id: 'dashboard-section', label: 'Estadísticas' },
  { id: 'contacto-section', label: 'Contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio-section');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll spy: detecta la sección visible y resalta su enlace
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Activa una "línea" imaginaria a ~45% de la parte superior de la pantalla
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Estado y progreso al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 8);
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      // Al llegar arriba del todo, forzamos "Inicio" activo
      if (scrollTop < 120) setActiveSection('inicio-section');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-iron-700 bg-iron-950/80 backdrop-blur-xl shadow-lg shadow-black/40'
          : 'border-b border-transparent bg-iron-950/40 backdrop-blur-md'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        {/* Logo */}
        <a
          href="#inicio-section"
          onClick={(e) => handleClick(e, 'inicio-section')}
          className="group font-display text-2xl font-semibold tracking-wide text-chalk transition-transform duration-300 hover:scale-[1.03]"
        >
          VIKINGOS
          <span className="text-ember-500 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,94,26,0.7)]">
            GYM
          </span>
        </a>

        {/* Navegación */}
        <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-iron-700 bg-iron-900/70 p-1 backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative shrink-0 rounded-full px-3 py-1.5 font-body text-xs transition-all duration-300 sm:px-4 sm:text-sm ${
                  isActive
                    ? 'bg-ember-500 font-semibold text-iron-950 shadow-ember scale-105'
                    : 'text-slate2 hover:bg-iron-800/60 hover:text-chalk'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Barra de progreso de lectura */}
      <div
        className="h-0.5 origin-left bg-ember-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}
