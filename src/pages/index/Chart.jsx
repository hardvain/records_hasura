import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import moment from 'moment';

export default ({ scores = [] }) => {
  const data = (scores ? scores : []).map((s) => ({
    name: moment(s.timestamp).format('HH:mm'),
    value: s.value,
  }));
  data.unshift({ name: '00:00', value: 0 });
  data.push({ name: '23:59', value: 0 });
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
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
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
};
