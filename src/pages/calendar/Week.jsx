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
import Card from 'src/components/Card'
import { useStore } from 'src/store';
const Hour = ({ date }) => {
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
    ></Box>
  );
};
const Heading = ({ day }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      h={50}
      textAlign={'center'}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
      <Text>{day}</Text>
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
      h={50}
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
  data.push({});
  data.push({ type: 'heading', value: `Monday` });
  data.push({ type: 'heading', value: `Tuesday` });
  data.push({ type: 'heading', value: `Wednesday` });
  data.push({ type: 'heading', value: `Thursday` });
  data.push({ type: 'heading', value: `Friday` });
  data.push({ type: 'heading', value: `Saturday` });
  data.push({ type: 'heading', value: `Sunday` });
  for (let i = 0; i < 24; i++) {
    data.push({ type: 'label', value: `${i}:00` });
    for (let i = 0; i < 7; i++) {
      data.push({ type: 'hour' });
    }
  }
  return data;
};

export default ({ calendarType, setCalendarType }) => {
  const [tasks, setTasks] = useState([]);
  const { getRecords } = useStore((state) => ({
    getRecords: state.getRecords,
  }));

  useEffect(() => {
    getRecords({
      date_gte: moment().startOf('week').format('yyyy-MM-DD'),
      date_lte: moment().endOf('week').format('yyyy-MM-DD'),
      recordType: 'task',
    }).then((r) => setTasks(r.items));
  }, []);

  const data = generateSkeleton(tasks);
  return (
    <Box>
      <Filter calendarType={calendarType} setCalendarType={setCalendarType} />
      <Card p={5}>
        <Grid templateColumns="1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr" gap={0}>
          {data.map((d, index) => {
            if (d.type === 'label') {
              return <Label key={index} hour={d.value} />;
            } else if (d.type === 'heading') {
              return <Heading key={index} day={d.value} />;
            } else if (d.type === 'hour') {
              return <Hour key={index} />;
            } else {
              return <Label key={index} />;
            }
          })}
        </Grid>
      </Card>
    </Box>
  );
};
