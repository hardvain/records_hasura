import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = ['id', 'timestamp','dish_id','ref_dish{id,name,carbs,fat,protein,quantity,unit}'];

const List = (props) => (
  <Collection
    resource={'food'}
    fields={fields}
    preview={Preview}
    {...props}
  />
);
const schema = {
  timestamp: {
    type: 'timestamp',
    label:'Timestamp',
  },
  dish_id: {
    type: 'ref',
    label:'Dish',
    resource:'dishes',
  },

};
export default { Form, List, schema };
