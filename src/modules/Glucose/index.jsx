
import Query from 'src/graphql/query';
import Form from './form';
import Preview from './preview';
import Collection from 'src/components/collection';
const fields = `{
    id
    value
    description
    timestamp
}`;
const WaterCollection = (props) => {
  return (
    <Collection
      resource={'glucose'}
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

const Aggregate = ({ where, order_by, limit, offset, children, ...rest }) => {
  return (
    <Query
      resource={'glucose'}
      fields={fields}
      where={where}
      order_by={order_by}
      limit={limit}
      offset={offset}
      aggregateObject={`{
          sum{value}
          count
          max{value}
          min{value}
          avg{value}
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
