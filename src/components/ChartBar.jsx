import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

export const ChartBar = ({data}) => {
  return (
    <BarChart
    width={800}
    height={400}
    data={data}
    margin={{
    top: 10,
    right: 30,
    left: 50,
    bottom: 0,
    }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Branch" name="Branch">
            <Label value="Branches" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8884d8" />
    </BarChart>
  )
}
