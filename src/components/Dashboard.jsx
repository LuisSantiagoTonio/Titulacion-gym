import { useState } from 'react';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('stats');

    // Datos para la tabla de horarios
    const HORARIOS = [
        { hora: '06:00 - 07:30', lunes: 'Crossfit', martes: 'Spinning', miercoles: 'Crossfit', jueves: 'Spinning', viernes: 'Crossfit', sabado: 'Funcional' },
        { hora: '08:00 - 09:30', lunes: 'Funcional', martes: 'Yoga', miercoles: 'Funcional', jueves: 'Yoga', viernes: 'Funcional', sabado: 'Calistenia' },
        { hora: '17:00 - 18:30', lunes: 'Boxeo', martes: 'Hipertrofia', miercoles: 'Boxeo', jueves: 'Hipertrofia', viernes: 'Boxeo', sabado: 'Cerrado' },
        { hora: '19:00 - 20:30', lunes: 'Crossfit', martes: 'Spinning', miercoles: 'Crossfit', jueves: 'Spinning', viernes: 'Crossfit', sabado: 'Cerrado' },
    ];

    // Datos para la gráfica de afluencia (porcentaje de capacidad por hora)
    const AFLUENCIA_HORAS = [
        { hora: '6am', valor: 40 },
        { hora: '8am', valor: 75 },
        { hora: '10am', valor: 30 },
        { hora: '12pm', valor: 20 },
        { hora: '2pm', valor: 15 },
        { hora: '4pm', valor: 50 },
        { hora: '6pm', valor: 90 },
        { hora: '8pm', valor: 95 },
        { hora: '10pm', valor: 35 },
    ];

    // Datos para el crecimiento de miembros (últimos 6 meses)
    const CRECIMIENTO_MIEMBROS = [
        { mes: 'Ene', miembros: 120 },
        { mes: 'Feb', miembros: 150 },
        { mes: 'Mar', miembros: 190 },
        { mes: 'Abr', miembros: 240 },
        { mes: 'May', miembros: 310 },
        { mes: 'Jun', miembros: 380 },
    ];

    return (
        <section id="dashboard-section" className="reveal mx-auto max-w-6xl px-6 py-16">
            {/* Cabecera */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-iron-800 pb-6">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
                        Panel de Control
                    </p>
                    <h2 className="font-display text-4xl font-semibold uppercase tracking-wide text-chalk">
                        Estadísticas & Guías
                    </h2>
                </div>

                {/* Selector de Pestañas */}
                <div className="flex rounded-xl border border-iron-700 bg-iron-900 p-1">
                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${activeTab === 'stats'
                            ? 'bg-ember-500 text-iron-950 font-bold'
                            : 'text-slate2 hover:text-chalk'
                            }`}
                    >
                        Estadísticas
                    </button>
                    <button
                        onClick={() => setActiveTab('guides')}
                        className={`rounded-lg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${activeTab === 'guides'
                            ? 'bg-ember-500 text-iron-950 font-bold'
                            : 'text-slate2 hover:text-chalk'
                            }`}
                    >
                        Guías y Reglas
                    </button>
                </div>
            </div>

            {activeTab === 'stats' ? (
                <div className="space-y-12">
                    {/* Sección de Gráficas */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Gráfica 1: Afluencia de personas */}
                        <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40">
                            <h3 className="font-display text-lg font-medium text-chalk mb-2">
                                Afluencia de Personas por Hora
                            </h3>
                            <p className="font-body text-xs text-slate2 mb-6">
                                Porcentaje de capacidad promedio ocupada a lo largo del día.
                            </p>

                            {/* Gráfica de Barras SVG */}
                            <div className="relative h-64 w-full flex items-end justify-between gap-2 pt-6 px-2">
                                {AFLUENCIA_HORAS.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center flex-1 group h-full justify-end">
                                        <div className="relative w-full flex justify-center">
                                            {/* Tooltip al hacer hover */}
                                            <span className="absolute -top-8 scale-0 transition-all rounded bg-iron-950 border border-iron-700 px-2 py-1 text-[10px] text-ember-400 group-hover:scale-100 font-mono">
                                                {item.valor}%
                                            </span>
                                        </div>
                                        {/* Barra */}
                                        <div
                                            style={{ height: `${item.valor}%` }}
                                            className="w-full rounded-t-md bg-gradient-to-t from-ember-600 to-ember-400 group-hover:from-ember-500 group-hover:to-ember-300 transition-all duration-500 shadow-lg shadow-ember-500/10"
                                        />
                                        <span className="mt-2 font-mono text-[10px] text-slate2">
                                            {item.hora}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gráfica 2: Crecimiento de Miembros */}
                        <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40">
                            <h3 className="font-display text-lg font-medium text-chalk mb-2">
                                Crecimiento de Miembros
                            </h3>
                            <p className="font-body text-xs text-slate2 mb-6">
                                Evolución de la comunidad de Vikingos Gym en los últimos 6 meses.
                            </p>

                            {/* Gráfica de Línea SVG */}
                            <div className="relative h-64 w-full pt-6">
                                <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    {/* Grid lines */}
                                    <line x1="0" y1="50" x2="500" y2="50" stroke="#272220" strokeDasharray="4" />
                                    <line x1="0" y1="100" x2="500" y2="100" stroke="#272220" strokeDasharray="4" />
                                    <line x1="0" y1="150" x2="500" y2="150" stroke="#272220" strokeDasharray="4" />

                                    {/* Curva de datos */}
                                    <path
                                        d="M 20 160 Q 100 140 180 120 T 340 70 T 480 30"
                                        fill="none"
                                        stroke="#f97316"
                                        strokeWidth="3"
                                        className="drop-shadow-[0_4px_10px_rgba(249,115,22,0.3)]"
                                    />

                                    {/* Puntos de datos */}
                                    <circle cx="20" cy="160" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                    <circle cx="112" cy="148" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                    <circle cx="204" cy="132" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                    <circle cx="296" cy="108" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                    <circle cx="388" cy="80" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                    <circle cx="480" cy="30" r="5" fill="#f97316" className="hover:r-7 transition-all cursor-pointer" />
                                </svg>

                                {/* Etiquetas de los meses */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
                                    {CRECIMIENTO_MIEMBROS.map((item, idx) => (
                                        <div key={idx} className="text-center">
                                            <span className="font-mono text-[10px] text-slate2 block">{item.mes}</span>
                                            <span className="font-mono text-[9px] text-ember-500 font-bold block">{item.miembros}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla de Horarios */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40 overflow-hidden">
                        <h3 className="font-display text-lg font-medium text-chalk mb-2">
                            Horario de Clases Semanal
                        </h3>
                        <p className="font-body text-xs text-slate2 mb-6">
                            Planifica tu semana con nuestras clases grupales guiadas por profesionales.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-iron-800 font-mono text-xs uppercase tracking-wider text-ember-500">
                                        <th className="py-3 px-4">Hora</th>
                                        <th className="py-3 px-4">Lunes</th>
                                        <th className="py-3 px-4">Martes</th>
                                        <th className="py-3 px-4">Miércoles</th>
                                        <th className="py-3 px-4">Jueves</th>
                                        <th className="py-3 px-4">Viernes</th>
                                        <th className="py-3 px-4">Sábado</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-iron-800/50 font-body text-sm text-chalk">
                                    {HORARIOS.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-iron-950/40 transition-colors">
                                            <td className="py-4 px-4 font-mono text-xs font-semibold text-slate2">{row.hora}</td>
                                            <td className="py-4 px-4">{row.lunes}</td>
                                            <td className="py-4 px-4">{row.martes}</td>
                                            <td className="py-4 px-4">{row.miercoles}</td>
                                            <td className="py-4 px-4">{row.jueves}</td>
                                            <td className="py-4 px-4">{row.viernes}</td>
                                            <td className="py-4 px-4 text-slate2">{row.sabado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Lista Ordenada: Pasos para iniciar */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40">
                        <h3 className="font-display text-lg font-medium text-chalk mb-2">
                            Guía de Inicio Rápido
                        </h3>
                        <p className="font-body text-xs text-slate2 mb-6">
                            Sigue estos pasos ordenados para comenzar tu entrenamiento de forma segura y efectiva.
                        </p>

                        <ol className="space-y-4 list-none counter-reset-item">
                            {[
                                { titulo: 'Calentamiento Dinámico', desc: 'Realiza 5-10 minutos de movilidad articular y cardio suave para preparar tus músculos.' },
                                { titulo: 'Entrenamiento de Fuerza', desc: 'Sigue tu rutina enfocándote en la técnica correcta antes de subir el peso.' },
                                { titulo: 'Cardio Opcional', desc: 'Finaliza con 15-20 minutos de ejercicio cardiovascular si tu objetivo es resistencia o quema de grasa.' },
                                { titulo: 'Estiramiento Estático', desc: 'Dedica unos minutos a estirar los grupos musculares trabajados para mejorar la recuperación.' },
                                { titulo: 'Hidratación & Nutrición', desc: 'Consume agua durante todo el entrenamiento y una comida rica en proteínas al finalizar.' }
                            ].map((step, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember-500 font-mono text-xs font-bold text-iron-950">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-display text-sm font-medium text-chalk">{step.titulo}</h4>
                                        <p className="mt-1 font-body text-xs text-slate2 leading-relaxed">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Lista Desordenada: Reglas del Gimnasio */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40">
                        <h3 className="font-display text-lg font-medium text-chalk mb-2">
                            Reglamento Interno
                        </h3>
                        <p className="font-body text-xs text-slate2 mb-6">
                            Ayúdanos a mantener un ambiente limpio, seguro y motivador para todos los vikingos.
                        </p>

                        <ul className="space-y-4">
                            {[
                                { titulo: 'Usa toalla personal', desc: 'Es obligatorio colocar una toalla sobre los bancos y máquinas durante su uso.' },
                                { titulo: 'Regresa el equipo a su lugar', desc: 'Al terminar de usar mancuernas, discos o barras, colócalos en sus respectivos racks.' },
                                { titulo: 'Comparte las máquinas', desc: 'Permite que otros miembros alternen contigo durante tus tiempos de descanso.' },
                                { titulo: 'Usa calzado adecuado', desc: 'Es obligatorio entrenar con tenis deportivos cerrados y limpios.' },
                                { titulo: 'Respeta a los demás', desc: 'Mantén un trato cordial con los entrenadores y compañeros de entrenamiento.' }
                            ].map((rule, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                                    <div>
                                        <h4 className="font-display text-sm font-medium text-chalk">{rule.titulo}</h4>
                                        <p className="mt-1 font-body text-xs text-slate2 leading-relaxed">{rule.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
