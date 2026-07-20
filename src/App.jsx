import { useEffect } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import Services from './components/Services';
import Machines from './components/Machines';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Allies from './components/Allies';
import Contact from './components/Contact';
import Legal from './components/Legal';
import SocialLinks from './components/SocialLinks';

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (!elements.length) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-iron-950 font-body text-chalk">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <Services />
        <Machines />
        <Gallery />
        <Videos />
        <Dashboard />
        <Testimonials />
        <Allies />
        <Contact />
        <Legal />
      </main>
      <footer className="border-t border-iron-800 bg-iron-950 py-9">
        <div className="mx-auto grid max-w-6xl gap-7 px-6 text-center sm:grid-cols-[1fr_auto] sm:items-center sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-wide text-chalk">
              VIKINGOS<span className="text-ember-500">GYM</span>
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate2">Jilotepec, Estado de México</p>
            <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-slate2 sm:justify-start" aria-label="Enlaces legales">
              <a href="#privacidad" className="transition hover:text-ember-500">Aviso de privacidad</a>
              <a href="#terminos" className="transition hover:text-ember-500">Términos de uso</a>
              <a href="#aliados-section" className="transition hover:text-ember-500">Enlaces externos</a>
              <a href="#contacto-section" className="transition hover:text-ember-500">Contacto</a>
            </nav>
          </div>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate2 sm:text-right">Redes sociales</p>
            <SocialLinks compact />
          </div>
        </div>
      </footer>
    </div>
  );
}
