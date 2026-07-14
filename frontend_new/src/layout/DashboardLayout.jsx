import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'
import MobileNav from './MobileNav.jsx'

export default function DashboardLayout() {
  return (
    <div className="h-screen w-full flex bg-bg text-text-primary grid-glow">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto pb-24 md:pb-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
