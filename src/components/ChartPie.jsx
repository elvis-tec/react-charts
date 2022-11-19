import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
export const ChartPie = ({ data }) => {
  return (
        <PieChart width={400} height={400}>
          <Pie
            dataKey="valor"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
  )
}
