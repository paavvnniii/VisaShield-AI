import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Predict from './pages/Predict.jsx'
import Analytics from './pages/Analytics.jsx'
import History from './pages/History.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
