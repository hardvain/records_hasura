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
const schema = {
  name: {
    type: 'editable',
    label:'Name',
  },
  due_date: {
    type: 'timestamp',
    label:'Due Date',
  },
  description: {
    type: 'text',
    label:'Description',
  },
  priority: {
    type: 'select',
    label:'Priority',
    options: [
      { value: 'very_high', label: 'Very High' },
      { value: 'high', label: 'High' },
      { value: 'medium', label: 'Medium' },
      { value: 'low', label: 'Low' },
      { value: 'very_low', label: 'Very Low' },
    ],
  },
  status: {
    type: 'select',
    label:'Status',
    options: [
      { value: 'todo', label: 'Todo' },
      { value: 'in_progress', label: 'In Progress' },
      { value: 'completed', label: 'Completed' },
    ],
  },
  project_id: {
    type: 'ref',
    label:'Project',
    resource: 'projects',
  },
};

const List = (props) => (
  <Collection resource={'tasks'} fields={fields} preview={Preview} {...props} />
);

export default { Form, List, schema };
