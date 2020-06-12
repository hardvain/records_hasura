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
export default () => {
  return (
    <Card>
      <List
        filters={{
          recordType: 'glucose',
          orderBy: 'timestamp',
          orderDirection: 'asc',
        }}
      >
        {(records) =>
          records.length > 0 && (
            <ResponsiveContainer width="95%" height={500}>
              <LineChart
                width={500}
                height={300}
                data={records.map((item) => ({
                  value: item.data.value,
                  timestamp: item.timestamp,
                }))}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis dataKey={'value'} />
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
