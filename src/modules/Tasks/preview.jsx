import { Box, Flex, IconButton, Stack, Collapse } from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Task from 'src/assets/Task';
import moment from 'moment';
import Form from './form';
import Mutation from 'src/graphql/mutation';
export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Card>
      <Flex textAlign={'center'} alignItems={'center'} pr={4}>
        <Box mx={3}>
          <Task width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'} flexGrow={1}>
          <Stack isInline spacing={10}>
            <Box>{record.name}</Box>
            <Box>{record.priority}</Box>
          </Stack>
          <Box>
            {record.due_date
              ? moment(record.due_date).format('Do, MMMM YYYY, H:mm')
              : '-'}
          </Box>
        </Stack>
        <IconButton
          mr={2}
          icon={show ? 'chevron-up' : 'chevron-down'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Mutation resource={'tasks'} operation={'delete'}>
          {(mutate) => (
            <IconButton
              icon={'delete'}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                mutate({ variables: { where: { id: { _eq: record.id } } } });
              }}
            />
          )}
        </Mutation>
      </Flex>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </Card>
  );
};
