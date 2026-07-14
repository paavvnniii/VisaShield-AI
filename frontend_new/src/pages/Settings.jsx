import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'

export default function Settings() {
  const [threshold, setThreshold] = useState(70)
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [notifySlack, setNotifySlack] = useState(false)
  const [autoBlock, setAutoBlock] = useState(true)

  return (
    <div>
      <PageHeader title="Settings" subtitle="Configure model behavior and notification preferences" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Account" subtitle="Your organization profile">
          <div className="space-y-4">
            <TextField label="Organization Name" defaultValue="Visa Enterprise Payments" />
            <TextField label="Admin Email" defaultValue="risk-team@visashield.ai" type="email" />
            <TextField label="API Environment" defaultValue="Production" disabled />
          </div>
        </Card>

        <Card title="Model Configuration" subtitle="Tune sensitivity of the fraud model">
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-text-secondary">
                  Fraud Risk Threshold
                </span>
                <span className="text-xs font-semibold tabular-nums text-brand-400">
                  {threshold}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full accent-[#3b7bf0]"
              />
              <p className="text-[11px] text-text-muted mt-2">
                Transactions scoring above this threshold are flagged as fraudulent.
              </p>
            </div>

            <ToggleRow
              label="Auto-block high-risk transactions"
              description="Immediately decline transactions above the threshold"
              checked={autoBlock}
              onChange={setAutoBlock}
            />
          </div>
        </Card>

        <Card title="Notifications" subtitle="Choose how alerts reach your team">
          <div className="space-y-4">
            <ToggleRow
              label="Email alerts"
              description="Send a summary email for every flagged transaction"
              checked={notifyEmail}
              onChange={setNotifyEmail}
            />
            <ToggleRow
              label="Slack alerts"
              description="Post high-risk flags to the #fraud-alerts channel"
              checked={notifySlack}
              onChange={setNotifySlack}
            />
          </div>
        </Card>

        <Card title="API Access" subtitle="Keys for connecting to the FastAPI backend">
          <div className="space-y-4">
            <TextField label="Base URL" defaultValue="http://localhost:8000" disabled />
            <TextField label="API Key" defaultValue="sk_live_••••••••••••3f2a" disabled />
            <p className="text-[11px] text-text-muted">
              Backend connection is not active yet. This project currently runs on dummy data only.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

function TextField({ label, type = 'text', defaultValue, disabled = false }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-text-secondary mb-1.5">{label}</span>
      <input
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        className="w-full px-3 py-2.5 rounded-lg bg-surface-2 border border-[var(--color-border)] text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600 disabled:opacity-60 disabled:cursor-not-allowed"
      />
    </label>
  )
}

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-text-primary">{label}</p>
        <p className="text-[11px] text-text-muted mt-0.5">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
          checked ? 'bg-brand-600' : 'bg-surface-2 border border-[var(--color-border)]'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}
