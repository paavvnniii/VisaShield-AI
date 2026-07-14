import { useState } from 'react'
import { Loader2, ScanSearch } from 'lucide-react'
import { merchantCategories, countries, deviceTypes } from '../services/mockData.js'

const initialState = {
  amount: '',
  time: '',
  merchantCategory: merchantCategories[0],
  country: countries[0],
  deviceType: deviceTypes[0],
  cardPresent: 'Yes',
}

export default function TransactionForm({ onAnalyze }) {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    await onAnalyze?.(form)
  } catch (error) {
    console.error('Prediction failed:', error)
    alert('Could not connect to the fraud detection API.')
  } finally {
    setLoading(false)
  }
}

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Transaction Amount">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">
              $
            </span>
            <input
              type="number"
              step="0.01"
              min="0"
              required
              placeholder="0.00"
              value={form.amount}
              onChange={update('amount')}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg bg-surface-2 border border-[var(--color-border)] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600 tabular-nums"
            />
          </div>
        </Field>

        <Field label="Transaction Time">
          <input
            type="time"
            required
            value={form.time}
            onChange={update('time')}
            className="w-full px-3 py-2.5 rounded-lg bg-surface-2 border border-[var(--color-border)] text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600"
          />
        </Field>

        <Field label="Merchant Category">
          <Select value={form.merchantCategory} onChange={update('merchantCategory')} options={merchantCategories} />
        </Field>

        <Field label="Country">
          <Select value={form.country} onChange={update('country')} options={countries} />
        </Field>

        <Field label="Device Type">
          <Select value={form.deviceType} onChange={update('deviceType')} options={deviceTypes} />
        </Field>

        <Field label="Card Present">
          <Select value={form.cardPresent} onChange={update('cardPresent')} options={['Yes', 'No']} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors shadow-[0_0_0_1px_rgba(59,123,240,0.4)]"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <ScanSearch size={16} />
            Analyze Transaction
          </>
        )}
      </button>
      <p className="text-xs text-text-muted">
  Demo model scoring currently uses anonymized transaction time and amount
  inputs. Additional business fields are included for the product interface.
</p>
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-text-secondary mb-1.5">{label}</span>
      {children}
    </label>
  )
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 rounded-lg bg-surface-2 border border-[var(--color-border)] text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600 appearance-none"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}
