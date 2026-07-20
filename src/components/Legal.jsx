export default function Legal() {
  return (
    <section id="legal-section" className="reveal border-t border-iron-800 bg-iron-900/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ember-500">Información legal</p>
          <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide text-chalk">Privacidad y términos</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <details id="privacidad" className="group rounded-2xl border border-iron-700 bg-iron-950 p-6 open:border-ember-500/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold uppercase text-chalk">
              Aviso de privacidad
              <span className="text-ember-500 transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-5 space-y-3 border-t border-iron-800 pt-5 text-sm leading-relaxed text-slate2">
              <p>Vikingos Gym utiliza los datos proporcionados en el formulario —nombre, correo electrónico y mensaje— únicamente para atender solicitudes de información y dar seguimiento al contacto.</p>
              <p>Al seleccionar el envío por correo, la información se procesa mediante el servicio externo FormSubmit. Al seleccionar WhatsApp, la conversación se abre en dicha plataforma y queda sujeta a sus propias políticas de privacidad.</p>
              <p>No se solicita información sensible. El usuario puede abstenerse de enviar el formulario y comunicarse directamente por los medios visibles en la sección de contacto.</p>
            </div>
          </details>

          <details id="terminos" className="group rounded-2xl border border-iron-700 bg-iron-950 p-6 open:border-ember-500/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold uppercase text-chalk">
              Términos de uso
              <span className="text-ember-500 transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-5 space-y-3 border-t border-iron-800 pt-5 text-sm leading-relaxed text-slate2">
              <p>Este sitio tiene fines informativos. Los servicios, horarios, promociones y costos deben confirmarse directamente con Vikingos Gym antes de contratar o asistir.</p>
              <p>Las recomendaciones de entrenamiento mostradas son generales y no sustituyen la valoración de un profesional de la salud o del acondicionamiento físico.</p>
              <p>Los enlaces externos pertenecen a terceros. Vikingos Gym no controla su contenido, disponibilidad ni políticas de tratamiento de datos.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
