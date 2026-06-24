import { useState } from 'react';
import { sendContacto } from '../api/api';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await sendContacto(nombre, email, mensaje);
      setStatus({
        type: 'success',
        message: '¡Tu mensaje ha sido enviado! Nos pondremos en contacto contigo pronto.',
      });
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Hubo un error al enviar el correo. Por favor inténtalo más tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto-section" className="relative overflow-hidden border-t border-iron-800 bg-iron-950 py-20">
      {/* Elemento de diseño de fondo */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-ember-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 top-1/3 h-72 w-72 rounded-full bg-ember-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Información del Gimnasio (Lado izquierdo) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
                ¿Tienes dudas?
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-chalk sm:text-5xl">
                Contáctanos
              </h2>
              <p className="mt-6 text-slate2 font-body leading-relaxed max-w-md">
                Si deseas conocer más sobre nuestras membresías, entrenadores, equipo o tienes alguna sugerencia, envíanos tu mensaje. Estamos para ayudarte.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">Ubicación</h4>
                  <p className="mt-1 font-body text-sm text-slate2">Av. Principal de Hierro, Local #204, Ciudad de Acero</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">Correo Electrónico</h4>
                  <p className="mt-1 font-body text-sm text-slate2">
                    <a href="mailto:santiagol59776@gmail.com" className="hover:text-ember-500 transition-colors">
                      santiagol59776@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">Horario de Atención</h4>
                  <p className="mt-1 font-body text-sm text-slate2">Lunes a Viernes: 6:00 AM - 10:00 PM <br /> Sábados y Domingos: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario (Lado derecho) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-iron-700 bg-iron-900/40 backdrop-blur-md p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contacto-nombre" className="block font-mono text-[10px] uppercase tracking-widest text-slate2 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    id="contacto-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={loading}
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:outline-none transition-all font-body"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="contacto-email" className="block font-mono text-[10px] uppercase tracking-widest text-slate2 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    id="contacto-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:outline-none transition-all font-body"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div>
                  <label htmlFor="contacto-mensaje" className="block font-mono text-[10px] uppercase tracking-widest text-slate2 mb-2">
                    Pregunta o Comentario
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    required
                    rows={5}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    disabled={loading}
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:outline-none transition-all font-body resize-none"
                    placeholder="Escribe tu mensaje o pregunta aquí..."
                  />
                </div>

                {status.type && (
                  <div
                    className={`rounded-xl border px-4 py-3.5 text-xs font-body leading-relaxed transition-all duration-300 ${
                      status.type === 'success'
                        ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400'
                        : 'border-ember-500/20 bg-ember-500/5 text-ember-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-xl bg-ember-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-iron-950 hover:bg-ember-600 transition-all shadow-lg shadow-ember-500/10 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-iron-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
