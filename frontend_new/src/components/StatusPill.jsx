export default function StatusPill({ status }) {
  const isLegit = status === 'Legitimate'
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
        isLegit
          ? 'bg-success-bg text-success border-success/20'
          : 'bg-danger-bg text-danger border-danger/20'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isLegit ? 'bg-success' : 'bg-danger'}`} />
      {status}
    </span>
  )
}
