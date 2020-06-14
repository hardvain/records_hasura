import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import List from 'src/components/core/List';
import moment from 'moment';

const data = [];
const generateMinutes = (records) => {
  let data = records.map((item) => ({
    value: parseInt(item.data.value),
    timestamp: item.timestamp,
  }));
  // data.unshift({ value: 0, timestamp: moment().startOf('day').toISOString() });
  // data.push({ value: 0, timestamp: moment().endOf('day').toISOString() });
  return data;
};
export default ({ filters,...rest }) => {
  return (
    <Card title={'Daily Trends'} {...rest}>
      <List
        isBlock={true}
        filters={filters}
      >
        {(records) =>
          records.length > 0 && (
            <ResponsiveContainer width={'100%'} height={200}>
              <LineChart
                width={500}
                data={generateMinutes(records)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(timeStr) => moment(timeStr).format('HH:mm')}
                />
                <YAxis dataKey={'value'} name={'Time'} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )
        }
      </List>
    </Card>
  );
};
