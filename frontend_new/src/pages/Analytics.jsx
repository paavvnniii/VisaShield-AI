import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import FraudTrendChart from '../components/FraudTrendChart.jsx'
import PredictionDistributionChart from '../components/PredictionDistributionChart.jsx'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { fraudTrendData, predictionDistribution } from '../services/mockData.js'

const categoryRisk = [
  { category: 'Travel', risk: 4.8 },
  { category: 'Electronics', risk: 3.9 },
  { category: 'Digital Svc.', risk: 3.1 },
  { category: 'Retail', risk: 2.2 },
  { category: 'Restaurants', risk: 1.1 },
  { category: 'Grocery', risk: 0.6 },
]

export default function Analytics() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Deeper insight into model behavior and fraud patterns"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Fraud Trend" subtitle="Legitimate vs. fraudulent volume, last 7 days">
          <FraudTrendChart data={fraudTrendData} />
        </Card>
        <Card title="Prediction Distribution" subtitle="Share of predictions by class">
          <PredictionDistributionChart data={predictionDistribution} />
        </Card>
      </div>

      <Card title="Risk by Merchant Category" subtitle="Average fraud risk score, last 30 days">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryRisk} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#1f2b45" />
            <XAxis
              dataKey="category"
              stroke="#5c6780"
              tick={{ fontSize: 12, fill: '#8a96ab' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#5c6780"
              tick={{ fontSize: 12, fill: '#8a96ab' }}
              axisLine={false}
              tickLine={false}
              width={40}
              unit="%"
            />
            <Tooltip
              cursor={{ fill: 'rgba(59,123,240,0.06)' }}
              contentStyle={{
                background: '#10182a',
                border: '1px solid #1f2b45',
                borderRadius: 10,
                fontSize: 12,
              }}
            />
            <Bar dataKey="risk" fill="#3b7bf0" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
