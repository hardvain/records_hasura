import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = ['id', 'name'];

const List = (props) => (
  <Collection
    resource={'people'}
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

};
export default { Form, List, schema };
