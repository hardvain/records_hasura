import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Text,
  Divider,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import Card from 'src/components/Card';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';


export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'dishes',
    operation: 'delete',
  });
  return (
    <Card
      m={0}
      borderRadius={0}
      borderBottomWidth={0}
      condensed
      highlight
      thickLeftBorder={show}
    >
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          mr={0}
          variant={'ghost'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Stack alignItems={'flex-start'} flexGrow={1}>
          <Stack isInline spacing={10} w={'100%'}>
            <Box>{record.name}</Box>
            <Box flexGrow={1}></Box>
          </Stack>
          <Box>
            <Stack isInline>
              <Text>Carbs:</Text>
              <Text>{record.carbs}</Text>
              <Divider orientation={'vertical'} />
              <Text>Fat:</Text>
              <Text>{record.fat}</Text>
              <Divider orientation={'vertical'} />
              <Text>Protein:</Text>
              <Text>{record.protein}</Text>
            </Stack>
          </Box>
        </Stack>

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
      </Stack>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </Card>
  );
};
