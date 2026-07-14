import StatusPill from './StatusPill.jsx'

export default function RecentPredictionsTable({ rows }) {
  return (
    <div className="overflow-x-auto -mx-5 px-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-text-muted border-b border-[var(--color-border)]">
            <th className="font-medium py-2.5 pr-4">Amount</th>
            <th className="font-medium py-2.5 pr-4">Prediction</th>
            <th className="font-medium py-2.5 pr-4">Risk</th>
            <th className="font-medium py-2.5">Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-[var(--color-border)]/60 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <td className="py-3 pr-4 tabular-nums font-medium text-text-primary">
                ${row.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3 pr-4">
                <StatusPill status={row.prediction} />
              </td>
              <td className="py-3 pr-4 tabular-nums text-text-secondary">{row.risk}%</td>
              <td className="py-3 text-text-muted whitespace-nowrap">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
