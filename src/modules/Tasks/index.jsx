import { Divider, Box, Stack, Text, Badge } from '@chakra-ui/core';
import Query from 'src/graphql/query';
import Form from './form';
import Card from 'src/components/Card'
import moment from 'moment';
import Preview from './preview';
import Collection from 'src/components/collection';
const fields = `{
    id
    name
    due_date
    description
    priority
    team
    status
}`;
const TasksCollection = (props) => {
  return (
    <Collection
      resource={'tasks'}
      fields={fields}
      config={{
        type: 'list',
        preview: Preview,
      }}
      {...props}
    />
  );
};

const List = (props) => (
  <TasksCollection
    config={{
      type: 'list',
      preview: Preview,
    }}
    {...props}
  />
);

const Table = (props) => (
  <TasksCollection
    config={{
      type: 'table',
      preview: TablePreview,
    }}
    {...props}
  />
);


const Gallery = (props) => (
  <TasksCollection
    config={{
      type: 'gallery',
      preview: GalleryPreview,
    }}
    {...props}
  />
);

const Aggregate = ({ where, order_by, limit, offset, aggregateObject, children, ...rest }) => {
  return (
    <Query
      resource={'tasks'}
      fields={fields}
      where={where}
      order_by={order_by}
      limit={limit}
      offset={offset}
      aggregateObject={`{
          count
        }`}
      isAggregate={true}
    >
      {(data) => children(data)}
    </Query>
  );
};
const GalleryPreview = ({ record }) => {
  return (
    <Card title={record.name}>
      <Stack>
        <Stack isInline>
          <Text>Description:</Text>
          <Text>{record.description}</Text>
        </Stack>
        <Stack isInline>
          <Text>Due Date:</Text>
          <Text>{moment(record.due_date).format('Do, MMMM YYYY, H:mm')}</Text>
        </Stack>
        <Stack isInline>
          <Text>Priority:</Text>
          <Text>{<Badge>{record.priority}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Status:</Text>
          <Text>{<Badge>{record.status}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Team:</Text>
          <Text>{<Badge>{record.team}</Badge>}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

const TablePreview = ({ record }) => {
  return (
    <>
      <Box p={2}>{record.name}</Box>
      <Divider orientation={'vertical'}/>
      <Box p={2}>{record.due_date}</Box>
    </>
  );
};

export default { Form, Aggregate, List, Table, Gallery };
