import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  IconButton,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import Card from 'src/components/core/card';
import moment from 'moment';
import { FormContext, useForm } from 'react-hook-form';
import Skeleton from 'src/components/core/Skeleton';
import React, { useEffect, useState } from 'react';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import * as DatePicker from 'src/components/forms/DatePicker';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
import Reviews from 'src/modules/Reviews';
import { getReviewForDate } from 'src/modules/Reviews/factories';
import Tasks from 'src/modules/Tasks';
import * as TaskFilters from 'src/modules/Tasks/filters';
import { SmartChecklists } from './Checklists';
import Checklists from './Checklists';
import Chart from './Chart';
const routines = [
  { id: 1, value: `Get an overview of today's task`, isChecked: false },
  { id: 2, value: `Plan topics to read for the day`, isChecked: false },
  { id: 3, value: `Manage the inbox`, isChecked: false },
  { id: 4, value: `Go through slack messages`, isChecked: false },
  { id: 5, value: `Review PRs`, isChecked: false },
  { id: 6, value: `Review Jira Board`, isChecked: false },
  { id: 7, value: `Update timesheets`, isChecked: false },
];

const Scores = ({ id, scores = [] }) => {
  const mutate = useMutation({
    resource: 'reviews',
    operation: 'update',
  });
  const addScore = (value) => {
    mutate({
      variables: {
        object: {
          scores: [
            ...(scores ? scores : []),
            { value, timestamp: moment().toISOString(true) },
          ],
        },
        where: { id: { _eq: id } },
      },
    });
  };
  return (
    <Stack>
      <SimpleGrid columns={5}>
        <Button
          onClick={() => addScore(1)}
          variant={'outline'}
          borderRadius={0}
        >
          1
        </Button>
        <Button
          onClick={() => addScore(2)}
          variant={'outline'}
          borderRadius={0}
        >
          2
        </Button>
        <Button
          onClick={() => addScore(3)}
          variant={'outline'}
          borderRadius={0}
        >
          3
        </Button>
        <Button
          onClick={() => addScore(4)}
          variant={'outline'}
          borderRadius={0}
        >
          4
        </Button>
        <Button
          onClick={() => addScore(5)}
          variant={'outline'}
          borderRadius={0}
        >
          5
        </Button>
        <Button
          onClick={() => addScore(6)}
          variant={'outline'}
          borderRadius={0}
        >
          6
        </Button>
        <Button
          onClick={() => addScore(7)}
          variant={'outline'}
          borderRadius={0}
        >
          7
        </Button>
        <Button
          onClick={() => addScore(8)}
          variant={'outline'}
          borderRadius={0}
        >
          8
        </Button>
        <Button
          onClick={() => addScore(9)}
          variant={'outline'}
          borderRadius={0}
        >
          9
        </Button>
        <Button
          onClick={() => addScore(10)}
          variant={'outline'}
          borderRadius={0}
        >
          10
        </Button>
      </SimpleGrid>
    </Stack>
  );
};

export default () => {
  const [date, setDate] = useState(moment());
  const [data] = getReviewForDate(date);
  const [checklist, setChecklist] = useState([]);
  const mutate = useMutation({
    resource: 'reviews',
    operation: 'update',
    silent: true,
  });
  const methods = useForm();

  const review = data ? data[0] : undefined;

  useEffect(() => {
    if (review?.id) {
      methods.reset(review);

      setChecklist(review.checklist || routines);
    }
  }, [review?.id]);
  return (
    <Stack spacing={10} p={5}>
      <Box>
        <StackedCard
          actions={
            <Stack isInline={[false, true]} px={5} py={2} alignItems={'center'}>
              <Button
                flex={1}
                size={'sm'}
                variant={'outline'}
                onClick={() => setDate(moment())}
              >
                Today
              </Button>
              <Stack isInline>
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
                <DatePicker.Default
                  type={'button'}
                  onChange={setDate}
                  value={date}
                />
              </Box>
              <Box flexGrow={1} flex={10} />
            </Stack>
          }
        >
          <Flex direction={['column', 'flex']} px={5}>
            <Stack spacing={2} flex={2}>
              <Heading size={'xs'}>Checklists</Heading>
              {review ? (
                <SmartChecklists
                  id={review?.id}
                  name={'checklist'}
                  resource={'reviews'}
                  checklist={checklist}
                  setChecklist={setChecklist}
                />
              ) : (
                <Box px={5}>
                  <Skeleton h={5} my={3} count={10} />
                </Box>
              )}
            </Stack>
          </Flex>
          <StackedCardItem title={'Summary'}>
            <Box p={5}>
              <FormContext
                {...methods}
                schema={Reviews.schema}
                resource={'reviews'}
                id={review?.id}
              >
                <Field
                  isSmart={true}
                  rows={10}
                  name={'summary'}
                  schema={Tasks.schema}
                  hideLabel={true}
                />
              </FormContext>
            </Box>
          </StackedCardItem>
        </StackedCard>
      </Box>
      <Card p={5}>
        <Tasks.List
          showBanners
          order_by={{
            ref_project: { ref_team: { created_at: 'asc' } },
            due_date: 'asc',
          }}
          showFilterBar
          where={TaskFilters.today(date)}
        />
      </Card>
    </Stack>
  );
};
