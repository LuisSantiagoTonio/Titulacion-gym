export default function StatCard({ label, value, suffix }) {
  return (
    <div className="rounded-2xl border border-iron-700 bg-iron-900 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate2">{label}</p>
      <p className="mt-2 font-mono text-4xl font-bold text-chalk">
        {value}
        {suffix && <span className="ml-1 text-lg text-ember-500">{suffix}</span>}
      </p>
    </div>
  );
}
