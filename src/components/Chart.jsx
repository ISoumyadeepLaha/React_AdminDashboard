import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiUsers } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Oct,2019",
      IP: 1300,
      OP: 2800,
    },
    {
      name: "Nov,2019",
      IP: 1800,
      OP: 3000,
    },
    {
      name: "Dec,2019",
      IP: 600,
      OP: 3900,
    },
    {
      name: "Jan,2020",
      IP: 800,
      OP: 2800,
    },
    {
      name: "Feb,2020",
      IP: 1300,
      OP: 2900,
    },
    {
      name: "Mar,2020",
      IP: 700,
      OP: 3200,
    },
  ];
  return (
    <div className="w-full md:w-[74%] bg-[#d3dfeb] p-0 md:p-2 rounded-md">
      <div className="top border-b-2 flex flex-col md:flex-row justify-between p-2">
        <h2 className=" font-semibold">Outpatients Vs. Inpatient Trend</h2>
        <div className="right flex gap-4">
          <h2 className=" font-semibold mt-2 md:mt-0">Show by months</h2>
          <select className="bg-transparent outline-none border-none text-[#758283]"></select>
        </div>
      </div>
      <div className="bottom flex flex-col md:flex-row justify-between  ">
        <div className="graph w-full md:w-9/12">
          <ResponsiveContainer className="w-full h-[50%]">
            <BarChart
              width={200}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="name" />
              <YAxis />
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" /> */}
              <Bar dataKey="IP" fill="#8D3DAF" />
              <Bar dataKey="OP" fill="#03C6C7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bar  md:mt-0 md:w-3/12 p-4 flex flex-col justify-center items-center gap-4 mt-6 mr-4 relative">
          <FiUsers className="absolute w-44 top-17  text-[#758283]" />
          <p className="absolute top-16 left-1 bg-slate-600 text-white rounded px-1">
            28%
          </p>
          <CircularProgressbar
            value={72}
            styles={buildStyles({
              // Colors
              pathColor: "#8D3DAF",
              textColor: "#f88",
              trailColor: "#03C6C7",
              backgroundColor: "#3e98c7",
            })}
          />
          <div className="tittles flex justify-center gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#8D3DAF]"></div>
            <div>Inpatients</div>
            <div className="w-2 h-2 rounded-full bg-[#03C6C7]"></div>
            <div>Outpatients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
