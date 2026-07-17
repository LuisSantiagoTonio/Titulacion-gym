export default function SobreNosotros() {
    return (
        <section id="nosotros-section" className="reveal border-t border-iron-800 bg-iron-950">
            <div className="mx-auto max-w-6xl px-6 py-16">

                {/* Cabecera */}
                <div className="mb-12 border-b border-iron-800 pb-6">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">
                        Quiénes somos
                    </p>
                    <h2 className="mt-1 font-display text-4xl font-semibold uppercase tracking-wide text-chalk">
                        Sobre Nosotros
                    </h2>
                    <p className="mt-4 max-w-2xl font-body text-slate2 leading-relaxed">
                        Vikingos Gym nació con el propósito de llevar el entrenamiento de alta calidad a la comunidad de Canalejas, Jilotepec. Somos más que un gimnasio: somos una comunidad de personas comprometidas con su salud y su superación personal.
                    </p>
                </div>

                {/* Misión y Visión */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
                    {/* Misión */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40 hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">Nuestra</p>
                                <h3 className="font-display text-2xl font-semibold uppercase text-chalk">Misión</h3>
                            </div>
                        </div>
                        <p className="font-body text-sm text-slate2 leading-relaxed">
                            Proporcionar un espacio activo, seguro y motivador donde cada persona pueda alcanzar sus metas de salud y condición física, sin importar su nivel de experiencia, con el apoyo de entrenadores calificados y equipo de primera.
                        </p>
                    </div>

                    {/* Visión */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40 hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 border border-ember-500/30 text-ember-500">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">Nuestra</p>
                                <h3 className="font-display text-2xl font-semibold uppercase text-chalk">Visión</h3>
                            </div>
                        </div>
                        <p className="font-body text-sm text-slate2 leading-relaxed">
                            Ser el gimnasio de referencia en la región de Jilotepec, reconocido por transformar vidas a través del deporte, la disciplina y una comunidad unida; expandiendo nuestra infraestructura y servicios para atender a más familias de la zona.
                        </p>
                    </div>
                </div>

                {/* Información adicional con listas */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* Lista Ordenada: Historia del Gimnasio */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40 hover:-translate-y-1">
                        <h4 className="font-display text-lg font-semibold uppercase text-chalk mb-1">
                            Nuestra Historia
                        </h4>
                        <p className="font-body text-xs text-slate2 mb-6">
                            Así fue como Vikingos Gym se convirtió en lo que es hoy.
                        </p>
                        <ol className="space-y-4">
                            {[
                                { año: '2018', hito: 'Fundación', desc: 'Vikingos Gym abre sus puertas con solo 10 máquinas y 3 entrenadores comprometidos con la comunidad.' },
                                { año: '2019', hito: 'Primera expansión', desc: 'Se agrega el área de cardio y spinning, duplicando la capacidad del gimnasio.' },
                                { año: '2021', hito: 'Renovación total', desc: 'Renovamos las instalaciones y adquirimos equipo de alto rendimiento para competencia.' },
                                { año: '2023', hito: 'Sistema digital', desc: 'Implementamos nuestro sistema de disponibilidad en línea para facilitar la experiencia de los miembros.' },
                                { año: '2025', hito: 'Comunidad activa', desc: 'Superamos los 400 miembros activos y lanzamos nuestras clases grupales nocturnas.' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember-500 font-mono text-xs font-bold text-iron-950">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-[10px] text-ember-500 font-semibold">{item.año}</span>
                                            <h5 className="font-display text-sm font-medium text-chalk">{item.hito}</h5>
                                        </div>
                                        <p className="mt-0.5 font-body text-xs text-slate2 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Lista Desordenada: Beneficios de ser miembro */}
                    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6 transition-all duration-300 hover:border-ember-500/40 hover:-translate-y-1">
                        <h4 className="font-display text-lg font-semibold uppercase text-chalk mb-1">
                            Beneficios de Ser Miembro
                        </h4>
                        <p className="font-body text-xs text-slate2 mb-6">
                            Todo lo que obtienes al unirte a la comunidad Vikingos Gym.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { titulo: 'Acceso ilimitado al gimnasio', desc: 'Entrena todos los días dentro de nuestro horario de atención sin restricciones.' },
                                { titulo: 'Plan de entrenamiento personalizado', desc: 'Al inscribirte, uno de nuestros entrenadores diseña un plan adaptado a tus objetivos.' },
                                { titulo: 'Clases grupales incluidas', desc: 'Acceso sin costo adicional a nuestras clases de Crossfit, Spinning, Yoga y más.' },
                                { titulo: 'Asesoría nutricional básica', desc: 'Orientación sobre hábitos alimenticios para complementar tu entrenamiento.' },
                                { titulo: 'Casilleros y regaderas', desc: 'Instalaciones limpias y seguras para que te puedas preparar antes o después del trabajo.' },
                                { titulo: 'Comunidad y motivación', desc: 'Forma parte de un grupo activo de personas con los mismos objetivos de vida sana.' },
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                                    <div>
                                        <h5 className="font-display text-sm font-medium text-chalk">{item.titulo}</h5>
                                        <p className="mt-0.5 font-body text-xs text-slate2 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
