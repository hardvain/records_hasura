import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  "ref_projects{id,name,description, ref_tasks{status}}"
];
const List = (props) => (
  <Collection
    resource={'teams'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);

export default { Form, List };
