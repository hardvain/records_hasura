import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  'checkins',
  'type',
  'difficulty',
  'due_date',
];
const List = (props) => (
  <Collection
    resource={'snippets'}
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
  due_date: {
    type: 'timestamp',
    label: 'Due Date',
  },
  checkins: {
    type: 'json',
    label: 'Check Ins',
  },
  type: {
    type: 'select',
    label: 'Type',
    options: [
      { value: 'tech', label: 'Tech' },
      { value: 'math', label: 'Math' },
      { value: 'other', label: 'Other' },
    ],
  },
  difficulty: {
    type: 'select',
    label: 'Status',
    options: [
      { value: 5, label: 'Very Hard' },
      { value: 4, label: 'Hard' },
      { value: 3, label: 'Medium' },
      { value: 2, label: 'Easy' },
      { value: 1, label: 'Very Easy' },
    ],
  },
};
export default { Form, List, schema };
