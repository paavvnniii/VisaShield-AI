import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import TransactionForm from '../components/TransactionForm.jsx'
import PredictionPanel from '../components/PredictionPanel.jsx'
import { predictTransaction } from '../services/api.js'

export default function Predict() {
  const [result, setResult] = useState(null)

 const handleAnalyze = async (form) => {
  const [hours, minutes] = form.time.split(':').map(Number)

  // Kaggle Time represents elapsed seconds.
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
        title="Predict"
        subtitle="Submit a transaction and get an instant fraud prediction"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <Card title="Transaction Details" subtitle="All fields are required for scoring">
            <TransactionForm onAnalyze={handleAnalyze} />
          </Card>
        </div>
        <div>
          {result ? (
            <PredictionPanel {...result} />
          ) : (
            <Card title="Prediction Result" subtitle="Awaiting transaction">
              <div className="flex flex-col items-center justify-center text-center py-10 gap-2">
                <p className="text-sm text-text-secondary">
                  Fill in the transaction form and click{' '}
                  <span className="text-text-primary font-medium">Analyze Transaction</span> to see
                  a prediction here.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
