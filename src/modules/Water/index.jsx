import Form from './form';
import Preview from './preview';
import Collection from 'src/components/collection';
const fields = `{
    id
    quantity
    description
    timestamp
}`;

const List = (props) => (
  <Collection
    resource={'water'}
    fields={fields}
    config={{
      type: 'list',
      preview: Preview,
    }}
    {...props}
  />
);

const Table = (props) => (
  <Collection
    resource={'water'}
    fields={fields}
    config={{
      type: 'table',
      preview: TablePreview,
    }}
    {...props}
  />
);

const TablePreview = ({ record }) => {
  return (
    <>
      <td>{record.quantity}</td>
      <td>{record.timestamp}</td>
    </>
  );
};

export default { Form, List, Table };
