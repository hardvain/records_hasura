import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Grid,
  Text,
  Flex,
  Checkbox,
} from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import ProgressBar from 'react-customizable-progressbar';
import { useStore } from 'src/store';
import moment from 'moment';
import DayView from 'src/pages/calendar/Day';
export default () => {
  const [water, setWater] = useState([]);
  const { getRecords } = useStore((state) => ({
    getRecords: state.getRecords,
  }));

  useEffect(() => {
    getRecords({
      recordType: 'water',
      date: moment().toISOString(),
    }).then((r) => setWater(r.items));
  }, []);

  const waterConsumption = water
    .map((a) => a?.data?.value || 0)
    .reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);
  return (
    <Box p={10}>
      <Heading mb={10}>14 June 2020</Heading>
      <Stack isInline spacing={10}>
        <Stack alignItems={'center'}>
          <ProgressBar
            strokeColor={'#42C3E1'}
            strokeWidth={10}
            trackStrokeColor={'rgba(0,0,0,0.2)'}
            trackStrokeWidth={10}
            progress={((waterConsumption || 0) * 100) / 3000}
            radius={50}
          />
          <Text>Water: {waterConsumption / 1000}L out of 3L</Text>
        </Stack>
        <Stack alignItems={'center'}>
          <ProgressBar
            strokeColor={'green'}
            strokeWidth={10}
            trackStrokeColor={'rgba(0,0,0,0.2)'}
            trackStrokeWidth={10}
            progress={((waterConsumption || 0) * 100) / 3000}
            radius={50}
          />
          <Text>Steps: {waterConsumption / 1000}L out of 10000 Steps</Text>
        </Stack>
      </Stack>
      <Flex columns={2} spacing={10} justifyContent={'space-between'}>
        <Stack flex={1} spacing={10}>
          <Card title={"Schedule"}>
            <DayView />
          </Card>
        </Stack>
        <Box flex={1} spacing={10}>
          <Card title={'Water'} height={250}>
            <Stack isInline spacing={5} p={5}>
              <Button>50 ML</Button>
              <Button>200 ML</Button>
              <Button>250 ML</Button>
              <Button>500 ML</Button>
              <ProgressBar
                strokeColor={'#42C3E1'}
                progress={((waterConsumption || 0) * 100) / 3000}
                radius={50}
              />
            </Stack>
          </Card>
          <Card title={'Glucose'} h={250}>
            <Stack isInline spacing={5} p={5}>
              <Input />
              <Button>Add</Button>
            </Stack>
          </Card>
          <Card title={'Insulin'}>
            <Stack isInline spacing={5} p={5}>
              <Stack>
                <Stack isInline spacing={5}>
                  <Button>1 Unit</Button>
                  <Button>2 Units</Button>
                  <Button>3 Units</Button>
                  <Button>4 Units</Button>
                  <Button>5 Units</Button>
                </Stack>
                <Stack isInline spacing={5}>
                  <Button>6 Unit</Button>
                  <Button>7 Units</Button>
                  <Button>8 Units</Button>
                  <Button>9 Units</Button>
                  <Button>10 Units</Button>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};
