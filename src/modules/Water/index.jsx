import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'quantity', 'timestamp', 'description'];

const List = (props) => (
  <Collection
    resource={'water'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);

export default { Form, List };
