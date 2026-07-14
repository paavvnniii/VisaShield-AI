import { ShieldCheck, Bell, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="h-16 shrink-0 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-surface)]/60 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <div className="md:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <ShieldCheck size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-[15px] text-text-primary tracking-tight">
            VisaShield AI Pro
          </p>
          <p className="hidden sm:block text-[11px] text-text-muted">
            Real-time fraud intelligence platform
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-bg border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
          <span className="text-xs font-medium text-success">System Healthy</span>
        </div>

        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={18} />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg hover:bg-white/5 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-xs font-semibold text-white">
            RA
          </div>
          <ChevronDown size={14} className="hidden sm:block text-text-muted" />
        </button>
      </div>
    </header>
  )
}
