import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'due_date',
  'description',
  'priority',
  'team',
  'status',
  'project_id',
  'ref_project{name,ref_team{name}}',
  'ref_sub_tasks{status}',
];
const metadata = {
  id: {
    type: 'uuid',
  },
  name: {
    type: 'string',
  },
  due_date: {
    type: 'timestamp',
  },
  description: {
    type: 'string',
    minRows: 5,
  },
  priority: {
    type: 'select',
    options: ['very_high', 'high', 'medium', 'low', 'very_low'],
  },
  status: {
    type: 'select',
    options: ['todo', 'in_progress', 'done'],
  },
  project_id:{

  }
};

const List = (props) => (
  <Collection resource={'tasks'} fields={fields} preview={Preview} {...props} />
);

export default { Form, List };
