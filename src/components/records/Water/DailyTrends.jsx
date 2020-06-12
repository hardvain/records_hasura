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
export default ({ date = moment().format('yyyy-MM-DD') }) => {
  return (
    <Card>
      <List
        filters={{
          recordType: 'water',
          orderBy: 'timestamp',
          orderDirection: 'asc',
          date,
        }}
      >
        {(records) =>
          records.length > 0 && (
            <ResponsiveContainer width={"100%"} height={200}>
              <LineChart
                width={500}
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
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(timeStr) => moment(timeStr).format('HH:mm')}
                />
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
