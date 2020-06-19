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
import Water from 'src/assets/Water';
import moment from 'moment';
import Form from './form';
import Mutation from 'src/graphql/mutation';
export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleToggle();
      }}
      cursor={'pointer'}
    >
      <Flex textAlign={'center'} alignItems={'center'} pr={4}>
        <Box mx={3}>
          <Water width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'} flexGrow={1}>
          <Stack isInline spacing={10}>
            <Box>{record.quantity}</Box>
            <Box>{record.description}</Box>
          </Stack>
          <Box>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Box>
        </Stack>

        <Mutation resource={'water'} operation={'delete'}>
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
        <Divider />
        <Form model={record} />
      </Collapse>
    </Card>
  );
};
