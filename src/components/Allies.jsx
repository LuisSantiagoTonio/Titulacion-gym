const EXTERNAL_REFERENCES = [
  {
    name: 'Mexicoo',
    type: 'Directorio empresarial',
    description: 'Ficha pública de Vikingos Gym dentro de un directorio de unidades económicas en México.',
    url: 'https://mexicoo.mx/vikingos-gym-en-jilotepec-mexico-8939549',
  },
  {
    name: 'México Pymes',
    type: 'Directorio de empresas',
    description: 'Referencia externa con información pública de registro, giro comercial y ubicación general.',
    url: 'https://mexicopymes.com/info/vikingos-gym-jilotepec-de-molina-enriquez-jilotepec-mexico-D5F221051B0F8FBD',
  },
];

export default function Allies() {
  return (
    <section id="aliados-section" className="reveal mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Aliados y presencia digital</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">Referencias externas</h2>
          <p className="mt-5 leading-relaxed text-slate2">
            Vikingos Gym cuenta con presencia en directorios empresariales públicos. Estos enlaces permiten consultar referencias externas sobre el establecimiento.
          </p>
          <p className="mt-4 rounded-xl border border-iron-700 bg-iron-900 p-4 font-mono text-[10px] leading-relaxed text-slate2">
            Los directorios mostrados son sitios externos e independientes. Su inclusión no implica una alianza comercial formal ni control sobre la información publicada por ellos.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {EXTERNAL_REFERENCES.map((reference) => (
            <a
              key={reference.name}
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/60 hover:shadow-xl hover:shadow-ember-500/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/10 text-ember-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 010 5.656l-2 2a4 4 0 01-5.656-5.656l1-1m3-3 2-2a4 4 0 015.656 5.656l-1 1" />
                  </svg>
                </div>
                <svg className="h-5 w-5 text-slate2 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-ember-500">{reference.type}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold uppercase text-chalk">{reference.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate2">{reference.description}</p>
              <span className="mt-5 inline-flex font-mono text-[10px] font-bold uppercase tracking-wider text-chalk group-hover:text-ember-500">
                Consultar ficha externa
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
