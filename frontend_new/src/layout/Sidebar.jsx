import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  ScanSearch,
  BarChart3,
  History,
  Settings as SettingsIcon,
  ShieldCheck,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/predict', label: 'Predict', icon: ScanSearch },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/history', label: 'History', icon: History },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-60 md:flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="h-16 flex items-center gap-2 px-5 border-b border-[var(--color-border)]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shrink-0">
          <ShieldCheck size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-semibold text-[15px] tracking-tight text-text-primary">
          VisaShield
        </span>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-text-muted">
          Menu
        </p>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-600/15 text-brand-400 border border-brand-600/30'
                  : 'text-text-secondary border border-transparent hover:text-text-primary hover:bg-white/5'
              }`
            }
          >
            <Icon size={17} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mx-3 mb-4 rounded-xl border border-[var(--color-border)] bg-surface-2">
  <p className="text-sm font-semibold text-text-primary mb-2">
    Random Forest Classifier
  </p>

  <div className="space-y-1 text-[11px] text-text-muted">
    <p>• Dataset: 284,807 transactions</p>
    <p>• Fraud cases: 492</p>
    <p>• SMOTE-balanced training</p>
    <p>• F1 Score: 0.83</p>
    <p>• FastAPI REST API</p>
  </div>
</div>
    </aside>
  )
}
