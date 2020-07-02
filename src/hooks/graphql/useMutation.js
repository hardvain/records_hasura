import { useToast } from '@chakra-ui/core';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';

export default ({ resource, operation = 'insert' }) => {
  const toast = useToast();
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
        delete params.variables.object['__typename'];
        delete params.variables.where;
        return mutate(params);
      };
    } else if (operation === 'update') {
      return (params) => {
        Object.keys(params.variables.object).forEach((k) => {
          if (k.startsWith('ref')) {
            delete params.variables.object[k];
          } else if (['created_at', 'updated_at'].includes(k)) {
            delete params.variables.object[k];
          }
        });
        delete params.variables.object['__typename'];
        delete params.variables.object.id;
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

  const [mutate, { data }] = useMutation(gql(mutationString), {
    onCompleted: () => {
      toast({
        title:
          operation === 'insert'
            ? 'Record Added Successfully'
            : operation === 'update'
            ? 'Record Updated Successfully'
            : 'Record Deleted Successfully',
        duration: 2000,
        status: 'success',
        isClosable: true,
        position: 'top',
        variant: 'solid',
      });
    },
  });
  return mutate ? mutateWrapper(mutate) : undefined;
};
