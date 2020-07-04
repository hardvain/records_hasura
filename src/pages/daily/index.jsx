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
import useMutation from 'src/hooks/graphql/useMutation';
import Reviews from 'src/modules/Reviews';
import { getReviewForDate } from 'src/modules/Reviews/factories';
import Checklists from 'src/pages/daily/Checklists';
import Chart from './Chart';
const checklist = [
  { value: `Get an overview of today's task`, isChecked: false },
  { value: `Plan topics to read for the day`, isChecked: false },
  { value: `Manage the inbox`, isChecked: false },
  { value: `Go through slack messages`, isChecked: false },
  { value: `Review PRs`, isChecked: false },
  { value: `Review Jira Board`, isChecked: false },
  { value: `Update timesheets`, isChecked: false },
];
export default () => {
  const [date, setDate] = useState(moment());
  const [data] = getReviewForDate(date);
  const mutate = useMutation({
    resource: 'reviews',
    operation: 'update',
    silent: true,
  });
  const review = data ? data[0] : {};
  const setChecklist = (list) => {
    console.log(data, list);
    mutate({
      variables: {
        object: { ...review, checklist: list },
        where: { id: { _eq: review?.id } },
      },
    });
  };
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
                <Checklists
                  checklist={review.checklist || checklist}
                  setChecklist={setChecklist}
                />
              </Stack>
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
