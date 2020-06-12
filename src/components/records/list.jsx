import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  IconButton,
  Skeleton,
  useToast,
} from '@chakra-ui/core';
import Card from 'src/components/Card';
import { RecordPreview } from 'src/components/records';
import { useStore } from 'src/store';
import List from "src/components/core/List"
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

export default ({ filters, onItemSelect }) => {
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
      <List filters={filters}>
        {records => records.map((record) => (
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
        ))}
      </List>
    </Stack>
  );
};
