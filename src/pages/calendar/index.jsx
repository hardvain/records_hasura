import { useState, createElement } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Menu,
  Select,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from '@chakra-ui/core';
import MonthView from './Month';
import moment from 'moment';
import Card from 'src/components/Card'
const CalendarViewMap = {
  month: MonthView,
};
export default () => {
  const [calendarType, setCalendarType] = useState('month');
  return (
    <Card>
      <Flex
        height={50}
        my={5}
        mx={5}
        px={5}
        borderWidth={1}
        alignItems={'center'}
      >
        <Box flexGrow={1}></Box>
        <Select
          w={100}
          size={'sm'}
          value={calendarType}
          onChange={(e) => setCalendarType(e.target.value)}
        >
          <option value="month">Month</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="schedule">Schedule</option>
        </Select>
      </Flex>
      <Box>{createElement(CalendarViewMap[calendarType])}</Box>
    </Card>
  );
};
