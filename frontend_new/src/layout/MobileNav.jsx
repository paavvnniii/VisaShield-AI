import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  ScanSearch,
  BarChart3,
  History,
  Settings as SettingsIcon,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/predict', label: 'Predict', icon: ScanSearch },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/history', label: 'History', icon: History },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
]

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-surface border-t border-[var(--color-border)] flex items-center justify-around px-2 z-20">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 flex-1 h-full text-[10px] font-medium ${
              isActive ? 'text-brand-400' : 'text-text-muted'
            }`
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
