const SERVICES = [
  {
    title: 'Área de fuerza',
    description: 'Espacio con peso libre, bancos, racks y máquinas para trabajar los principales grupos musculares.',
    icon: 'M6 7h12M4 10h16M7 10v4m10-4v4M6 17h12M4 14h16',
  },
  {
    title: 'Acondicionamiento físico',
    description: 'Rutinas orientadas a mejorar resistencia, movilidad, coordinación y condición cardiovascular.',
    icon: 'M4 12h3l2-5 4 10 2-5h5',
  },
  {
    title: 'Clases grupales',
    description: 'Sesiones colectivas según el horario publicado. Consulta disponibilidad antes de asistir.',
    icon: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m14-11a4 4 0 110-8 4 4 0 010 8zm6 11v-2a4 4 0 00-3-3.87',
  },
  {
    title: 'Orientación de entrenamiento',
    description: 'Apoyo para conocer el uso correcto del equipo y organizar una rutina de acuerdo con tus objetivos.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Entrenamiento personal',
    description: 'Acompañamiento individual sujeto a disponibilidad. Pregunta por modalidades, horarios y costos.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-7 8h14m-7 0v6',
  },
  {
    title: 'Membresías flexibles',
    description: 'Solicita información actualizada sobre inscripciones, visitas, mensualidades y promociones vigentes.',
    icon: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm3 8h4',
  },
];

export default function Services() {
  const goToContact = () => {
    document.getElementById('contacto-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios-section" className="reveal border-y border-iron-800 bg-iron-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Servicios y membresías</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk sm:text-5xl">
            Entrena a tu ritmo
          </h2>
          <p className="mt-4 font-body leading-relaxed text-slate2">
            Conoce las opciones generales de Vikingos Gym. La disponibilidad, los horarios y los costos pueden cambiar, por lo que te recomendamos confirmarlos por correo o WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-iron-700 bg-iron-950/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-xl hover:shadow-ember-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember-500/30 bg-ember-500/10 text-ember-500 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={service.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-chalk">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate2">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-ember-500/30 bg-ember-500/10 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold uppercase text-chalk">Solicita información actualizada</h3>
            <p className="mt-1 text-sm text-slate2">Pregunta por membresías, promociones, entrenadores y horarios disponibles.</p>
          </div>
          <button
            type="button"
            onClick={goToContact}
            className="shrink-0 rounded-xl bg-ember-500 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-iron-950 transition hover:bg-ember-400 active:scale-95"
          >
            Ir a contacto
          </button>
        </div>
      </div>
    </section>
  );
}
