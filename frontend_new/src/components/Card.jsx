export default function Card({ title, subtitle, action, className = '', children }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-border)] bg-surface shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset] ${className}`}
    >
      {(title || action) && (
        <div className="flex items-start justify-between gap-4 px-5 pt-5">
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-text-primary tracking-tight">{title}</h3>
            )}
            {subtitle && <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={`p-5 ${title || action ? 'pt-4' : ''}`}>{children}</div>
    </div>
  )
}
