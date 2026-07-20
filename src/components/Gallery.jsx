const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    alt: 'Área de entrenamiento con equipo de gimnasio',
    title: 'Zona de entrenamiento',
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Persona entrenando con mancuernas',
    title: 'Peso libre',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Entrenamiento funcional en gimnasio',
    title: 'Acondicionamiento',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sesión de ejercicio dirigida',
    title: 'Clases y comunidad',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    alt: 'Discos y barras para entrenamiento de fuerza',
    title: 'Equipo de fuerza',
  },
  {
    src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Persona realizando entrenamiento cardiovascular',
    title: 'Cardio y resistencia',
  },
];

export default function Gallery() {
  return (
    <section id="galeria-section" className="reveal mx-auto max-w-6xl px-6 py-20">
      <div className="mb-9 flex flex-col gap-4 border-b border-iron-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Galería</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">Conoce el ambiente</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate2">
          Galería ilustrativa del tipo de espacios y actividades que forman parte de una experiencia de entrenamiento completa.
        </p>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map((image, index) => (
          <figure
            key={image.src}
            className={`group relative overflow-hidden rounded-2xl border border-iron-700 bg-iron-900 ${index === 0 || index === 5 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember-400">Vikingos Gym</span>
              <h3 className="mt-1 font-display text-xl font-semibold uppercase text-white">{image.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-4 font-mono text-[10px] leading-relaxed text-slate2">
        Nota: las imágenes de esta sección son ilustrativas. Para una entrega final más auténtica, pueden sustituirse por fotografías propias de las instalaciones.
      </p>
    </section>
  );
}
