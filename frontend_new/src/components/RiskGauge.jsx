export default function RiskGauge({ riskPercent = 0.08, size = 168 }) {
  const clamped = Math.min(100, Math.max(0, riskPercent))
  const radius = 66
  const circumference = 2 * Math.PI * radius
  const arcFraction = 0.75 // 270 degree gauge
  const arcLength = circumference * arcFraction
  const offset = arcLength - (clamped / 100) * arcLength

  const color = clamped < 30 ? 'var(--color-success)' : clamped < 70 ? 'var(--color-warning)' : 'var(--color-danger)'

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 168 168" className="-rotate-[225deg]">
        <circle
          cx="84"
          cy="84"
          r={radius}
          fill="none"
          stroke="var(--color-border-light)"
          strokeWidth="12"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
        />
        <circle
          cx="84"
          cy="84"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.3s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold tabular-nums text-text-primary">
          {clamped.toFixed(2)}%
        </span>
        <span className="text-[11px] text-text-muted mt-0.5">Fraud Risk</span>
      </div>
    </div>
  )
}
