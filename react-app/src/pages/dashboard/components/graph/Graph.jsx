import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer
} from 'recharts';
import "./Graph.css";

const Graph = ({ data, title }) => {
  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height="90%">
        <h4 className="graph-title text-center">{title}</h4>
        <LineChart type="linear" width={600} height={400} data={data}>
          <XAxis dataKey="name" padding={{ left: 50, right: 50 }}/>
          
          <YAxis ticks={[0, 10,20, 30, 40, 50, 60]}/>
          <CartesianGrid horizontal={true} vertical={false} stroke="#eee" />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Line type="monotone" dataKey="inward" name="Inward" stroke="#4BD0A1" />
          <Line type="monotone" dataKey="outward" name="Outward" stroke="#51D2DC" />
        </LineChart>
      </ResponsiveContainer>
    </div>
   
  );
};

export default Graph;
