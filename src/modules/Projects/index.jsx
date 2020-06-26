import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  'is_archived',
  'ref_tasks{id,name,status,due_date}',
  'ref_team{name}',
];
const List = (props) => (
  <Collection
    resource={'projects'}
    fields={fields}
    order_by={{ ref_team: { created_at: 'desc' } }}
    preview={Preview}
    {...props}
  />
);

export default { Form, List };
