import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Box, Skeleton } from '@chakra-ui/core';

export default ({ resource, fields, filters, children, operation, isUpdate = false }) => {
  const mutationString = isUpdate
    ? `
      mutation update_${resource}($where:${resource}_bool_exp!,$object:${resource}_set_input){
          update_${resource}(where:$where,_set:$object){
            returning${fields}
          }
      }
  `
    : `
      mutation insert_${resource}($object:${resource}_insert_input!){
          insert_${resource}(objects:[$object]){
            returning${fields}
          }
      }
  `;
  console.info(`Mutating ${resource}`, mutationString);
  return (
    <Mutation
      mutation={gql`
        ${mutationString}
      `}
    >
      {(mutate, { data }) => children(mutate)}
    </Mutation>
  );
};
