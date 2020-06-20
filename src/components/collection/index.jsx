import { Box, Flex, Spinner } from '@chakra-ui/core';
import { createElement } from 'react';
import NotFound from 'src/assets/NotFound';
import Table from './Table';
import List from './List';
import Gallery from './Gallery';
import useQuery from 'src/graphql/hooks/useQuery';
const DisplayMap = {
  list: List,
  table: Table,
  gallery: Gallery,
};
export default ({
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
      <Flex w={'100%'} alignItems={'center'} h={'100%'}  justifyContent={'center'}>
        <NotFound w={200} height={200} />
      </Flex>
    );
  }
  return createElement(DisplayMap[type], {
    data: data,
    preview: previews[type],
  });
};
