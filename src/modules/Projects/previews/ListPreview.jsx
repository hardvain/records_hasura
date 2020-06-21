import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Divider,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Sugar from 'src/assets/Sugar';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from '../form';

export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'projects',
    operation: 'delete',
  });
  return (
    <Card
      highlight
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleToggle();
      }}
      cursor={'pointer'}
    >
      <Flex textAlign={'center'} alignItems={'center'} pr={4}>
        <Box mx={3}>
          <Sugar width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'} flexGrow={1}>
          <Stack isInline spacing={10}>
            <Box>{record.name}</Box>
            <Box>{record.description}</Box>
          </Stack>
          <Box>{record.is_archived}</Box>
        </Stack>
        <IconButton
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
        <Divider />
        <Form model={record} />
      </Collapse>
    </Card>
  );
};
