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
import React, { useEffect, useState } from 'react';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import DatePicker from 'src/components/DatePicker';
import useMutation from 'src/hooks/graphql/useMutation';
import Reviews from 'src/modules/Reviews';
import { getReviewForDate } from 'src/modules/Reviews/factories';
import { SmartChecklists } from './Checklists';
import Checklists from 'src/pages/daily/Checklists';
import Chart from './Chart';
const routines = [
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
  const [checklist, setChecklist] = useState([]);
  const mutate = useMutation({
    resource: 'reviews',
    operation: 'update',
    silent: true,
  });

  const review = data ? data[0] : undefined;
  useEffect(() => {
    if (review?.id) {
      setChecklist(review.checklist);
    }
  }, [review]);
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
                <SmartChecklists
                  id={review?.id}
                  name={'checklist'}
                  resource={'reviews'}
                  checklist={checklist}
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
