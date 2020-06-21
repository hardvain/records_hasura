import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Water from 'src/assets/Water';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from '../form';

export default ({ record, }) => {
  const [show, setShow] = useState(false);
  const { colorMode } = useColorMode();
  const mutate = useMutation({
    resource: 'water',
    operation: 'delete',
  });
  const handleToggle = () => setShow(!show);
  return (
    <Card cursor={'pointer'} highlight>
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
          <Water width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'} flexGrow={1}>
          <Stack isInline spacing={10}>
            <Box>{record.quantity}</Box>
            <Box>{record.description}</Box>
          </Stack>
          <Box>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Box>
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
