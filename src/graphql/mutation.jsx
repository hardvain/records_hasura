import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useStore } from 'src/store';

export default ({
  resource,
  fields,
  filters,
  children,
  operation = 'insert',
}) => {

  const updateString = `
      mutation update_${resource}($where:${resource}_bool_exp!,$object:${resource}_set_input){
          update_${resource}(where:$where,_set:$object){affected_rows}
      }
  `;
  const deleteString = `
      mutation delete_${resource}($where:${resource}_bool_exp!){
          delete_${resource}(where:$where){
            affected_rows
          }
      }
  `;
  const insertString = `
      mutation insert_${resource}($object:${resource}_insert_input!){
          insert_${resource}(objects:[$object]){affected_rows}
      }
  `;

  const mutateWrapper = (mutate) => {
    if (operation === 'insert') {
      return (params) => {
        delete params.variables.where;
        return mutate(params);
      };
    } else {
      return mutate;
    }
  };
  const mutationString =
    operation === 'update'
      ? updateString
      : operation === 'delete'
      ? deleteString
      : insertString;
  return (
    <Mutation
      mutation={gql`
        ${mutationString}
      `}
    >
      {(mutate, { data }) => children(mutateWrapper(mutate))}
    </Mutation>
  );
};
