import { useEffect, useState } from 'react';
import { Box, SimpleGrid, Stack } from '@chakra-ui/core';
import moment from 'moment';
import Filter from './Filter';
import { useStore } from 'src/store';
import Card from 'src/components/Card'
const Day = ({ date }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      h={200}
      borderWidth={1}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
      <Stack>
        <Box textAlign={'center'} my={1}>
          {date}
        </Box>
      </Stack>
    </Box>
  );
};

export default ({calendarType, setCalendarType}) => {
  const [tasks, setTasks] = useState([]);
  const { getRecords } = useStore((state) => ({
    getRecords: state.getRecords,
  }));

  useEffect(() => {
    getRecords({
      date_gte: moment().startOf('month').format('yyyy-MM-DD'),
      date_lte: moment().endOf('month').format('yyyy-MM-DD'),
      recordType: 'task',
    }).then((r) => setTasks(r.items));
  }, []);

  return (
    <Box p={5}>
      <Filter calendarType={calendarType} setCalendarType={setCalendarType} />
      <Card>
        <SimpleGrid columns={7} spacing={0} my={5} mx={5}>
          {[...Array(30).keys()].map((i) => (
            <Day key={i} date={i + 1} />
          ))}
        </SimpleGrid>
      </Card>
    </Box>
  );
};
