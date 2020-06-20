import Form from './form';
import Collection from 'src/components/collection';
import Previews from './previews';
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

const ResourceCollection = (props) => (
  <Collection
    resource={'transactions'}
    fields={fields}
    previews={Previews}
    {...props}
  />
);

const List = (props) => <ResourceCollection type={'list'} {...props} />;
const Table = (props) => <ResourceCollection type={'table'} {...props} />;
const Gallery = (props) => <ResourceCollection type={'gallery'} {...props} />;

export default { Form, List, Table, Gallery };