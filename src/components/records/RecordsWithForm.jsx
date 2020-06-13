import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Collapse,
  Stack,
  Select,
} from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import RecordForm from 'src/components/records/form';
import RecordsList from 'src/components/records/list';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';

export default ({
  filters,
  frozenType,
  collapseList = false,
  showForm = true,
}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));

  const [selectedRecord, setSelectedRecord] = useState();

  return (
    <Box>
      <Stack>
        {showForm && (
          <RecordForm
            date={filters.date || date}
            model={selectedRecord}
            frozenType={frozenType}
          />
        )}
        {collapseList ? (
          <Box mt={2}>
            <Button w={'100%'} onClick={handleToggle}>
              {show ? 'Hide Records' : 'Show Records'}
            </Button>
            <Collapse mt={4} isOpen={show}>
              <RecordsList filters={filters} onItemSelect={setSelectedRecord} />
            </Collapse>
          </Box>
        ) : (
          <RecordsList filters={filters} onItemSelect={setSelectedRecord} />
        )}
      </Stack>
    </Box>
  );
};
