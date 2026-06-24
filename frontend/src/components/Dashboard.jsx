import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboardStats, getMaquinas, createMaquina, updateMaquina, deleteMaquina } from '../api/api';
import StatCard from './StatCard';

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [machines, setMachines] = useState([]);
  const [activeTab, setActiveTab] = useState('stats');
  const [error, setError] = useState(null);

  // Estados del Formulario (Agregar / Editar)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    categoria: '',
    descripcion: '',
    imagen_url: '',
    disponible: true,
  });
  const [formError, setFormError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const refreshData = () => {
    getDashboardStats()
      .then(setStats)
      .catch((err) => setError(err.message));
    getMaquinas()
      .then(setMachines)
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/login');
    } else {
      refreshData();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/login');
  };


  const handleAddClick = () => {
    setFormData({
      id: null,
      nombre: '',
      categoria: '',
      descripcion: '',
      imagen_url: '',
      disponible: true,
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (m) => {
    setFormData({
      id: m.id,
      nombre: m.nombre,
      categoria: m.categoria,
      descripcion: m.descripcion || '',
      imagen_url: m.imagen_url || '',
      disponible: m.disponible ? true : false,
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    try {
      if (formData.id) {
        await updateMaquina(formData.id, {
          nombre: formData.nombre,
          categoria: formData.categoria,
          descripcion: formData.descripcion,
          imagen_url: formData.imagen_url,
          disponible: formData.disponible,
        });
      } else {
        await createMaquina({
          nombre: formData.nombre,
          categoria: formData.categoria,
          descripcion: formData.descripcion,
          imagen_url: formData.imagen_url,
          disponible: formData.disponible,
        });
      }
      setIsModalOpen(false);
      refreshData();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      await deleteMaquina(deletingId);
      setDeletingId(null);
      refreshData();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-iron-850 pb-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
            Panel administrativo
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-chalk">Dashboard</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-iron-900 border border-iron-800 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-slate2">Admin: <span className="text-chalk font-semibold">{localStorage.getItem('admin_user') || 'admin'}</span></span>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-iron-700 hover:border-red-500/50 hover:bg-red-500/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate2 hover:text-red-500 transition-all duration-300 active:scale-95"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-4 font-body text-ember-400">
          No se pudo conectar con el servidor ({error}). Verifica que el backend (Node.js)
          y MySQL (XAMPP) estén corriendo.
        </p>
      )}

      {/* Sistema de Pestañas */}
      <div className="mt-6 flex border-b border-iron-800">
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
            activeTab === 'stats'
              ? 'border-ember-500 text-ember-500'
              : 'border-transparent text-slate2 hover:text-chalk'
          }`}
        >
          Estadísticas
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
            activeTab === 'admin'
              ? 'border-ember-500 text-ember-500'
              : 'border-transparent text-slate2 hover:text-chalk'
          }`}
        >
          Administrar Máquinas
        </button>
      </div>

      {/* Pestaña 1: Estadísticas */}
      {activeTab === 'stats' && (
        <>
          {!stats && !error && (
            <p className="mt-4 font-body text-slate2 animate-pulse">Cargando estadísticas…</p>
          )}

          {stats && (
            <>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard label="Máquinas totales" value={stats.totalMaquinas} />
                <StatCard label="Disponibles" value={stats.disponibles} />
                <StatCard label="Miembros" value={stats.totalUsuarios} />
                <StatCard label="Membresías Premium" value={stats.membresiasPremium} />
              </div>

              <div className="mt-10 rounded-2xl border border-iron-700 bg-iron-900 p-6">
                <h3 className="font-display text-lg uppercase text-chalk">Máquinas por categoría</h3>
                <div className="mt-5 space-y-4">
                  {stats.porCategoria.map((cat) => {
                    const porcentaje = Math.round((cat.cantidad / stats.totalMaquinas) * 100);
                    return (
                      <div key={cat.categoria}>
                        <div className="mb-1 flex justify-between font-body text-sm text-slate2">
                          <span>{cat.categoria}</span>
                          <span className="font-mono text-chalk">{cat.cantidad}</span>
                        </div>
                        <div className="plate-bar">
                          <div style={{ width: `${porcentaje}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* Pestaña 2: Administrar Máquinas */}
      {activeTab === 'admin' && (
        <>
          <div className="mt-8 flex justify-between items-center">
            <h3 className="font-display text-lg uppercase text-chalk">Catálogo de Máquinas</h3>
            <button
              onClick={handleAddClick}
              className="flex items-center gap-2 rounded-xl bg-ember-500 px-4 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-iron-950 hover:bg-ember-600 transition-all shadow-md active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Agregar Máquina</span>
            </button>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-iron-700 bg-iron-900">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-iron-700 bg-iron-950 font-mono text-[11px] uppercase tracking-wider text-slate2">
                    <th className="px-6 py-4">Imagen</th>
                    <th className="px-6 py-4">Nombre</th>
                    <th className="px-6 py-4">Categoría</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-iron-800 font-body text-sm text-chalk">
                  {machines.length === 0 && (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-slate2">
                        No hay máquinas registradas en la base de datos.
                      </td>
                    </tr>
                  )}
                  {machines.map((m) => (
                    <tr key={m.id} className="hover:bg-iron-800/40 transition-colors">
                      <td className="px-6 py-4">
                        <img
                          src={m.imagen_url}
                          alt={m.nombre}
                          className="h-10 w-16 rounded object-cover bg-iron-800"
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://via.placeholder.com/600x400/272220/9c948b?text=Sin+imagen';
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold">{m.nombre}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-iron-800 px-2.5 py-0.5 text-xs text-slate2 border border-iron-700">
                          {m.categoria}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            m.disponible
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : 'bg-iron-700/50 text-slate2 border border-iron-600/30'
                          }`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${m.disponible ? 'bg-green-400' : 'bg-slate2'}`} />
                          {m.disponible ? 'Disponible' : 'En uso'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(m)}
                            className="rounded-lg p-2 text-slate2 hover:bg-iron-800 hover:text-ember-500 transition-colors"
                            title="Editar"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => setDeletingId(m.id)}
                            className="rounded-lg p-2 text-slate2 hover:bg-iron-800 hover:text-red-500 transition-colors"
                            title="Eliminar"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Modal de Agregar / Editar */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-iron-700 bg-iron-900 p-6 shadow-2xl animate-fade-in">
            <h3 className="font-display text-xl font-semibold uppercase text-chalk mb-4 border-b border-iron-800 pb-3">
              {formData.id ? 'Editar Máquina' : 'Agregar Nueva Máquina'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-slate2 mb-1.5">Nombre de la Máquina</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full rounded-xl border border-iron-700 bg-iron-950 px-4 py-3 text-sm text-chalk focus:border-ember-500 focus:outline-none transition-all"
                  placeholder="Ej. Caminadora Pro 3000"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-slate2 mb-1.5">Categoría</label>
                <input
                  type="text"
                  required
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                  className="w-full rounded-xl border border-iron-700 bg-iron-950 px-4 py-3 text-sm text-chalk focus:border-ember-500 focus:outline-none transition-all"
                  placeholder="Cardio, Fuerza, Peso Libre..."
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-slate2 mb-1.5">Descripción</label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  className="w-full h-24 rounded-xl border border-iron-700 bg-iron-950 px-4 py-3 text-sm text-chalk focus:border-ember-500 focus:outline-none transition-all resize-none"
                  placeholder="Descripción de la máquina..."
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-slate2 mb-1.5">URL de la Imagen</label>
                <input
                  type="text"
                  value={formData.imagen_url}
                  onChange={(e) => setFormData({ ...formData, imagen_url: e.target.value })}
                  className="w-full rounded-xl border border-iron-700 bg-iron-950 px-4 py-3 text-sm text-chalk focus:border-ember-500 focus:outline-none transition-all"
                  placeholder="https://images.unsplash.com/... o /uploads/nombre.jpg"
                />
              </div>
              <div className="flex items-center gap-3 py-2">
                <input
                  type="checkbox"
                  id="disponible"
                  checked={formData.disponible}
                  onChange={(e) => setFormData({ ...formData, disponible: e.target.checked })}
                  className="h-4 w-4 rounded border-iron-700 bg-iron-950 text-ember-500 focus:ring-ember-500 focus:ring-offset-iron-950"
                />
                <label htmlFor="disponible" className="font-body text-sm text-chalk cursor-pointer select-none">
                  Disponible para uso inmediato
                </label>
              </div>

              {formError && <p className="font-body text-xs text-ember-400">{formError}</p>}

              <div className="flex justify-end gap-3 pt-4 border-t border-iron-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl px-5 py-2.5 font-body text-sm text-slate2 hover:bg-iron-850 hover:text-chalk transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-ember-500 px-5 py-2.5 font-body text-sm font-semibold text-iron-950 hover:bg-ember-600 transition-all shadow-lg shadow-ember-500/20"
                >
                  {formData.id ? 'Guardar Cambios' : 'Crear Máquina'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmación de Eliminación */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-2xl border border-iron-700 bg-iron-900 p-6 shadow-2xl">
            <h3 className="font-display text-lg font-semibold uppercase text-chalk mb-2">¿Eliminar Máquina?</h3>
            <p className="font-body text-sm text-slate2 mb-6 leading-relaxed">
              Esta acción es irreversible y eliminará el registro de la base de datos de manera permanente.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeletingId(null)}
                className="rounded-xl px-4 py-2 font-body text-sm text-slate2 hover:bg-iron-850 hover:text-chalk transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="rounded-xl bg-red-500 px-4 py-2 font-body text-sm font-semibold text-white hover:bg-red-600 transition-all shadow-lg shadow-red-500/10"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
