import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'name', 'created_at','description'];

const List = (props) => (
  <Collection
    resource={'thoughts'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);
const schema = {
  name: {
    type: 'string',
    label: 'Name',
  },
  description: {
    type: 'text',
    label: 'Description',
  },
  task_id: {
    type: 'ref',
    label: 'Task',
    resource: 'tasks',
  },
  project_id: {
    type: 'ref',
    label: 'Project',
    resource: 'projects',
  },
  team_id: {
    type: 'ref',
    label: 'Team',
    resource: 'teams',
  },
};
export default { Form, List, schema };
