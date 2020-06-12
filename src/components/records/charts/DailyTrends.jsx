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
const generateMinutes = () => {
  [...Array(24).keys()].forEach((hour) => {
    [...Array(60).keys()].forEach((min) => {
      const h = hour < 9 ? `0${hour}` : `${hour}`;
      const m = hour < 9 ? `0${min}` : `${hour}`;
      data.push({ time: `${h}:${m}` });
    });
  });
};

export default ({ date, recordType }) => {
  return (
    <Card title={'Daily Trends'}>
      <List
        isBlock={true}
        filters={{
          recordType: recordType,
          orderBy: 'timestamp',
          orderDirection: 'asc',
          date,
        }}
      >
        {(records) =>
          records.length > 0 && (
            <ResponsiveContainer width={'100%'} height={200}>
              <LineChart
                width={500}
                data={records.map((item) => ({
                  value: parseInt(item.data.value),
                  timestamp: item.timestamp,
                }))}
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