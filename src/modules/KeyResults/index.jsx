import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'created_at',
  'description',
  'progress',
  'objective_id',
];

const List = (props) => (
  <Collection
    resource={'key_results'}
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
  progress: {
    type: 'number',
    label: 'Progress',
  },
  objective_id: {
    type: 'ref',
    resource: 'objectives',
    label: 'Objective',
  },
};
export default { Form, List, schema };
