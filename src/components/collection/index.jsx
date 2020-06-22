import { Box, Flex, Spinner } from '@chakra-ui/core';
import { createElement } from 'react';
import NotFound from 'src/assets/NotFound';
import Filter from 'src/components/calendar/Filter';
import Table from './Table';
import List from './List';
import Gallery from './Gallery';
import useQuery from 'src/graphql/hooks/useQuery';
import { useQuery as useApolloQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Filters from './Filters';
const DisplayMap = {
  list: List,
  table: Table,
  gallery: Gallery,
};

const FilteredCollection = ({
  resource,
  fields,
  where,
  order_by,
  limit,
  offset,
  config,
  previews,
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
  return createElement(DisplayMap[type], {
    data: data,
    preview: previews[type],
  });
};

export default ({ resource, ...rest }) => {
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
    <Filters schema={data ? data['__type'] : {}}>
      {(filters) => <FilteredCollection resource={resource} {...rest} />}
    </Filters>
  );
};
