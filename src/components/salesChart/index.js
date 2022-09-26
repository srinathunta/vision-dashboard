import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Jan", website: 200, mobile: 500 },
  { name: "Feb", website: 220, mobile: 250 },
  { name: "Mar", website: 300, mobile: 330 },
  { name: "Apr", website: 380, mobile: 370 },
  { name: "May", website: 440, mobile: 410 },
  { name: "Jun", website: 520, mobile: 320 },
  { name: "Jul", website: 460, mobile: 500 },
  { name: "Aug", website: 430, mobile: 460 },
  { name: "Sept", website: 470, mobile: 480 },
  { name: "Oct", website: 500, mobile: 300 },
  { name: "Nov", website: 470, mobile: 360 },
  { name: "Dec", website: 440, mobile: 480 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-toolkit border-none">
        <div className="p-2 bg-primary">{label}</div>
        <div className="p-2 bg-primary bg-opacity-60">
          <span className="font-regular text-sm">
            <span className="px-2.5 mr-2 py-0 rounded-full bg-mobile"></span>{" "}
            Mobile apps:{" "}
          </span>
          <span className="font-semibold text-sm">{payload[0].value}</span>
        </div>
        <div className="p-2 bg-primary bg-opacity-60">
          <span className="font-regular text-sm">
            <span className="px-2.5 mr-2 py-0 rounded-full bg-website"></span>{" "}
            Websites:{" "}
          </span>
          <span className="font-semibold text-sm">{payload[1].value}</span>
        </div>
      </div>
    );
  }

  return null;
};

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorWeb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0075ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0075ff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#28c6ee" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#28c6ee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#eee" strokeDasharray="3 7" vertical={false} />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="website"
          stroke="#0075ff"
          fillOpacity={1}
          strokeWidth={4}
          fill="url(#colorWeb)"
        />
        <Area
          type="monotone"
          dataKey="mobile"
          stroke="#28c6ee"
          fillOpacity={1}
          strokeWidth={4}
          fill="url(#colorMobile)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
