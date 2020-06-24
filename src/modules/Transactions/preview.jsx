import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Badge,
  useColorMode,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Money from 'src/assets/Money';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';

export default ({ record, }) => {
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode();
  const mutate = useMutation({
    resource: 'transactions',
    operation: 'delete',
  });
  const handleToggle = () => setShow(!show);
  return (
    <Card highlight cursor="pointer">
      <Flex
        textAlign={'center'}
        alignItems={'center'}
        pr={4}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleToggle();
        }}
      >
        <Box mx={3}>
          <Money width={20} height={20} />
        </Box>
        <Stack alignItems={'flex-start'} flexGrow={1}>
          <Stack isInline spacing={10} w={'100%'}>
            <Box>
              {record.name} - {record.value}
            </Box>
            <Box flexGrow={1}></Box>
          </Stack>
          <Box>
            {record.timestamp
              ? moment(record.timestamp).format('Do, MMMM YYYY, H:mm')
              : '-'}
          </Box>
        </Stack>
        <Box mr={2}>
          <Badge>{record.priority}</Badge>
        </Box>
        <Box mr={2}>
          <Badge variantColor={'yellow'}>{record.status}</Badge>
        </Box>
        <Box>
          <Badge variantColor={'brand'}>{record.team}</Badge>
        </Box>
        <IconButton
          variant={'ghost'}
          variantColor={'red'}
          ml={2}
          size={'sm'}
          icon={'delete'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            mutate({ variables: { where: { id: { _eq: record.id } } } });
          }}
        />
      </Flex>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </Card>
  );
};
