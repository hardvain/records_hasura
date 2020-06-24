import Form from './form';
import Collection from 'src/components/collection';
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

export default { Form, List };
