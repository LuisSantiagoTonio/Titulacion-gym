import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/api';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await login(usuario, password);
      localStorage.setItem('admin_token', data.token);
      localStorage.setItem('admin_user', data.usuario);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-iron-950 px-4 py-12 relative overflow-hidden">
      {/* Elementos decorativos de fondo (brillo difuminado) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-ember-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-ember-600/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Cabecera / Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block font-display text-4xl font-extrabold tracking-wider text-chalk hover:scale-105 transition-transform duration-300">
            HIERRO<span className="text-ember-500">GYM</span>
          </Link>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-slate2">
            Panel de Administración
          </p>
        </div>

        {/* Tarjeta de Login */}
        <div className="rounded-2xl border border-iron-700 bg-iron-900/80 backdrop-blur-md p-8 shadow-2xl">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-chalk text-center mb-6">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="usuario" className="block font-mono text-[10px] uppercase tracking-widest text-slate2 mb-2">
                Usuario
              </label>
              <input
                id="usuario"
                type="text"
                required
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                disabled={loading}
                className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:outline-none transition-all font-body"
                placeholder="Ej. admin"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-mono text-[10px] uppercase tracking-widest text-slate2 mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:outline-none transition-all font-body"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-ember-500/20 bg-ember-500/5 px-4 py-3.5 text-xs text-ember-400 font-body leading-relaxed">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-ember-500 py-4 font-display text-sm font-bold uppercase tracking-widest text-iron-950 hover:bg-ember-600 transition-all shadow-lg shadow-ember-500/10 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-iron-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Verificando...</span>
                </>
              ) : (
                'Entrar al Dashboard'
              )}
            </button>
          </form>

          {/* Enlace para volver a la web principal */}
          <div className="mt-6 text-center border-t border-iron-800 pt-5">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate2 hover:text-chalk transition-colors group">
              <svg className="h-3 w-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Volver a la Web Principal</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
