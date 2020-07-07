import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'quantity', 'timestamp', 'description'];

const List = (props) => (
  <Collection resource={'water'} fields={fields} preview={Preview} {...props} />
);
const schema = {
  description: {
    type: 'text',
    label: 'Description',
  },
  timestamp: {
    type: 'timestamp',
    label: 'Timestamp',
    includeTime: true,
  },

  quantity: {
    type: 'number',
    label: 'Quantity',
  },
};
export default { Form, List, schema };
