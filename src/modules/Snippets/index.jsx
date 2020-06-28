import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
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
};
export default { Form, List, schema };
