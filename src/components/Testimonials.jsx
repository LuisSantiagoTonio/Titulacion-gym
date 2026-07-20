const TESTIMONIALS = [
  {
    name: 'Mariana R.',
    initials: 'MR',
    time: 'Miembro desde hace 8 meses',
    text: 'Me gusta que el gimnasio tiene un ambiente tranquilo y motivador. He logrado ser más constante y ahora disfruto mucho más mis entrenamientos.',
  },
  {
    name: 'José Luis M.',
    initials: 'JM',
    time: 'Entrenamiento de fuerza',
    text: 'El equipo es completo y siempre encuentro lo necesario para trabajar cada grupo muscular. La atención también me ha ayudado a mejorar mi técnica.',
  },
  {
    name: 'Andrea C.',
    initials: 'AC',
    time: 'Miembro desde hace 5 meses',
    text: 'Comencé buscando mejorar mi condición física y poco a poco he notado grandes cambios. El ambiente entre las personas hace que uno quiera regresar.',
  },
  {
    name: 'Luis Fernando G.',
    initials: 'LG',
    time: 'Rutina de acondicionamiento',
    text: 'Los horarios son cómodos y las instalaciones permiten entrenar con confianza. Es un lugar que recomendaría para comenzar o retomar el ejercicio.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-ember-500" aria-label="Cinco estrellas">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="m12 2.4 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.4Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios-section" className="reveal border-y border-iron-800 bg-iron-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Testimonios</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">
            Lo que dice nuestra comunidad
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate2">
            Experiencias sobre el ambiente, la constancia y el entrenamiento en Vikingos Gym.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-iron-700 bg-iron-950 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/60"
            >
              <span className="absolute -right-2 -top-8 font-display text-[9rem] leading-none text-ember-500/10" aria-hidden="true">
                “
              </span>

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ember-500/40 bg-ember-500/10 font-display text-sm font-bold text-ember-500">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-chalk">
                    {testimonial.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate2">
                    {testimonial.time}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-5">
                <Stars />
                <blockquote className="mt-4 text-sm leading-7 text-slate2">
                  “{testimonial.text}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center font-mono text-[10px] uppercase tracking-wider text-iron-500">
          Testimonios creados como contenido demostrativo para este proyecto escolar.
        </p>
      </div>
    </section>
  );
}
