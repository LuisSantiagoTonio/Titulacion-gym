export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('maquinas-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio-section" className="relative overflow-hidden border-b border-iron-700">
      {/* Rejilla de fondo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-iron-grid bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* Resplandor ember superior */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-ember-500/10 blur-[120px] animate-ember-pulse" />
      {/* Patrón de fondo: discos de pesa concéntricos */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[24px] border-iron-800 animate-float" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[18px] border-iron-800 animate-float [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-40 w-40 rounded-full border-[10px] border-iron-800/60 animate-spin-slow" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-iron-700 bg-iron-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-ember-500 animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-ember-500 animate-ember-pulse" />
          Disciplina · Constancia · Resultados
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-tight text-chalk sm:text-7xl animate-fade-up [animation-delay:80ms]">
          Forja tu fuerza
          <br />
          <span className="text-ember-gradient-animated">en cada repetición</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-slate2 animate-fade-up [animation-delay:160ms]">
          Equipo de cardio y fuerza de nivel profesional, entrenadores certificados
          y un sistema en vivo para ver qué máquinas están disponibles antes de salir de casa.
        </p>
        <h5 className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-slate2 animate-fade-up [animation-delay:200ms]">
          📍 Canalejas, Jilotepec, Estado de México
        </h5>
        <div className="mt-8 flex justify-center animate-fade-up [animation-delay:240ms]">
          <button
            onClick={handleScroll}
            className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 font-body text-sm font-semibold text-iron-950 shadow-ember transition-all hover:bg-ember-400 hover:shadow-[0_14px_40px_-8px_rgba(255,94,26,0.5)] active:scale-95"
          >
            Ver máquinas disponibles
            <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


