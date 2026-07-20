import { useState } from 'react';

const HORARIOS = [
  { hora: '06:00 - 07:30', lunes: 'Crossfit', martes: 'Spinning', miercoles: 'Crossfit', jueves: 'Spinning', viernes: 'Crossfit', sabado: 'Funcional' },
  { hora: '08:00 - 09:30', lunes: 'Funcional', martes: 'Yoga', miercoles: 'Funcional', jueves: 'Yoga', viernes: 'Funcional', sabado: 'Calistenia' },
  { hora: '17:00 - 18:30', lunes: 'Boxeo', martes: 'Hipertrofia', miercoles: 'Boxeo', jueves: 'Hipertrofia', viernes: 'Boxeo', sabado: 'Cerrado' },
  { hora: '19:00 - 20:30', lunes: 'Crossfit', martes: 'Spinning', miercoles: 'Crossfit', jueves: 'Spinning', viernes: 'Crossfit', sabado: 'Cerrado' },
];

const GUIDE_STEPS = [
  { title: 'Calentamiento dinámico', description: 'Realiza de 5 a 10 minutos de movilidad articular y cardio suave.' },
  { title: 'Prioriza la técnica', description: 'Aprende correctamente cada movimiento antes de aumentar la carga.' },
  { title: 'Entrena de forma progresiva', description: 'Aumenta el volumen o el peso gradualmente, respetando tus capacidades.' },
  { title: 'Recuperación', description: 'Incluye pausas, hidratación y descanso suficiente entre sesiones.' },
  { title: 'Consulta a un profesional', description: 'Busca orientación cuando tengas dudas, molestias o una condición médica.' },
];

const RULES = [
  'Usa una toalla personal sobre bancos y máquinas.',
  'Regresa mancuernas, discos y accesorios a su lugar.',
  'Comparte el equipo durante los descansos.',
  'Utiliza ropa y calzado deportivo adecuados.',
  'Mantén un trato respetuoso con miembros y entrenadores.',
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <section id="horarios-section" className="reveal mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex flex-col gap-5 border-b border-iron-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Información útil</p>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">Horarios y guías</h2>
        </div>
        <div className="flex rounded-xl border border-iron-700 bg-iron-900 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('schedule')}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition ${activeTab === 'schedule' ? 'bg-ember-500 text-iron-950' : 'text-slate2 hover:text-chalk'}`}
          >
            Horarios
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guides')}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition ${activeTab === 'guides' ? 'bg-ember-500 text-iron-950' : 'text-slate2 hover:text-chalk'}`}
          >
            Guías y reglas
          </button>
        </div>
      </div>

      {activeTab === 'schedule' ? (
        <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold uppercase text-chalk">Horario semanal de clases</h3>
              <p className="mt-1 text-sm text-slate2">Consulta disponibilidad antes de asistir, ya que los horarios pueden cambiar.</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ember-500">Información de referencia</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-iron-700 font-mono text-xs uppercase tracking-wider text-ember-500">
                  {['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((heading) => (
                    <th key={heading} className="px-4 py-3">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-iron-800 text-sm text-chalk">
                {HORARIOS.map((row) => (
                  <tr key={row.hora} className="transition hover:bg-iron-950/50">
                    <td className="px-4 py-4 font-mono text-xs font-semibold text-slate2">{row.hora}</td>
                    <td className="px-4 py-4">{row.lunes}</td>
                    <td className="px-4 py-4">{row.martes}</td>
                    <td className="px-4 py-4">{row.miercoles}</td>
                    <td className="px-4 py-4">{row.jueves}</td>
                    <td className="px-4 py-4">{row.viernes}</td>
                    <td className="px-4 py-4 text-slate2">{row.sabado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-iron-700 bg-iron-900 p-6">
            <h3 className="font-display text-xl font-semibold uppercase text-chalk">Guía de inicio</h3>
            <p className="mt-2 text-sm text-slate2">Pasos generales para comenzar una sesión de manera responsable.</p>
            <ol className="mt-6 space-y-5">
              {GUIDE_STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember-500 font-mono text-xs font-bold text-iron-950">{index + 1}</span>
                  <div>
                    <h4 className="font-display text-sm font-semibold uppercase text-chalk">{step.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate2">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-iron-700 bg-iron-900 p-6">
            <h3 className="font-display text-xl font-semibold uppercase text-chalk">Reglamento interno</h3>
            <p className="mt-2 text-sm text-slate2">Acciones básicas para conservar un ambiente seguro y ordenado.</p>
            <ul className="mt-6 space-y-5">
              {RULES.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-relaxed text-slate2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  {rule}
                </li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </section>
  );
}
