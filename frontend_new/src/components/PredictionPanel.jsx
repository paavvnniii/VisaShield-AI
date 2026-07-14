import { ShieldAlert, ShieldCheck } from 'lucide-react'
import Card from './Card.jsx'
import RiskGauge from './RiskGauge.jsx'
import StatusPill from './StatusPill.jsx'

export default function PredictionPanel({
  prediction = 'Legitimate',
  confidence = 99.92,
  risk = 0.08,
  riskLevel = 'Low',
}) {
  const isFraud = prediction === 'Fraudulent'

  return (
    <Card title="Prediction Result" subtitle="Latest model inference">
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className={`w-12 h-12 rounded-full border flex items-center justify-center ${
            isFraud
              ? 'bg-red-500/10 border-red-500/20'
              : 'bg-success-bg border-success/20'
          }`}
        >
          {isFraud ? (
            <ShieldAlert size={22} className="text-red-500" />
          ) : (
            <ShieldCheck size={22} className="text-success" />
          )}
        </div>

        <div>
          <p className="text-lg font-semibold text-text-primary">
            {prediction} Transaction
          </p>

          <div className="mt-2 flex justify-center">
            <StatusPill status={prediction} />
          </div>
        </div>

        <RiskGauge riskPercent={risk} />

        <div className="w-full grid grid-cols-3 gap-3 pt-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-surface-2 px-3 py-3">
            <p className="text-[11px] text-text-muted">Confidence</p>
            <p className="text-base font-semibold tabular-nums text-text-primary mt-0.5">
              {Number(confidence).toFixed(2)}%
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-surface-2 px-3 py-3">
            <p className="text-[11px] text-text-muted">Fraud Risk</p>
            <p className="text-base font-semibold tabular-nums text-text-primary mt-0.5">
              {Number(risk).toFixed(2)}%
            </p>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-surface-2 px-3 py-3">
            <p className="text-[11px] text-text-muted">Risk Level</p>
            <p
              className={`text-base font-semibold mt-0.5 ${
                riskLevel === 'High'
                  ? 'text-red-500'
                  : riskLevel === 'Medium'
                    ? 'text-yellow-400'
                    : 'text-success'
              }`}
            >
              {riskLevel}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}