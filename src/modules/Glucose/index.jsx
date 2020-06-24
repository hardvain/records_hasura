import Form from './form';
import Collection from 'src/components/collection';
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

export default { Form, List };
