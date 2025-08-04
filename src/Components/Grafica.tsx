import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Enero", ventas: 4000 },
  { name: "Febrero", ventas: 3000 },
  { name: "Marzo", ventas: 5000 },
  { name: "Abril", ventas: 4500 },
  { name: "Mayo", ventas: 6000 },
];

const SalesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ventas" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
