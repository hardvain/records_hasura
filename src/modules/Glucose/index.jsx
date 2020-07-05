import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'value', 'description', 'timestamp'];
const List = (props) => (
  <Collection
    resource={'glucose'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);
const schema = {
  description: {
    type: 'text',
    label: 'Description',
  },
  timestamp: {
    type: 'timestamp',
    label: 'Timestamp',
  },
  value: {
    type: 'number',
    label: 'Value',
  },
};
export default { Form, List, schema };
