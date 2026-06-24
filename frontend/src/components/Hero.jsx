export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('maquinas-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-iron-700">
      {/* Patrón de fondo: discos de pesa concéntricos */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[24px] border-iron-800" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[18px] border-iron-800" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-ember-500">
          Disciplina · Constancia · Resultados
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase leading-tight text-chalk sm:text-7xl">
          Forja tu fuerza
          <br />
          <span className="text-ember-500">en cada repetición</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-slate2">
          Equipo de cardio y fuerza de nivel profesional, entrenadores certificados
          y un sistema en vivo para ver qué máquinas están disponibles antes de salir de casa.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleScroll}
            className="rounded-full bg-ember-500 px-6 py-3 font-body text-sm font-semibold text-iron-950 transition hover:bg-ember-400 active:scale-95"
          >
            Ver máquinas disponibles
          </button>
        </div>
      </div>
    </section>
  );
}


