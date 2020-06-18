import { Box, Flex, Stack } from '@chakra-ui/core';
import List from 'src/graphql/list';
import Card from 'src/components/Card';
import Water from 'src/assets/Water';
import moment from 'moment';
import Form from './form';
const Preview = ({ water }) => {
  return (
    <Card>
      <Flex textAlign={'center'} alignItems={'center'}>
        <Box mx={3}>
          <Water width={20} height={20} />
        </Box>
        <Stack alignItems={'baseline'}>
          <Box>{water.quantity}</Box>
          <Box>{moment(water.timestamp).format('Do, MMMM YYYY, H:mm')}</Box>
        </Stack>
      </Flex>
    </Card>
  );
};

export default ({ where, order_by, limit, offset }) => {
  const fields = `{
    id
    quantity
    description
    timestamp
}`;
  return (
    <Box>
      <Card p={5}>
        <Form />
      </Card>
      <List
        resource={'water'}
        fields={fields}
        where={where}
        order_by={order_by}
        limit={limit}
        offset={offset}
      >
        {(data) => (
          <Box>
            {data.water.map((item) => (
              <Preview key={item.id} water={item} />
            ))}
          </Box>
        )}
      </List>
    </Box>
  );
};
