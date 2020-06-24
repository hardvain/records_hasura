import Form from './form';
import Collection from 'src/components/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  'carbs',
  'fat',
  'protein',
  'quantity',
  'unit',
];
const List = (props) => (
  <Collection
    resource={'dishes'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);

export default { Form, List };
