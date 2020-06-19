import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Divider, useColorMode,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Sugar from 'src/assets/Sugar';
import moment from 'moment';
import Form from './form';
import Mutation from 'src/graphql/mutation';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode();

  const handleToggle = () => setShow(!show);
  return (
    <Card
      borderColor={colorMode === 'light' ? 'rgba(0,0,0,0.6)' : 'gray.500'}
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
            <Box>{record.value}</Box>
            <Box>{record.description}</Box>
          </Stack>
          <Box>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Box>
        </Stack>

        <Mutation resource={'glucose'} operation={'delete'}>
          {(mutate) => (
            <IconButton
              ml={2}
              size={"sm"}
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
