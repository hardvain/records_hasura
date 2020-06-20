import Form from './form';
import Preview from './preview';
import Collection from 'src/components/collection';
const fields = `{
    id
    name
    timestamp
    description
    team
    type
    value
}`;

const List = (props) => (
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

const Table = (props) => (
  <Collection
    resource={'transactions'}
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
      <td>{record.name}</td>
      <td>{record.due_date}</td>
    </>
  );
};

export default { Form, List, Table };
