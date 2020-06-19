import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Box, Skeleton, Stack, Text } from '@chakra-ui/core';
import Card from 'src/components/Card';
import NotFound from 'src/assets/NotFound';
export default ({
  resource,
  fields,
  where,
  order_by = { created_at: 'desc' },
  limit,
  offset,
  aggregateObject,
  isAggregate = false,
  children,
}) => {
  const queryString = isAggregate
    ? `query aggregate_${resource}($where:${resource}_bool_exp, $order_by:${resource}_order_by!, $limit:Int, $offset:Int){
          ${resource}_aggregate(where:$where, order_by:[$order_by], limit:$limit,offset:$offset){
            aggregate${aggregateObject}
          }
      }`
    : `query list_${resource}($where:${resource}_bool_exp, $order_by:${resource}_order_by!, $limit:Int, $offset:Int){
          ${resource}(where:$where, order_by:[$order_by], limit:$limit,offset:$offset)${fields}
      }`;

  return (
    <Query
      query={gql(queryString)}
      pollInterval={10000}
      variables={{ where, order_by, limit, offset }}
    >
      {({ loading, error, data, refetch }) => {
        if (loading)
          return (
            <Box h={'100%'}>
              {[...Array(10).keys()].map((k) => (
                <Card my={5} height="60px" key={k}>
                  <Skeleton key={k} colorStart="#232626" colorEnd="#232626" />
                </Card>
              ))}
            </Box>
          );
        if (error) return <Box>Something went wrong</Box>;

        if (
          isAggregate
            ? !data[`${resource}_aggregate`]
            : data[resource].length === 0
        )
          return <Box w={'100%'} height={'100%'} textAlign={'center'}>
            <Stack>
              <NotFound/>
              <Text>No Results Found</Text>
            </Stack>
          </Box>;

        return children(
          isAggregate
            ? data[`${resource}_aggregate`].aggregate
            : data[resource],
          refetch
        );
      }}
    </Query>
  );
};
