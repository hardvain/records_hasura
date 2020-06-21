import { Box, Select } from '@chakra-ui/core';
import { useField } from 'formik';
import useQuery from 'src/graphql/hooks/useQuery';

const ProjectSelector = ({
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
      placeholder={'Select a project'}
      size={'sm'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    >
      {projects.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};
export default ProjectSelector;
export const FormikResourceSelector = ({ fieldName, ...rest }) => {
  let [field, meta, helpers] = useField({ name: fieldName });
  return (
    <ProjectSelector
      onChange={helpers.setValue}
      value={field.value}
      {...rest}
    />
  );
};
