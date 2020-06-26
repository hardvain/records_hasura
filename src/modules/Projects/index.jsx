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
const schema = {
  name: {
    type: 'editable',
    label:'Name',
  },
  description: {
    type: 'text',
    label:'Description',
  },
  is_archived: {
    type: 'checkbox',
  },
  parent_id: {
    type: 'ref',
    label:'Parent Project',
    resource: 'projects'
  },
  project_id: {
    type: 'ref',
    label:'Project',
    resource: 'projects',
  },
};
const List = (props) => (
  <Collection
    resource={'projects'}
    fields={fields}
    order_by={{ ref_team: { created_at: 'desc' } }}
    preview={Preview}
  />
);

export default { Form, List, schema };
