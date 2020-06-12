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
export default ({ date  }) => {
  return (
    <Card title={"Weekly Trends"}>
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
                  tickFormatter={(timeStr) => moment(timeStr).format('MMMM d')}
                />
                <YAxis dataKey={'value'}/>
                <Tooltip />
                <Legend />
                <Line
                  name={"Water"}
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
