import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'inicio-section', label: 'Inicio' },
  { id: 'nosotros-section', label: 'Nosotros' },
  { id: 'servicios-section', label: 'Servicios' },
  { id: 'galeria-section', label: 'Galería' },
  { id: 'horarios-section', label: 'Horarios' },
  { id: 'testimonios-section', label: 'Testimonios' },
  { id: 'aliados-section', label: 'Aliados' },
  { id: 'contacto-section', label: 'Contacto' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio-section');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 8);
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      if (scrollTop < 120) setActiveSection('inicio-section');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-iron-700 bg-iron-950/90 shadow-lg shadow-black/30 backdrop-blur-xl' : 'border-b border-transparent bg-iron-950/55 backdrop-blur-md'}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-all ${scrolled ? 'py-3' : 'py-4'}`}>
        <a href="#inicio-section" onClick={(event) => goToSection(event, 'inicio-section')} className="shrink-0 font-display text-xl font-semibold tracking-wide text-chalk sm:text-2xl">
          VIKINGOS<span className="text-ember-500">GYM</span>
        </a>
        <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-iron-700 bg-iron-900/70 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => goToSection(event, item.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition sm:px-4 sm:text-sm ${activeSection === item.id ? 'scale-105 bg-ember-500 font-semibold text-iron-950 shadow-ember' : 'text-slate2 hover:bg-iron-800/60 hover:text-chalk'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="h-0.5 bg-ember-gradient transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </header>
  );
}
