import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

export default function ChartArea ({ data }){
    return (
        <AreaChart
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
          <Area type="monotone" dataKey="valor" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
}
