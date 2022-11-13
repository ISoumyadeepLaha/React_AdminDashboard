import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid,  ResponsiveContainer } from 'recharts';

const Graph = () => {
  const data = [
    {
      name: '0',
      // uv: 4000,
      pv: 50,
    },
    {
      name: '8 am',
      // uv: 3000,
      pv: 113,
    },
    {
      name: '9 am',
      // uv: 2000,
      pv: 80,
    },
    {
      name: '10 am',
      // uv: 2780,
      pv: 125,
    },
    {
      name: '11 am',
      // uv: 1890,
      pv: 78,
    },
    {
      name: '12 pm',
      // uv: 2390,
      pv: 102,
    },
    {
      name: '1 pm',
      // uv: 2390,
      pv: 102,
    },
  ];
  
  return (
    <div className="w-full md:w-[50%] bg-[#d3dfeb] p-2 rounded-md">
      <div className="graph">
      <div className="top border-b-2 flex justify-between p-2">
        <h2 className=" font-semibold">Time Admitted</h2>
        <div className="right flex gap-4">
          <h2 className=" font-semibold">Today</h2>
          <select className="bg-transparent outline-none border-none text-[#758283]"></select>
        </div>
      </div>
      <div className="bottom">
      <ResponsiveContainer width="100%" aspect={2/1}>
        <LineChart
          width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#E07C24" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
      </div>
      </div>
    </div>
  )
}

export default Graph