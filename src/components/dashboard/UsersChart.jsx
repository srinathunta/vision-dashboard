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
const data = [
  { name: "Jan", users: 200 },
  { name: "Feb", users: 220 },
  { name: "Mar", users: 300 },
  { name: "Apr", users: 380 },
  { name: "May", users: 440 },
  { name: "Jun", users: 520 },
  { name: "Jul", users: 460 },
  { name: "Aug", users: 430 },
];
const UsersChart = () => {
  return (
    <div className="rounded-xl bg-primary m-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name" axisLine={false} tick={false} />
          <YAxis axisLine={false} />
          <Bar dataKey="users" fill="#fff" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersChart;
