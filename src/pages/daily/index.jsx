import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Select,
  Stack,
  Text,
} from '@chakra-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import DatePicker from 'src/components/DatePicker';
import Reviews from 'src/modules/Reviews';
import Chart from './Chart';
const routines = [
  `Get an overview of today's task`,
  `Plan topics to read for the day`,
  `Manage the inbox`,
  'Go through slack messages',
  `Review PRs`,
  `Review Jira Board`,
  `Update timesheets`,
];
export default () => {
  const [date, setDate] = useState(moment());
  return (
    <Box>
      <Stack isInline spacing={0}>
        <Box flex={2} p={5}>
          <StackedCard
            actions={
              <Stack isInline px={5} py={2} alignItems={'center'}>
                <Button flex={1} size={'sm'} variant={'outline'}>
                  Today
                </Button>
                <Stack isInline flex={1}>
                  <IconButton
                    size={'sm'}
                    icon={'chevron-left'}
                    variant={'solid'}
                    onClick={() => {
                      setDate(moment(date).subtract(1, 'days'));
                    }}
                  />
                  <IconButton
                    onClick={() => {
                      setDate(moment(date).add(1, 'days'));
                    }}
                    size={'sm'}
                    icon={'chevron-right'}
                    variant={'solid'}
                  />
                </Stack>
                <Box flex={2}>
                  <DatePicker
                    type={'button'}
                    onChange={setDate}
                    selected={date}
                  />
                </Box>

                <Box flexGrow={1} flex={10} />
              </Stack>
            }
          >
            <Box p={5}>
              <Stack spacing={2}>
                {routines.map((r, i) => (
                  <Stack key={i} isInline spacing={2}>
                    <Checkbox variantColor={'brand'}/>
                    <Text>{r}</Text>
                  </Stack>
                ))}
              </Stack>
              <Reviews.Form />
            </Box>
          </StackedCard>
        </Box>
        <Stack flex={1} borderLeftWidth={1} h={'100vh'} p={2}>
          <Text textAlign={'center'}>Weekly Score</Text>
          <Box mt={2}>
            <Chart />
          </Box>
          <Divider />
          <Text textAlign={'center'}>Monthly Score</Text>
          <Box mt={2}>
            <Chart />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
