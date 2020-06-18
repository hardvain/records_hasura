import { Box, Flex, IconButton, Stack } from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Water from 'src/assets/Water';
import moment from 'moment';
import Form from './form';
import Mutation from 'src/graphql/mutation';
export default ({ record }) => {
  return (
    <Card>
      <Flex textAlign={'center'} alignItems={'center'} pr={4}>
        <Box mx={3}>
          <Water width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'} flexGrow={1}>
          <Box>{record.quantity}</Box>
          <Box>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Box>
        </Stack>
        <Mutation resource={'water'} operation={'delete'}>
          {(mutate) => (
            <IconButton
              variant={'ghost'}
              size={'small'}
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
    </Card>
  );
};
