import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Card = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="w-full mt-4 md:mt-0 md:w-[23%] bg-[#8D3DAF] p-2 rounded-md">
      <div className="top flex flex-col justify-between p-4 mt-2">
        <h2 className=" font-semibold text-5xl text-white">3,240</h2>
        <h2 className=" font-semibold text-sm text-white mt-2">Patients this month</h2>
      </div>
      <div className="bottom mt-10">
      <ResponsiveContainer width="100%" aspect={2/1}>
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#ffffff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Card