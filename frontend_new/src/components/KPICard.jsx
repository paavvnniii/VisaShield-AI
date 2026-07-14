import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function KPICard({ label, value, delta, trend, positiveIsGood = true }) {
  const isGood = trend === 'up' ? positiveIsGood : !positiveIsGood
  const trendColor = isGood ? 'text-success' : 'text-danger'
  const Arrow = trend === 'up' ? ArrowUpRight : ArrowDownRight

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-surface p-5 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-brand-500/10 blur-2xl" />
      <p className="text-xs font-medium text-text-secondary">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-2">
        <span className="text-2xl font-semibold tracking-tight tabular-nums text-text-primary">
          {value}
        </span>
        <span className={`flex items-center gap-0.5 text-xs font-medium mb-1 ${trendColor}`}>
          <Arrow size={13} />
          {delta}
        </span>
      </div>
    </div>
  )
}
