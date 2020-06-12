import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  IconButton,
  Skeleton,
  useToast,
} from '@chakra-ui/core';
import NotFound from 'src/assets/NotFound';
import Card from 'src/components/Card';
import { RecordPreview } from 'src/components/records';
import { useStore } from 'src/store';

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
  const { getRecords, deleteRecord } = useStore((state) => ({
    getRecords: state.getRecords,
    deleteRecord: state.deleteRecord,
  }));
  const updateRecords = () => {
    getRecords(filters).then((d) => {
      setRecords(d);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    updateRecords()
  }, [filters]);

  const del = async (id) => {
    await deleteRecord(id,toast)
    updateRecords()
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
                <RecordPreview record={record} />
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
