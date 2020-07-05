import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'name', 'description', 'checkins', 'status', 'priority'];
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
  checkins: {
    type: 'json',
    label: 'Check Ins',
  },
  priority: {
    type: 'select',
    label: 'Priority',
    options: [
      { value: 1, label: 'Very Important' },
      { value: 2, label: 'Important' },
      { value: 3, label: 'Medium' },
    ],
  },
  status: {
    type: 'select',
    label: 'Status',
    options: [
      { value: 5, label: 'Very Easy' },
      { value: 4, label: 'Easy' },
      { value: 3, label: 'Medium' },
      { value: 2, label: 'Hard' },
      { value: 1, label: 'Very Had' },
    ],
  },
};
export default { Form, List, schema };
