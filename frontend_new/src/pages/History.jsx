import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import StatusPill from '../components/StatusPill.jsx'
import { historyTransactions } from '../services/mockData.js'

export default function History() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    return historyTransactions.filter((t) => {
      const matchesFilter = filter === 'All' || t.prediction === filter
      const matchesQuery =
        query.trim() === '' ||
        t.id.toLowerCase().includes(query.toLowerCase()) ||
        t.merchant.toLowerCase().includes(query.toLowerCase()) ||
        t.country.toLowerCase().includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [query, filter])

  return (
    <div>
      <PageHeader title="History" subtitle="Browse and search past transaction predictions" />

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by transaction ID, merchant, or country..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface-2 border border-[var(--color-border)] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600"
            />
          </div>
          <div className="flex gap-2">
            {['All', 'Legitimate', 'Fraudulent'].map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                  filter === opt
                    ? 'bg-brand-600/15 text-brand-400 border-brand-600/30'
                    : 'text-text-secondary border-[var(--color-border)] hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto -mx-5 px-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-text-muted border-b border-[var(--color-border)]">
                <th className="font-medium py-2.5 pr-4">Transaction ID</th>
                <th className="font-medium py-2.5 pr-4">Amount</th>
                <th className="font-medium py-2.5 pr-4">Merchant</th>
                <th className="font-medium py-2.5 pr-4">Country</th>
                <th className="font-medium py-2.5 pr-4">Prediction</th>
                <th className="font-medium py-2.5 pr-4">Risk</th>
                <th className="font-medium py-2.5">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-[var(--color-border)]/60 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 pr-4 font-mono-num text-xs text-text-secondary">{t.id}</td>
                  <td className="py-3 pr-4 tabular-nums font-medium text-text-primary">
                    ${Number(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 pr-4 text-text-secondary">{t.merchant}</td>
                  <td className="py-3 pr-4 text-text-secondary">{t.country}</td>
                  <td className="py-3 pr-4">
                    <StatusPill status={t.prediction} />
                  </td>
                  <td className="py-3 pr-4 tabular-nums text-text-secondary">{t.risk}%</td>
                  <td className="py-3 text-text-muted whitespace-nowrap">
                    {t.date} · {t.time}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-text-muted text-sm">
                    No transactions match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
