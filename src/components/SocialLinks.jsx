const SOCIAL_NETWORKS = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/people/Vikings-Gym/100090897784507/?_rdc=1&_rdr#',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-5 w-5">
        <path d="M13.6 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V14h2.8v8h3.4Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vikingosgym/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@vikingos.gym',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-5 w-5">
        <path d="M15.7 3c.3 1.8 1.4 3 3.3 3.4v3.1c-1.3 0-2.5-.4-3.5-1.1v6.2a6 6 0 1 1-5.2-5.9v3.2a2.8 2.8 0 1 0 2 2.7V3h3.4Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@GYMVIKINGOSBogota',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-5 w-5">
        <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.4V8.6l5.8 3.4-5.8 3.4Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? 'flex flex-wrap items-center justify-center gap-2 sm:justify-end' : 'grid grid-cols-2 gap-3'}>
      {SOCIAL_NETWORKS.map((network) => (
        <a
          key={network.name}
          href={network.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${network.name} de Vikingos Gym`}
          title={network.name}
          className={
            compact
              ? 'group inline-flex h-10 w-10 items-center justify-center rounded-full border border-iron-700 bg-iron-900 text-slate2 transition-all duration-300 hover:-translate-y-1 hover:border-ember-500 hover:bg-ember-500 hover:text-iron-950'
              : 'group flex items-center gap-3 rounded-xl border border-iron-700 bg-iron-900/70 px-4 py-3 text-slate2 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-500 hover:bg-ember-500/10 hover:text-chalk'
          }
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-iron-950 text-ember-500 transition group-hover:bg-ember-500 group-hover:text-iron-950">
            {network.icon}
          </span>
          {!compact && (
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">
              {network.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
