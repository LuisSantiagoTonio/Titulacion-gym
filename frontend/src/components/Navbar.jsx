import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const handleScrollToSection = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-iron-700 bg-iron-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-display text-2xl font-semibold tracking-wide text-chalk hover:scale-[1.02] transition-transform duration-200">
            VIKINGOS<span className="text-ember-500">GYM</span>
          </Link>
        </div>
        <nav className="flex items-center gap-1 rounded-full border border-iron-700 bg-iron-900 p-1">
          <Link
            to="/"
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${location.pathname === '/' && !location.hash
              ? 'bg-ember-500 text-iron-950 font-medium'
              : 'text-slate2 hover:text-chalk'
              }`}
          >
            Inicio
          </Link>
          <Link
            to="/#nosotros-section"
            onClick={(e) => handleScrollToSection(e, 'nosotros-section')}
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${location.hash === '#nosotros-section'
              ? 'bg-ember-500 text-iron-950 font-medium'
              : 'text-slate2 hover:text-chalk'
              }`}
          >
            Nosotros
          </Link>
          <Link
            to="/#videos-section"
            onClick={(e) => handleScrollToSection(e, 'videos-section')}
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${location.hash === '#videos-section'
              ? 'bg-ember-500 text-iron-950 font-medium'
              : 'text-slate2 hover:text-chalk'
              }`}
          >
            Videos
          </Link>
          <Link
            to="/#dashboard-section"
            onClick={(e) => handleScrollToSection(e, 'dashboard-section')}
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${location.hash === '#dashboard-section'
              ? 'bg-ember-500 text-iron-950 font-medium'
              : 'text-slate2 hover:text-chalk'
              }`}
          >
            Estadísticas
          </Link>
          <Link
            to="/#contacto-section"
            onClick={(e) => handleScrollToSection(e, 'contacto-section')}
            className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${location.hash === '#contacto-section'
              ? 'bg-ember-500 text-iron-950 font-medium'
              : 'text-slate2 hover:text-chalk'
              }`}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

