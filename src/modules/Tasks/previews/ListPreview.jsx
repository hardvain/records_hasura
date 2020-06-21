import { Box, Flex, IconButton, Stack, Collapse, Badge } from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Task from 'src/assets/Task';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from '../form';


export default ({ record, }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({ resource: 'tasks', operation: 'delete' });
  return (
    <Card cursor="pointer" animate highlight>
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
          <Task width={20} height={20} />
        </Box>
        <Stack alignItems={'flex-start'} flexGrow={1}>
          <Stack isInline spacing={10} w={'100%'}>
            <Box>{record.name}</Box>
            <Box flexGrow={1}></Box>
          </Stack>
          <Box>
            {record.due_date
              ? moment(record.due_date).format('Do, MMMM YYYY, H:mm')
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
