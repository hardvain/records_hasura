import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  IconButton,
  Skeleton,
  useToast,
} from '@chakra-ui/core';
import moment from 'moment';
import NotFound from 'assets/NotFound';
import Card from 'components/Card';
import { RecordPreview } from 'components/records';
import { useQuery } from 'react-query';
import { fetchRecords, deleteRecord } from './api';
import { useStore } from 'store';

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

export default ({ filters, onItemSelect, mutatedAt }) => {
  const toast = useToast();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getRecords } = useStore((state) => ({
    getRecords: state.getRecords,
  }));
  useEffect(() => {
    getRecords(filters).then((d) => {
      setRecords(d);
      setIsLoading(false);
    });
  }, [filters]);

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

  return (
    <Stack w={'100%'}>
      {isLoading ? (
        <Loading count={10} />
      ) : records.items.length > 0 ? (
        records.items.map((record) => (
          <Card borderWidth={1} my={3} px={4} py={2} key={record.id}>
            <Flex width={'100%'} alignItems={'center'}>
              <Box flexGrow={1}>
                <RecordPreview recordData={record} />
              </Box>
              <IconButton
                mr={2}
                onClick={() => onItemSelect(record)}
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
  );
};
