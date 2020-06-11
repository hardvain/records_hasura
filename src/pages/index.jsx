import { Box, Button, Flex, IconButton, Stack } from '@chakra-ui/core';
import DatePicker from 'components/DatePicker';
import RecordForm from 'components/records/form';
import RecordsList from 'components/records/list';
import moment from 'moment';
import { useState } from 'react';
import { useStore } from 'store';

export default () => {
  const { date, nextDate, prevDate, setDate } = useStore((state) => ({
    date: state.ui.date,
    nextDate: state.nextDate,
    prevDate: state.prevDate,
    setDate: state.setDate,
  }));
  const [mutatedAt, setMutatedAt] = useState(moment().toISOString());
  const [selectedRecord, setSelectedRecord] = useState({});

  const onSave = () => {
    setMutatedAt(moment().toISOString());
  };

  return (
    <Box py={30} px={50}>
      <Flex justifyContent={'space-around'}>
        <Flex>
          <IconButton
            size={'sm'}
            icon={'chevron-left'}
            mr={2}
            onClick={prevDate}
          />
          <DatePicker.ButtonDatePicker selected={date} onChange={setDate} />
          <IconButton
            size={'sm'}
            icon={'chevron-right'}
            ml={2}
            onClick={nextDate}
          />
        </Flex>
        <Box ml={'auto'}>
          <Button mr={2} size="sm">
            Tasks
          </Button>
          <Button mr={2} size="sm">
            Projects
          </Button>
          <Button mr={2} size="sm">
            Initiatives
          </Button>
        </Box>
      </Flex>
      <Stack>
        <RecordForm date={date} model={selectedRecord} onSave={onSave} />
        <RecordsList
          filters={{ date: date.format('yyyy-MM-DD') }}
          onItemSelect={setSelectedRecord}
          mutatedAt={mutatedAt}
        />
      </Stack>
    </Box>
  );
};
