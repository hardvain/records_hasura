import { Box, Flex, Spinner } from '@chakra-ui/core';
import { createElement } from 'react';
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
  console.log(previews, type);
  return createElement(DisplayMap[type], {
    data: data,
    preview: previews[type],
  });
};
