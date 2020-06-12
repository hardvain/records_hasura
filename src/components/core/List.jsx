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

export default ({ filters, children, ...rest }) => {
  const toast = useToast();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getRecords, deleteRecord, refreshedAt } = useStore((state) => ({
    refreshedAt: state.ui.refreshedAt,
    getRecords: state.getRecords,
    deleteRecord: state.deleteRecord,
  }));
  const updateRecords = () => {
    getRecords(filters).then((d) => {
      setRecords(d);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    updateRecords();
  }, [filters, refreshedAt]);

  const del = async (id) => {
    await deleteRecord(id, toast);
    updateRecords();
  };

  return (
    <Stack w={'100%'}>
      {isLoading ? (
        <Loading count={10} />
      ) : records.items.length > 0 ? (
        children(records.items)
      ) : (
        <Flex justifyContent={'space-around'} w={'100%'}>
          <NotFound />
        </Flex>
      )}
    </Stack>
  );
};
