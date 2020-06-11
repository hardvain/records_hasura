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
  useToast,
  Select,
} from '@chakra-ui/core';
import moment from 'moment';
import NotFound from 'assets/NotFound';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import {RecordPreview} from 'components/records';
import { useQuery } from 'react-query';
import NewRecord from 'components/records/new';
import { fetchRecords, deleteRecord } from './record-fetch';
import useStore from 'store'

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
  const {activeDay,selectedRecord} = useStore(state => ({

  }))

  const [date, setDate] = useState(Date.now());
  const toast = useToast();
  const [recordData, setRecordData] = useState({});
  const { status, data, error, refetch } = useQuery(
    ['records', { date }],
    fetchRecords
  );

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  const onSaveCallback = () => {
    setRecordData({});
    refetch();
  };

  const del = async (id) => {
    await deleteRecord(id);
    toast({
      title: 'Record deleted successfully',
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true,
    });
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
        <Box ml={'auto'}>
          <Button mr={2} size="sm">
            Tasks
          </Button>
          <Button mr={2} size="sm">
            Projects
          </Button>
          <Button mr={2} size="sm">
            Initiatives
          </Button>
        </Box>
      </Flex>
      <NewRecord date={date} recordModel={recordData} onSave={onSaveCallback} />
      <Stack w={'100%'}>
        {status === 'loading' ? (
          <Loading count={10} />
        ) : data.items.length > 0 ? (
          data.items.map((record) => (
            <Card borderWidth={1} my={3} px={4} py={2} key={record.id}>
              <Flex width={'100%'} alignItems={'center'}>
                <Box flexGrow={1}><RecordPreview recordData={record} refetch={refetch}/></Box>
                <IconButton
                  mr={2}
                  onClick={() => setRecordData(record)}
                  variant={'default'}
                  icon={'edit'}
                  size={'sm'}
                />
                <IconButton
                  variant={'default'}
                  icon={'delete'}
                  size={'sm'}
                  onClick={() => del(record.id)}
                />
              </Flex>
            </Card>
          ))
        ) : (
          <Flex justifyContent={'space-around'} w={'100%'}>
            <NotFound />
          </Flex>
        )}
      </Stack>
    </Box>
  );
};
