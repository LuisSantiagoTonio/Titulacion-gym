import { useState } from 'react';
import SocialLinks from './SocialLinks';
const CONTACT_EMAIL = 'santiagol59776@gmail.com';
const WHATSAPP_NUMBER = '525620770243';
const WHATSAPP_DISPLAY = '+52 56 2077 0243';

async function sendContacto(nombre, email, mensaje) {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: nombre,
      email,
      message: mensaje,
      _subject: `Nuevo mensaje de contacto VIKINGOS GYM - ${nombre}`,
      _replyto: email,
      _template: 'box',
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || (data.success !== true && data.success !== 'true')) {
    throw new Error(data.message || 'No se pudo enviar el correo. Intenta de nuevo.');
  }

  return data;
}

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


  const handleWhatsApp = (e) => {
    const form = e.currentTarget.form;

    // Conserva la validación de los campos requeridos y del formato del correo.
    if (!form?.reportValidity()) return;

    const textoWhatsApp = [
      'Hola, quiero solicitar información de Vikingos Gym.',
      '',
      `Nombre: ${nombre.trim()}`,
      `Correo: ${email.trim()}`,
      '',
      'Mensaje:',
      mensaje.trim(),
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setStatus({
      type: 'success',
      message: 'Se abrió WhatsApp con tu mensaje listo para enviarse.',
    });
  };

  return (
    <section id="contacto-section" className="reveal relative overflow-hidden border-t border-iron-800 bg-iron-950 py-20">
      {/* Elemento de diseño de fondo */}
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-ember-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 top-1/3 h-72 w-72 rounded-full bg-ember-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Información del Gimnasio (Lado izquierdo) */}
          <div className="lg:col-span-5 flex flex-col justify-between animate-fade-up">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-500 animate-ember-pulse" />
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
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500 transition-all duration-300 group-hover:border-ember-500/50 group-hover:bg-ember-500/10 group-hover:-translate-y-0.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">Ubicación</h4>
                  <p className="mt-1 font-body text-sm text-slate2">Canalejas, Jilotepec, Estado de México</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500 transition-all duration-300 group-hover:border-ember-500/50 group-hover:bg-ember-500/10 group-hover:-translate-y-0.5">
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


              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500 transition-all duration-300 group-hover:border-ember-500/50 group-hover:bg-ember-500/10 group-hover:-translate-y-0.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 4.5A7.5 7.5 0 0119.5 11c0 4.142-3.358 7.5-7.5 7.5a7.47 7.47 0 01-3.54-.887L4.5 19.5l1.307-4.093A7.5 7.5 0 018.5 4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.25 8.75c.35 2.4 2.1 4.15 4.5 4.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">WhatsApp</h4>
                  <p className="mt-1 font-body text-sm text-slate2">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ember-500 transition-colors"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iron-700 bg-iron-900 text-ember-500 transition-all duration-300 group-hover:border-ember-500/50 group-hover:bg-ember-500/10 group-hover:-translate-y-0.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-chalk font-semibold">Horario de Atención</h4>
                  <div className="mt-2 space-y-2">
                    <div>
                      <h5 className="font-mono text-[10px] uppercase tracking-wider text-ember-500">Lunes a Viernes</h5>
                      <h6 className="font-body text-sm text-slate2">6:00 AM – 10:00 PM</h6>
                    </div>
                    <div>
                      <h5 className="font-mono text-[10px] uppercase tracking-wider text-ember-500">Sábados y Domingos</h5>
                      <h6 className="font-body text-sm text-slate2">8:00 AM – 4:00 PM</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-iron-700 bg-iron-900/40 p-5">
                <div className="mb-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-chalk">Síguenos en redes</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate2">
                    Conoce novedades, rutinas y contenido de Vikingos Gym.
                  </p>
                </div>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Formulario (Lado derecho) */}
          <div className="lg:col-span-7 animate-fade-up [animation-delay:120ms]">
            <div className="rounded-2xl border border-iron-700 bg-iron-900/40 backdrop-blur-md p-8 shadow-2xl transition-colors duration-300 hover:border-iron-600">
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
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:ring-2 focus:ring-ember-500/20 focus:outline-none transition-all font-body hover:border-iron-600"
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
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:ring-2 focus:ring-ember-500/20 focus:outline-none transition-all font-body hover:border-iron-600"
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
                    className="w-full rounded-xl border border-iron-700 bg-iron-950/70 px-4 py-3.5 text-sm text-chalk placeholder-iron-600 focus:border-ember-500 focus:ring-2 focus:ring-ember-500/20 focus:outline-none transition-all font-body hover:border-iron-600 resize-none"
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

                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate2">
                    Elige cómo deseas enviar tu mensaje
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-ember-500 px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-iron-950 hover:bg-ember-600 transition-all shadow-lg shadow-ember-500/10 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-iron-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Enviar por correo</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      disabled={loading}
                      className="w-full rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-emerald-400 hover:bg-emerald-500 hover:text-iron-950 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 4.5A7.5 7.5 0 0119.5 11c0 4.142-3.358 7.5-7.5 7.5a7.47 7.47 0 01-3.54-.887L4.5 19.5l1.307-4.093A7.5 7.5 0 018.5 4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.25 8.75c.35 2.4 2.1 4.15 4.5 4.5" />
                      </svg>
                      <span>Enviar por WhatsApp</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">¿Cómo llegar?</p>
            <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-chalk">
              Nuestra Ubicación
            </h3>
            <p className="mt-1 font-body text-sm text-slate2">Canalejas, Jilotepec, Estado de México</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-iron-700 shadow-2xl relative">
            {/* Overlay de color para integrar el mapa al tema oscuro */}
            <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-iron-700" />
            <iframe
              title="Ubicación Vikingos Gym — Canalejas, Jilotepec"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8!2d-99.5353!3d20.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e4f30000001%3A0x0!2sCanalejas%2C+Jilotepec%2C+M%C3%A9x.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="380"
              style={{ border: 0, filter: 'grayscale(60%) contrast(1.1) brightness(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          {/* Botón para abrir en Google Maps */}
          <div className="mt-4 flex justify-end">
            <a
              href="https://www.google.com/maps/search/Vikingos+Gym+Canalejas+Jilotepec+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-iron-700 bg-iron-900 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-chalk hover:border-ember-500 hover:text-ember-500 transition-all duration-300 active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
