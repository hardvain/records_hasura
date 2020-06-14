import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Text,
  Grid,
} from '@chakra-ui/core';
import moment from 'moment';
import Filter from 'src/pages/calendar/Filter';
import { useStore } from 'src/store';
import Card from 'src/components/Card';
const Hour = ({ records }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      minHeight={100}
      borderWidth={1}
      cursor={'pointer'}
    >
      {records?.map((r) => (
        <Box
          my={1}
          borderRadius={4}
          bg={'cyan.500'}
          p={2}
          py={1}
          key={r.id}
          h={10}
          borderWidth={1}
        >
          {r.data.value}
        </Box>
      ))}
    </Box>
  );
};

const Label = ({ hour }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Flex
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={20}
      h={100}
      justifyContent={'center'}
      alignItems={'center'}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
      <Text>{hour}</Text>
    </Flex>
  );
};

const generateSkeleton = (tasks) => {
  let data = [];
  for (let i = 0; i < 24; i++) {
    let records = tasks.filter((t) => {
      const taskHour = parseInt(moment(t.timestamp).format('hh'));
      return taskHour === i;
    });
    data.push({ type: 'label', value: `${i}:00` });
    data.push({ type: 'hour', records });
  }
  return data;
};

export default ({ calendarType, setCalendarType }) => {
  const [date, setDate] = useState(moment().toISOString());
  const [tasks, setTasks] = useState([]);
  const { getRecords } = useStore((state) => ({
    getRecords: state.getRecords,
  }));

  const next = () => {
    setDate(moment(date).add(1, 'days').toISOString());
  };

  const prev = () => {
    setDate(moment(date).subtract(1, 'days').toISOString());
  };

  useEffect(() => {
    getRecords({
      date: moment(date).format('yyyy-MM-DD'),
      recordType: 'task',
    }).then((r) => setTasks(r.items));
  }, [date]);

  const data = generateSkeleton(tasks);
  return (
    <Box p={5}>
      {calendarType && (
        <Filter
          calendarType={calendarType}
          setCalendarType={setCalendarType}
          onNext={next}
          onPrev={prev}
        />
      )}
      <Card>
        <Grid templateColumns="1fr 20fr" gap={0}>
          {data.map((d, index) => {
            if (d.type === 'label') {
              return <Label key={index} hour={d.value} />;
            } else if (d.type === 'hour') {
              return <Hour key={index} records={d.records} />;
            } else {
              return <Label key={index} />;
            }
          })}
        </Grid>
      </Card>
    </Box>
  );
};
