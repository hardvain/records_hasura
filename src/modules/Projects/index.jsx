import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  'is_archived',
  'team_id',
  'ref_tasks{id,name,status,due_date}',
  'ref_team{name}',
];
const schema = {
  name: {
    type: 'string',
    label: 'Name',
  },
  description: {
    type: 'text',
    label: 'Description',
  },
  is_archived: {
    type: 'checkbox',
  },
  parent_id: {
    type: 'ref',
    label: 'Parent Project',
    resource: 'projects',
  },
  team_id: {
    type: 'ref',
    label: 'Team',
    resource: 'teams',
  },
};
const List = (props) => (
  <Collection
    resource={'projects'}
    fields={fields}
    order_by={{ ref_team: { created_at: 'desc' } }}
    preview={Preview}
    {...props}
  />
);

export default { Form, List, schema };
