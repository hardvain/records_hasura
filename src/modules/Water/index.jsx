import {
  Box,
  Flex,
  IconButton,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/core';
import { useState } from 'react';
import Query from 'src/graphql/query';
import Card from 'src/components/Card';
import Water from 'src/assets/Water';
import moment from 'moment';
import Form from './form';
import Mutation from 'src/graphql/mutation';
import Preview from './preview';
import Collection from 'src/collection';
import Table from 'src/collection/Table';
export default ({ where, order_by, limit, offset }) => {
  const [selectedRecord, setSelectedRecord] = useState();
  const fields = `{
    id
    quantity
    description
    timestamp
}`;
  return (
    <Box>
      <Box my={5}>
        <Query
          resource={'water'}
          fields={fields}
          where={where}
          order_by={order_by}
          limit={limit}
          offset={offset}
          aggregateObject={`{
          sum{quantity}
          count
        }`}
          isAggregate={true}
        >
          {(data) => (
            <Card title={'Stats'}>
              <Stack spacing={10} isInline>
                <Stat>
                  <StatLabel>Total Water Consumed</StatLabel>
                  <StatNumber>{data.sum.quantity}</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Number of Intakes</StatLabel>
                  <StatNumber>{data.count}</StatNumber>
                </Stat>
              </Stack>
            </Card>
          )}
        </Query>
      </Box>
      <Card p={5}>
        <Form model={selectedRecord} />
      </Card>
      <Collection
        resource={'water'}
        fields={fields}
        where={where}
        order_by={order_by}
        limit={limit}
        offset={offset}
        config={{
          type: 'list',
          preview: Preview,
          onItemSelect: setSelectedRecord,
        }}
      />
    </Box>
  );
};

const TablePreview = ({ record }) => {
  return (
    <>
      <td>{record.quantity}</td>
      <td>{record.timestamp}</td>
    </>
  );
};
