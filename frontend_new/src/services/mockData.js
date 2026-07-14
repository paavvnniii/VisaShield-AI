// Dummy data only. No backend connection yet.
// This module intentionally mirrors the shape of the future FastAPI
// responses so that services/api.js can be swapped in later without
// touching component code.

export const kpiData = [
  {
    id: 'transactions',
    label: 'Transactions Today',
    value: '48,219',
    delta: '+12.4%',
    trend: 'up',
  },
  {
    id: 'fraud',
    label: 'Fraud Detected',
    value: '312',
    delta: '-3.1%',
    trend: 'down',
  },
  {
    id: 'accuracy',
    label: 'Model Accuracy',
    value: '99.14%',
    delta: '+0.06%',
    trend: 'up',
  },
  {
    id: 'latency',
    label: 'Avg. Response Time',
    value: '84ms',
    delta: '-6ms',
    trend: 'down',
  },
]

export const merchantCategories = [
  'Electronics',
  'Grocery',
  'Travel & Airlines',
  'Restaurants',
  'Online Retail',
  'Digital Services',
  'Healthcare',
  'Fuel & Auto',
]

export const countries = [
  'United States',
  'United Kingdom',
  'Germany',
  'India',
  'Singapore',
  'Canada',
  'Australia',
  'Brazil',
]

export const deviceTypes = ['Mobile', 'Desktop', 'POS Terminal', 'Tablet', 'ATM']

export const recentPredictions = [
  { id: 'txn_7734', amount: 1240.0, prediction: 'Legitimate', risk: 0.12, time: '2 min ago' },
  { id: 'txn_7733', amount: 89.5, prediction: 'Legitimate', risk: 0.04, time: '5 min ago' },
  { id: 'txn_7732', amount: 5400.0, prediction: 'Fraudulent', risk: 92.7, time: '9 min ago' },
  { id: 'txn_7731', amount: 312.2, prediction: 'Legitimate', risk: 1.8, time: '14 min ago' },
  { id: 'txn_7730', amount: 76.0, prediction: 'Legitimate', risk: 0.6, time: '21 min ago' },
  { id: 'txn_7729', amount: 2210.75, prediction: 'Fraudulent', risk: 87.3, time: '33 min ago' },
  { id: 'txn_7728', amount: 45.99, prediction: 'Legitimate', risk: 0.2, time: '41 min ago' },
  { id: 'txn_7727', amount: 998.4, prediction: 'Legitimate', risk: 3.4, time: '52 min ago' },
]

export const fraudTrendData = [
  { day: 'Mon', legitimate: 6120, fraud: 42 },
  { day: 'Tue', legitimate: 6540, fraud: 38 },
  { day: 'Wed', legitimate: 7010, fraud: 55 },
  { day: 'Thu', legitimate: 6890, fraud: 47 },
  { day: 'Fri', legitimate: 7420, fraud: 61 },
  { day: 'Sat', legitimate: 8110, fraud: 39 },
  { day: 'Sun', legitimate: 7690, fraud: 30 },
]

export const predictionDistribution = [
  { name: 'Legitimate', value: 47907, color: '#3b7bf0' },
  { name: 'Fraudulent', value: 312, color: '#f2495c' },
]

export const historyTransactions = Array.from({ length: 24 }).map((_, i) => {
  const isFraud = i % 6 === 0
  return {
    id: `txn_${7700 - i}`,
    amount: (Math.random() * 4000 + 20).toFixed(2),
    merchant: merchantCategories[i % merchantCategories.length],
    country: countries[i % countries.length],
    prediction: isFraud ? 'Fraudulent' : 'Legitimate',
    risk: isFraud ? (Math.random() * 20 + 75).toFixed(1) : (Math.random() * 5).toFixed(2),
    date: `2026-07-${String(7 - Math.floor(i / 4)).padStart(2, '0')}`,
    time: `${String(9 + (i % 12)).padStart(2, '0')}:${String((i * 7) % 60).padStart(2, '0')}`,
  }
})
