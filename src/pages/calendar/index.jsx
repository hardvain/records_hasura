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
  IconButton,
  Text,
  Heading,
} from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';

import MonthView from './Month';
import WeekView from './Week';
import DayView from './Day';
import moment from 'moment';
import Card from 'src/components/Card';
const CalendarViewMap = {
  month: MonthView,
  week: WeekView,
  day: DayView,
};
export default ({ view = 'day' }) => {
  const [calendarType, setCalendarType] = useState(view);
  return (
    <Box>
      <Box>
        {createElement(CalendarViewMap[calendarType], {
          calendarType,
          setCalendarType,
        })}
      </Box>
    </Box>
  );
};
