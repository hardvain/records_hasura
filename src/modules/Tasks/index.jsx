
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
const WaterCollection = (props) => {
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
  <WaterCollection
    config={{
      type: 'list',
      preview: Preview,
    }}
    {...props}
  />
);

const Table = (props) => (
  <WaterCollection
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
      <td>{record.quantity}</td>
      <td>{record.timestamp}</td>
    </>
  );
};

export default { Form, Aggregate, List, Table };
