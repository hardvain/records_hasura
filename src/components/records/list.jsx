import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  IconButton,
  Skeleton,
  useToast, Heading, Badge,
} from '@chakra-ui/core';
import Card from 'src/components/Card';
import { RecordPreview } from 'src/components/records';
import { useStore } from 'src/store';
import List from 'src/components/core/List';

export default ({ filters, onItemSelect }) => {
  const toast = useToast();
  const { deleteRecord } = useStore((state) => ({
    deleteRecord: state.deleteRecord,
  }));

  const del = async (id) => {
    await deleteRecord(id, toast);
  };

  return (
    <Stack w={'100%'}>
      <List filters={filters}>
        {(records) =>
          records.map((record) => (
            <Card borderWidth={1} my={3} px={4} py={2} key={record.id}>
              <Flex width={'100%'} alignItems={'center'}>
                <Box flexGrow={1}>
                  <RecordPreview record={record} />
                </Box>
                <Stack mr={2}>
                  <Box>
                    {record.projects?.map((t) => (
                      <Badge key={t.id}>{t.name}</Badge>
                    ))}
                  </Box>
                </Stack>
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
        }
      </List>
    </Stack>
  );
};
