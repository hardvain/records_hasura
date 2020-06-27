import {
  Box,
  Button,
  IconButton,
  Select,
  Skeleton,
  Stack,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';

const PreviewCard = () => {
  return (
    <Box borderWidth={1} borderRadius={5} p={5} mb={4}>
      <Stack>
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
      </Stack>
    </Box>
  );
};

const MonthDay = ({ day }) => {
  return (
    <Box borderWidth={1} borderColor={'rgba(0,0,0,0.03)'} h={200}>
      <Stack>
        <Box textAlign={'center'}>
          <Text>{day}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
const MonthView = () => {
  return (
    <SimpleGrid columns={7}>
      {[...Array(30).keys()].map((i) => (
        <MonthDay key={i} day={i + 1} />
      ))}
    </SimpleGrid>
  );
};
const DayView = () => {
  return (
    <Stack>
      {[...Array(24).keys()].map((i) => (
        <Box height={100} key={i} borderBottomWidth={1}>
          <Stack>
            <Box textAlign={'center'}>
              <Text fontSize={10}>{i}:00</Text>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
export default () => {
  const [view, setView] = useState('day');
  return (
    <Box>
      <Stack isInline minHeight={'100vh'} spacing={0}>
        <Stack flex={3}>
          <Stack isInline borderBottomWidth={1} px={5} py={2}>
            <Button flex={1} size={'sm'} variant={'outline'}>
              Today
            </Button>
            <Stack isInline flex={1}>
              <IconButton size={'sm'} icon={'chevron-left'} variant={'solid'} />
              <IconButton
                size={'sm'}
                icon={'chevron-right'}
                variant={'solid'}
              />
            </Stack>
            <Box flex={2}>
              <Text>27 June 2020</Text>
            </Box>

            <Box flexGrow={1} flex={10} />
            <Select size={'sm'} flex={2}>
              <option value={'day'}>Day</option>
              <option value={'week'}>Week</option>
              <option value={'month'}>Month</option>
              <option value={'schedule'}>Schedule</option>
            </Select>
          </Stack>
          <DayView />
        </Stack>
        <Stack flex={1} borderLeftWidth={1} p={3} spacing={10}>
          <Text>Without Time</Text>

          {[...Array(10).keys()].map((i) => (
            <PreviewCard key={i} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
