import { useState } from 'react';

const EQUIPMENT = [
  { id: 1, name: 'Caminadora', description: 'Equipo cardiovascular con inclinación ajustable y control de ritmo.', category: 'Cardio', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Bicicleta de spinning', description: 'Trabajo cardiovascular con resistencia regulable.', category: 'Cardio', image: 'https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Elíptica', description: 'Alternativa de bajo impacto para el acondicionamiento general.', category: 'Cardio', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'Press de banca', description: 'Banco para ejercicios de pecho con barra o mancuernas.', category: 'Fuerza', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80' },
  { id: 5, name: 'Estación de poleas', description: 'Sistema versátil para ejercicios de tren superior e inferior.', category: 'Fuerza', image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=900&q=80' },
  { id: 6, name: 'Rack de sentadillas', description: 'Estructura para sentadilla, press y movimientos con barra.', category: 'Fuerza', image: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?auto=format&fit=crop&w=900&q=80' },
  { id: 7, name: 'Máquina de remo', description: 'Ejercicio combinado para resistencia y trabajo de espalda.', category: 'Cardio', image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&w=900&q=80' },
  { id: 8, name: 'Prensa de piernas', description: 'Equipo para trabajar cuádriceps, femorales y glúteos.', category: 'Fuerza', image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=900&q=80' },
  { id: 9, name: 'Mancuernas', description: 'Peso libre para rutinas de fuerza, estabilidad y acondicionamiento.', category: 'Peso libre', image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=900&q=80' },
];

export default function Machines() {
  const [category, setCategory] = useState('Todas');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = ['Todas', ...new Set(EQUIPMENT.map((item) => item.category))];
  const visibleItems = category === 'Todas' ? EQUIPMENT : EQUIPMENT.filter((item) => item.category === category);

  return (
    <section id="maquinas-section" className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal mb-8 flex flex-col gap-4 border-b border-iron-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Equipo del gimnasio</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">Nuestro equipo</h2>
        </div>
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl border border-iron-700 bg-iron-900 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-chalk transition hover:border-ember-500 hover:text-ember-500 active:scale-95"
        >
          Filtrar: <span className="text-ember-500">{category}</span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity ${filtersOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setFiltersOpen(false)}
        aria-hidden={!filtersOpen}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 max-w-[86vw] border-r border-iron-800 bg-iron-950 p-6 shadow-2xl transition-transform duration-300 ${filtersOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Filtros de equipo"
      >
        <div className="mb-6 flex items-center justify-between border-b border-iron-800 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">Filtrar equipo</p>
            <h3 className="font-display text-xl font-semibold uppercase text-chalk">Categorías</h3>
          </div>
          <button type="button" onClick={() => setFiltersOpen(false)} className="rounded-lg p-2 text-slate2 hover:bg-iron-900 hover:text-chalk" aria-label="Cerrar filtros">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => { setCategory(item); setFiltersOpen(false); }}
              className={`flex w-full items-center justify-between rounded-xl px-5 py-3 text-left text-sm transition ${category === item ? 'bg-ember-500 font-bold text-iron-950' : 'border border-transparent text-slate2 hover:border-iron-800 hover:bg-iron-900 hover:text-chalk'}`}
            >
              {item}
              <span className={`h-2 w-2 rounded-full ${category === item ? 'bg-iron-950' : 'bg-iron-700'}`} />
            </button>
          ))}
        </div>
      </aside>

      <div className="reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-iron-700 bg-iron-900 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/50 hover:shadow-xl hover:shadow-ember-500/10">
            <div className="h-52 overflow-hidden bg-iron-800">
              <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ember-500">{item.category}</p>
              <h3 className="mt-1.5 font-display text-xl font-medium text-chalk transition group-hover:text-ember-400">{item.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate2">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
