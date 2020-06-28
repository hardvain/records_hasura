import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'name'];

const List = (props) => (
  <Collection
    resource={'categories'}
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
  description: {
    type: 'text',
    label:'Description',
  },

};
export default { Form, List, schema };
