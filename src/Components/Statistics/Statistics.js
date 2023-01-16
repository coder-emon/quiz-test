import React, { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { TopicContext } from "../../Layout/Main";

const Statistics = () => {
  const topics = useContext(TopicContext);
  return (
    <div className="flex justify-center">
      <LineChart
        width={600}
        height={300}
        data={topics}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip></Tooltip>
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Statistics;
