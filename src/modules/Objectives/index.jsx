import Form from './form';
import Collection from 'src/containers/collection';
import Preview from './preview';
const fields = [
  'id',
  'name',
  'description',
  'start_date',
  'end_date',
  "ref_objective_teams{ref_team{id,name}}"
];
const List = (props) => (
  <Collection
    resource={'objectives'}
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
  start_date: {
    type: 'timestamp',
    label: 'Start Date',
  },
  end_date: {
    type: 'timestamp',
    label: 'End Date',
  },
  teams: {
    type: 'ref_multi',
    label: 'Teams',
    resource: 'teams',
    isMulti: true
  },
};
export default { Form, List, schema };
