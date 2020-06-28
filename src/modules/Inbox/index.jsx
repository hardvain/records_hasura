import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = ['id', 'name','created_at'];

const List = (props) => (
  <Collection
    resource={'inbox'}
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
