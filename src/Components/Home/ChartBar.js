import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useMonthlyIncome from "../../Hooks/useMonthlyIncome";
const ChartBar = () => {
  const [data, setData] = useMonthlyIncome();
  console.log(data);

  return (
    <BarChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="business" stackId="a" fill="#8884d8" />
      <Bar dataKey="job" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default ChartBar;
