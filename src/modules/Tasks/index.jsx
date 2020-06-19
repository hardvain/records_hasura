import { Divider, Box } from '@chakra-ui/core';
import Query from 'src/graphql/query';
import Form from './form';
import Preview from './preview';
import Collection from 'src/collection';
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
const TablePreview = ({ record }) => {
  return (
    <>
      <Box p={2}>{record.name}</Box>
      <Divider orientation={'vertical'}/>
      <Box p={2}>{record.due_date}</Box>
    </>
  );
};

export default { Form, Aggregate, List, Table };
