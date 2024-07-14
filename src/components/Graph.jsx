import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const cartHistory = useSelector((state) => state.products.history);

  return (
    <>
      <h1 className="text-center mt-8 font-semibold text-xl mb-5">
        Cart total over time
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={cartHistory}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateTime" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;
