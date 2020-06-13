import { useEffect, useState } from 'react';
import { Box, Flex, Stack, Skeleton, useToast, Heading } from '@chakra-ui/core';
import NotFound from 'src/assets/NotFound';
import Card from 'src/components/Card';
import { useStore } from 'src/store';

const Loading = ({ count, isBlock }) => {
  return (
    <Box>
      {isBlock ? (
        <Card my={5} height="200px">
          <Skeleton colorStart="#232626" colorEnd="#232626" />
        </Card>
      ) : (
        [...Array(count).keys()].map((k) => (
          <Card my={5} height="60px" key={k}>
            <Skeleton key={k} colorStart="#232626" colorEnd="#232626" />
          </Card>
        ))
      )}
    </Box>
  );
};

export default ({ filters, children, isBlock = false, ...rest }) => {
  const toast = useToast();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getRecords, deleteRecord, refreshedAt } = useStore((state) => ({
    refreshedAt: state.ui.refreshedAt,
    getRecords: state.getRecords,
    deleteRecord: state.deleteRecord,
  }));
  const updateRecords = () => {
    const transformedFilters = { ...filters };
    if (filters.date) {
      transformedFilters.date = filters.date.format('yyyy-MM-DD');
    }
    getRecords(transformedFilters).then((d) => {
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
        <Loading count={10} isBlock={isBlock} />
      ) : records.items.length > 0 ? (
        children(records.items)
      ) : (
        <Flex
          alignItems={'center'}
          w={'100%'}
          textAlign={'center'}
          direction={'column'}
        >
          <NotFound />
          <Heading>No Matching Records Found</Heading>
        </Flex>
      )}
    </Stack>
  );
};
