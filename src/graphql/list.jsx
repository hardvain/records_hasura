import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Box, Skeleton } from '@chakra-ui/core';

export default ({
  resource,
  fields,
  where,
  order_by = { timestamp: "desc" },
  limit,
  offset,
  children,
}) => {
  const queryString = `
      query list_${resource}($where:${resource}_bool_exp, $order_by:${resource}_order_by!, $limit:Int, $offset:Int){
          ${resource}(where:$where, order_by:[$order_by], limit:$limit,offset:$offset)${fields}
      }
  `;

  console.info(`Querying ${resource}`, queryString);
  return (
    <Query
      query={gql`
        ${queryString}
      `}
      variables={{ where, order_by, limit, offset }}
    >
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Box h={'100%'}>
              <Skeleton colorStart="#232626" colorEnd="#232626" />
            </Box>
          );
        if (error) return <Box>Something went wrong</Box>;

        if (data[resource].length === 0) return <Box>No Results Found</Box>;

        return children(data);
      }}
    </Query>
  );
};
