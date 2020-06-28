import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'timestamp',
  'description',
  'team',
  'team',
  'type',
  'value'
];

const List = (props) => (
  <Collection
    resource={'transactions'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);
const schema = {
  name: {
    type: 'string',
    label:'Name',
  },
  timestamp: {
    type: 'timestamp',
    label:'Timestamp',
  },
  description: {
    type: 'text',
    label:'Description',
  },
  value: {
    type: 'number',
    label:'Amount',
  },
  type: {
    type: 'select',
    label:'Type',
    options: [
      { value: 'expense', label: 'Expense' },
      { value: 'income', label: 'Income' },
      { value: 'transfer', label: 'Transfer' },
    ],
  },
};

export default { Form, List, schema };
