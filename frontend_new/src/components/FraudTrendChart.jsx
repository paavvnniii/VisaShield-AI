import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function FraudTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="legitGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b7bf0" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#3b7bf0" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fraudGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2495c" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#f2495c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#1f2b45" />
        <XAxis
          dataKey="day"
          stroke="#5c6780"
          tick={{ fontSize: 12, fill: '#8a96ab' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          stroke="#5c6780"
          tick={{ fontSize: 12, fill: '#8a96ab' }}
          axisLine={false}
          tickLine={false}
          width={48}
        />
        <YAxis yAxisId="right" orientation="right" hide domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            background: '#10182a',
            border: '1px solid #1f2b45',
            borderRadius: 10,
            fontSize: 12,
          }}
          labelStyle={{ color: '#e8edf7', fontWeight: 600 }}
        />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="legitimate"
          name="Legitimate"
          stroke="#3b7bf0"
          strokeWidth={2}
          fill="url(#legitGradient)"
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="fraud"
          name="Fraud"
          stroke="#f2495c"
          strokeWidth={2}
          fill="url(#fraudGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
