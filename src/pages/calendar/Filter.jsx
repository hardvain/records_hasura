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
import moment from 'moment';

export default ({calendarType, setCalendarType, onPrev, onNext}) => {
  return (
    <Box>
      <Flex
        height={50}
        my={5}
        px={5}
        borderWidth={1}
        alignItems={'center'}
      >
        <IconButton
          variant={'solid'}
          size={'sm'}
          icon={'chevron-left'}
          mr={2}
          onClick={onPrev}
        />
        <DatePicker selected={moment()} type={'button'} />
        <Button variant={'outline'} size={'sm'} mr={2} ml={2}>
          Today
        </Button>
        <IconButton
          variant={'solid'}
          size={'sm'}
          icon={'chevron-right'}
          mr={4}
          onClick={onNext}
        />
        <Heading size={'sm'}>June 2020</Heading>
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
    </Box>
  );
};
