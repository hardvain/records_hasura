import Query from 'src/graphql/query';
import Form from './form';
import Preview from './preview';
import Collection from 'src/collection';
const fields = `{
    id
    name
    timestamp
    description
    team
    type
    value
}`;
const TransactionsCollection = (props) => {
  return (
    <Collection
      resource={'transactions'}
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
  <TransactionsCollection
    config={{
      type: 'list',
      preview: Preview,
    }}
    {...props}
  />
);

const Table = (props) => (
  <TransactionsCollection
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
      resource={'transactions'}
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
      <td>{record.name}</td>
      <td>{record.due_date}</td>
    </>
  );
};

export default { Form, Aggregate, List, Table };
