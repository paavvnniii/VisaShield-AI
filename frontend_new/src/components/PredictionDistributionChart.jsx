import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function PredictionDistributionChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={72}
            outerRadius={100}
            paddingAngle={3}
            stroke="none"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: '#10182a',
              border: '1px solid #1f2b45',
              borderRadius: 10,
              fontSize: 12,
            }}
            formatter={(value) => value.toLocaleString()}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ fontSize: 12, color: '#8a96ab' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 top-0 flex flex-col items-center justify-center pointer-events-none" style={{ height: 240 }}>
        <span className="text-xl font-semibold tabular-nums text-text-primary">
          {total.toLocaleString()}
        </span>
        <span className="text-[11px] text-text-muted">Total Predictions</span>
      </div>
    </div>
  )
}
