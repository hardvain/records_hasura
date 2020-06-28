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

export default { Form, List };
