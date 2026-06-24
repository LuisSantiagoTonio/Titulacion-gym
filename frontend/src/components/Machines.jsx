import { useEffect, useState } from 'react';
import { getMaquinas } from '../api/api';

export default function Machines() {
  const [maquinas, setMaquinas] = useState([]);
  const [categoria, setCategoria] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getMaquinas()
      .then(setMaquinas)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const categorias = ['Todas', ...new Set(maquinas.map((m) => m.categoria))];
  const visibles =
    categoria === 'Todas' ? maquinas : maquinas.filter((m) => m.categoria === categoria);

  return (
    <section id="maquinas-section" className="mx-auto max-w-6xl px-6 py-16">
      {/* Cabecera con título y botón flotante */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-iron-800 pb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
            Equipo del gimnasio
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-chalk">
            Máquinas disponibles
          </h2>
        </div>

        {!loading && !error && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center justify-center gap-2.5 rounded-xl border border-iron-700 bg-iron-900 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-chalk hover:border-ember-500 hover:text-ember-500 hover:bg-iron-950 transition-all duration-300 shadow-md group active:scale-95"
          >
            <svg
              className="h-4 w-4 text-ember-500 group-hover:rotate-180 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 3m0-3a2 2 0 110 3m-9 8h10M3 6h4m1 1a2 2 0 100-3m0 3a2 2 0 110-3m13 16h-4m1 1a2 2 0 100-3m0 3a2 2 0 110-3m-9 8h10"
              />
            </svg>
            <span>Categorías: <span className="text-ember-500 font-bold">{categoria}</span></span>
          </button>
        )}
      </div>

      {/* Fondo oscuro desenfocado cuando el panel flotante está abierto */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Panel flotante lateral izquierdo (Drawer) */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-iron-950/98 border-r border-iron-800 p-6 shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-iron-800 pb-4 mb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">Filtrar equipo</p>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wider text-chalk">
              Categorías
            </h3>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-2 text-slate2 hover:bg-iron-900 hover:text-chalk transition-all active:scale-90"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoria(cat);
                setIsSidebarOpen(false);
              }}
              className={`w-full rounded-xl px-5 py-3.5 text-left font-body text-sm transition-all duration-200 flex justify-between items-center group ${
                categoria === cat
                  ? 'bg-ember-500 text-iron-950 font-bold shadow-lg shadow-ember-500/20'
                  : 'text-slate2 hover:bg-iron-900 hover:text-chalk border border-transparent hover:border-iron-800'
              }`}
            >
              <span>{cat}</span>
              {categoria === cat ? (
                <span className="h-2 w-2 rounded-full bg-iron-950" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-iron-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Sección principal de las máquinas */}
      <div className="w-full">
        {loading && (
          <p className="font-body text-slate2">Cargando máquinas desde la base de datos…</p>
        )}

        {error && (
          <p className="font-body text-ember-400">
            No se pudo conectar con el servidor ({error}). Verifica que el backend (Node.js)
            y MySQL (XAMPP) estén corriendo.
          </p>
        )}

        {!loading && !error && visibles.length === 0 && (
          <p className="font-body text-slate2">No hay máquinas registradas en esta categoría.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((m) => (
            <article
              key={m.id}
              className="group overflow-hidden rounded-2xl border border-iron-700 bg-iron-900 hover:border-ember-500/50 hover:shadow-xl hover:shadow-ember-500/5 transition-all duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden bg-iron-800">
                <img
                  src={m.imagen_url}
                  alt={m.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://via.placeholder.com/600x400/272220/9c948b?text=Sin+imagen';
                  }}
                />
                <span
                  className={`absolute right-3 top-3 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                    m.disponible
                      ? 'bg-green-500/95 text-iron-950'
                      : 'bg-iron-700 text-slate2'
                  }`}
                >
                  {m.disponible ? 'Disponible' : 'En uso'}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-ember-500 font-semibold">
                  {m.categoria}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-medium text-chalk group-hover:text-ember-400 transition-colors">{m.nombre}</h3>
                <p className="mt-2.5 font-body text-sm text-slate2 line-clamp-3 leading-relaxed">{m.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
