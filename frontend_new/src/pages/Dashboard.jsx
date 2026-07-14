import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import KPICard from '../components/KPICard.jsx'
import Card from '../components/Card.jsx'
import TransactionForm from '../components/TransactionForm.jsx'
import PredictionPanel from '../components/PredictionPanel.jsx'
import { predictTransaction } from '../services/api.js'

const projectMetrics = [
  {
    id: 'transactions',
    label: 'Dataset Transactions',
    value: '284,807',
    delta: 'European dataset',
    trend: 'up',
  },
  {
    id: 'fraud',
    label: 'Fraud Cases',
    value: '492',
    delta: '0.172%',
    trend: 'down',
  },
  {
    id: 'model',
    label: 'Best Model',
    value: 'Random Forest',
    delta: 'Selected',
    trend: 'up',
  },
  {
    id: 'score',
    label: 'F1 Score',
    value: '0.83',
    delta: 'Precision 0.87',
    trend: 'up',
  },
]
export default function Dashboard() {
  const [result, setResult] = useState(null)

  const handleAnalyze = async (form) => {
    const [hours, minutes] = form.time.split(':').map(Number)
    const transactionTime = hours * 3600 + minutes * 60

    const response = await predictTransaction({
      amount: Number(form.amount),
      time: transactionTime,
    })

    setResult({
      prediction: response.prediction,
      confidence: response.confidence,
      risk: response.fraud_probability,
      riskLevel: response.risk_level,
    })
  }

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Fraud detection model overview and real-time transaction scoring"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {projectMetrics.map((metric) => (
          <KPICard
            key={metric.id}
            {...metric}
            positiveIsGood={metric.id !== 'fraud'}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2">
          <Card
            title="Transaction Analysis"
            subtitle="Submit transaction details to the FastAPI inference endpoint"
          >
            <TransactionForm onAnalyze={handleAnalyze} />
          </Card>
        </div>

        <div>
          {result ? (
            <PredictionPanel {...result} />
          ) : (
            <Card title="Prediction Result" subtitle="Awaiting transaction">
              <div className="flex min-h-64 flex-col items-center justify-center text-center px-6">
                <p className="text-sm text-text-secondary">
                  Enter a transaction and select{' '}
                  <span className="font-medium text-text-primary">
                    Analyze Transaction
                  </span>{' '}
                  to receive a real model prediction.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      <Card
        title="Selected Model"
        subtitle="Model chosen after comparing multiple classification approaches"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Metric
            label="Algorithm"
            value="Random Forest"
            description="200 estimators with parallel inference"
          />

          <Metric
            label="Training Strategy"
            value="SMOTE"
            description="Applied only to the training split"
          />

          <Metric
            label="Model Performance"
            value="F1 Score 0.83"
            description="Precision 0.87 · Recall 0.80"
          />
        </div>
      </Card>
    </div>
  )
}

function Metric({ label, value, description }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-surface-2 p-4">
      <p className="text-xs text-text-muted">{label}</p>
      <p className="mt-1 text-lg font-semibold text-text-primary">{value}</p>
      <p className="mt-1 text-xs text-text-secondary">{description}</p>
    </div>
  )
}