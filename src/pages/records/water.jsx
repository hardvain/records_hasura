import Card from 'src/components/Card';
import Water from 'src/modules/Water';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';
import {
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Switch,
  TabPanel,
  Divider,
  Text,
  Heading,
  Select,
  FormControl,
  FormLabel,
  Checkbox,
  useColorMode,
} from '@chakra-ui/core';
import { ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Tasks from 'src/modules/Tasks';

export default () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box>
      <Stack isInline>
        <Card m={0} borderRadius={0} p={0}>
          <Stack h={'100vh'} px={2}>
            <Heading size={'md'}>Filters</Heading>

            <FormControl display={'grid'}>
              <FormLabel>Due Date</FormLabel>
              <DatePicker
                selected={moment(date)}
                type={'input'}
                includeTime={false}
                onChange={(e) => setDate(e.toISOString(true))}
              />
            </FormControl>
            <Divider />
          </Stack>
        </Card>
        <Box w={'100%'}>
          <Box p={10}>
            <Water.Aggregate
              where={{
                _and: [
                  {
                    timestamp: {
                      _gte: moment(date).startOf('day').toISOString(true),
                    },
                  },
                  {
                    timestamp: {
                      _lte: moment(date).endOf('day').toISOString(true),
                    },
                  },
                ],
              }}
            >
              {(data) => (
                <Card title={'Stats'}>
                  <Stack spacing={10} isInline>
                    <Stat>
                      <StatLabel>Total Water Consumed Today</StatLabel>
                      <StatNumber>
                        {data.sum.quantity} ML out of 3000 ML
                      </StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Number of Intakes</StatLabel>
                      <StatNumber>{data.count}</StatNumber>
                    </Stat>
                  </Stack>
                </Card>
              )}
            </Water.Aggregate>
            <Water.List
              where={{
                _and: [
                  {
                    timestamp: {
                      _gte: moment(date).startOf('day').toISOString(true),
                    },
                  },
                  {
                    timestamp: {
                      _lte: moment(date).endOf('day').toISOString(true),
                    },
                  },
                ],
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
