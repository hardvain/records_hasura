import Form from './form';
import Collection from 'src/containers/collection';
import LineItem from './LineItem';
import BoardCard from './BoardCard';
import Preview from './preview';
export const fields = [
  'id',
  'name',
  'due_date',
  'description',
  'priority',
  'team',
  'status',
  'project_id',
  'ref_project{name,ref_team{name}}',
  'ref_team{id,name}',
  'ref_sub_tasks{status}',
  'parent_id',
  'ref_parent{id}',
  'people_id',
  'ref_person{id,name}',
  'checklist',
];
const schema = {
  name: {
    type: 'string',
    label: 'Name',
  },
  due_date: {
    type: 'timestamp',
    label: 'Due Date',
    datePickerType: 'button',
  },
  description: {
    type: 'text',
    label: 'Description',
  },
  priority: {
    type: 'select',
    label: 'Priority',
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
    label: 'Status',
    options: [
      { value: 'todo', label: 'Todo' },
      { value: 'in_progress', label: 'In Progress' },
      { value: 'completed', label: 'Completed' },
    ],
  },
  project_id: {
    type: 'ref',
    label: 'Project',
    resource: 'projects',
  },
  parent_id: {
    type: 'ref',
    label: 'Parent task',
    resource: 'tasks',
  },
  team_id: {
    type: 'ref',
    label: 'Team',
    resource: 'teams',
  },
  people_id: {
    type: 'ref',
    label: 'Person',
    resource: 'people',
  },
};

const List = (props) => {
  return (
    <Collection
      resource={'tasks'}
      fields={fields}
      preview={LineItem}
      {...props}
    />
  );
};

const Board = (props) => {
  return (
    <Collection
      resource={'tasks'}
      fields={fields}
      group_by_field={(row) => row['status']}
      group_by_options={['todo', 'in_progress', 'completed']}
      preview={BoardCard}
      type={'board'}
      {...props}
    />
  );
};

export default { Form, List, schema, Preview, Board };
