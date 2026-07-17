import { useEffect, useState } from 'react';

export default function Intro() {
  // 'playing' → 'leaving' (cortina sube) → 'done' (se desmonta)
  const [phase, setPhase] = useState('playing');

  useEffect(() => {
    if (phase !== 'playing') return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdTime = prefersReduced ? 250 : 1900;

    document.body.style.overflow = 'hidden';

    const leaveTimer = setTimeout(() => setPhase('leaving'), holdTime);
    const doneTimer = setTimeout(() => setPhase('done'), holdTime + 700);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, [phase]);

  // Restaura el scroll al terminar (o si el componente se desmonta antes)
  useEffect(() => {
    if (phase === 'done') document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-iron-950 ${
        phase === 'leaving' ? 'intro-curtain pointer-events-none' : ''
      }`}
      role="status"
      aria-label="Cargando Vikingos Gym"
    >
      {/* Resplandor ember de fondo */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-ember-500/15 blur-[120px] animate-ember-pulse" />

      {/* Anillo de pesa con arco ember girando */}
      <div className="intro-plate relative mb-8 h-24 w-24">
        <div className="absolute inset-0 rounded-full border-[10px] border-iron-800" />
        <div className="absolute inset-0 rounded-full border-[10px] border-transparent border-t-ember-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-ember-500">V</span>
        </div>
      </div>

      {/* Wordmark */}
      <h1 className="relative font-display text-4xl font-bold uppercase tracking-wide text-chalk sm:text-6xl">
        <span className="intro-word inline-block">VIKINGOS</span>{' '}
        <span className="intro-word inline-block text-ember-gradient-animated [animation-delay:0.15s]">
          GYM
        </span>
      </h1>

      {/* Haz ember */}
      <div className="intro-beam mt-6 h-0.5 w-56 rounded-full bg-ember-gradient" />

      {/* Lema */}
      <p className="intro-word mt-5 font-mono text-[10px] uppercase tracking-[0.4em] text-slate2 [animation-delay:0.3s] sm:text-xs">
        Forja tu fuerza
      </p>
    </div>
  );
}
