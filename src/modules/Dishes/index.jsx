import Form from './form';
import Collection from 'src/containers/collection';
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
const schema = {
  name: {
    type: 'string',
    label: 'Name',
  },
  description: {
    type: 'text',
    label: 'Description',
  },
  carbs: {
    type: 'number',
    label: 'Carbs',
  },
  fat: {
    type: 'number',
    label: 'Fat',
  },
  protein: {
    type: 'number',
    label: 'Protein',
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
  },
  unit: {
    type: 'select',
    label: 'Unit',
    options: [
      { value: 'plate', label: 'Plate' },
      { value: '100g', label: '100 Grams' },
    ],
  },
};
const List = (props) => (
  <Collection
    resource={'dishes'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);

export default { Form, List, schema };
