import { Select } from '@chakra-ui/core';
import { useField } from 'formik';
import useQuery from 'src/graphql/hooks/useQuery';

const ResourceSelector = ({
  name,
  where,
  order_by,
  fields = ['id', 'name'],
  value = '',
  onChange = () => {},
  ...rest
}) => {
  const [projects] = useQuery({
    name,
    where,
    order_by,
    fields,
  });
  if (!projects) {
    return (
      <Select
        size={'sm'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    );
  }
  return (
    <Select
      size={'sm'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
      placeholder={'Select an entry'}
    >
      {projects.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};
export default ResourceSelector;
export const FormikResourceSelector = ({ fieldName, ...rest }) => {
  let [field, meta, helpers] = useField({ name: fieldName });
  return (
    <ResourceSelector
      onChange={helpers.setValue}
      value={field.value}
      {...rest}
    />
  );
};
