import { useState, createElement } from 'react';
import { Box } from '@chakra-ui/core';

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
