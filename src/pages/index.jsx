import { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Flex,
  Checkbox,
  Text,
  Badge,
  Stack,
  IconButton,
  Textarea,
  Skeleton,
  Divider,
  Select,
} from '@chakra-ui/core';
import moment from 'moment';
import {GrMoreVertical} from 'react-icons/gr'
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import Records from 'components/records';
import { useQuery } from 'react-query';
import NewRecord from 'components/records/new';
const recordDisplay = (record) => {
  switch (record.recordType) {
    case 'task':
      return <Records.Task record={record} />;
    case 'glucose':
      return <Records.BloodGlucose record={record} />;
    case 'generic':
      return <Records.Generic record={record} />;
    case 'water':
      return <Records.WaterConsumption record={record} />;
  }
};
const fetchRecords = async (key, params) => {
  const date = moment(params.date).format('yyyy-MM-DD');
  return fetch(`/api/records?date=${date}`).then((r) => r.json());
};

const Loading = ({ count }) => {
  return (
    <Box>
      {[...Array(count).keys()].map((k) => (
        <Card my={5} height="60px" key={k}>
          <Skeleton key={k} colorStart="#232626" colorEnd="#232626" />
        </Card>
      ))}
    </Box>
  );
};

export default () => {
  const [date, setDate] = useState(Date.now());
  const [recordData, setRecordData] = useState({});
  const { status, data, error, refetch } = useQuery(
    ['records', { date }],
    fetchRecords
  );

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  const onSave = () => {
    setRecordData({});
    refetch();
  };

  const prevDate = () => {
    setDate(moment(date).subtract(1, 'days').toDate());
  };

  const nextDate = () => {
    setDate(moment(date).add(1, 'days').toDate());
  };
  return (
    <Box py={30} px={50}>
      <Flex justifyContent={'space-around'}>
        <Button mr={2} size="sm">
          Tasks
        </Button>
        <Button mr={2} size="sm">
          Projects
        </Button>
        <Button mr={2} size="sm">
          Initiatives
        </Button>
        <Box ml={'auto'}>
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
        </Box>
      </Flex>
      <NewRecord date={date} recordData={recordData.data} onSave={onSave} />

      <Stack w={'100%'}>
        {status === 'loading' ? (
          <Loading count={10} />
        ) : (
          data.items.map((record) => (
            <Card
              borderWidth={1}
              my={3}
              px={4}
              py={2}
              key={record.id}
              onClick={() => setRecordData(record)}
            >
              <Flex width={"100%"} alignItems={"center"}>
                <Box flexGrow={1}>{recordDisplay(record)}</Box>
                <Box as={GrMoreVertical}/>
              </Flex>
            </Card>
          ))
        )}
      </Stack>
    </Box>
  );
};
