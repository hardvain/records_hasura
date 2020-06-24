import { Box, Flex, Spinner } from '@chakra-ui/core';
import NotFound from 'src/assets/NotFound';
import List from './List';
import useQuery from 'src/graphql/hooks/useQuery';
import { useQuery as useApolloQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Filters from './Filters'
const FilteredCollection = ({
  resource,
  fields,
  where,
  order_by,
  limit,
  offset,
  preview,
  type,
}) => {
  const [data, loading, error] = useQuery({
    name: resource,
    where,
    fields,
    order_by,
    limit,
    offset,
  });
  if (loading)
    return (
      <Flex
        w={'100%'}
        height={'100%'}
        direction={'column'}
        alignItems={'center'}
        py={4}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.500"
          size="xl"
        />
      </Flex>
    );
  if (error) return <Box>Something went wrong</Box>;
  if (data.length === 0) {
    return (
      <Flex
        w={'100%'}
        alignItems={'center'}
        h={'100%'}
        justifyContent={'center'}
      >
        <NotFound w={200} height={200} />
      </Flex>
    );
  }
  return <List data={data} preview={preview} />;
};

export default ({ resource, showFilterBar = false, ...rest }) => {
  const { error, data, loading } = useApolloQuery(gql`query{
__type(name:"${resource}"){
    name
    fields{
      name
      type{
        name
          ofType {
              name
          }
      }
    }
  }
}`);
  return (
    <Filters
      showFilterBar={showFilterBar}
      schema={data ? data['__type'] : {}}
      where={rest.where}
    >
      {(filters) => (
        <FilteredCollection resource={resource} {...rest} where={filters} />
      )}
    </Filters>
  );
};
