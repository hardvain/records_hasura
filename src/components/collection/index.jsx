import { Box, Button, Flex, Input, Spinner, Stack } from '@chakra-ui/core';
import { useStore } from 'src/store';
import List from './List';
import useQuery from 'src/graphql/hooks/useQuery';
import { useQuery as useApolloQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Filters from './Filters';
const FilteredCollection = ({
  resource,
  fields,
  where,
  order_by,
  limit,
  offset,
  preview,
  formContext = {},
}) => {
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const [data, loading, error] = useQuery({
    name: resource,
    where,
    fields,
    order_by,
    limit,
    offset,
  });

  const addNew = () => {
    setNewFormContext(formContext);
    toggleFormPopup(resource);
  };

  let response;
  if (loading) {
    response = (
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
  } else if (error) {
    console.error(error);
    response = <Box>Something went wrong</Box>;
  } else if (data.length === 0) {
    response = (
      <Flex
        w={'100%'}
        alignItems={'center'}
        h={100}
        justifyContent={'center'}
        borderRadius={3}
        borderWidth={1}
      >
        No Results Found.
      </Flex>
    );
  } else {
    response = <List data={data} preview={preview} />;
  }
  return (
    <Stack>
      <Box>{response}</Box>
      <Box>
        <Button
          mt={2}
          pl={2}
          leftIcon={'small-add'}
          variant={'link'}
          size={'sm'}
          onClick={addNew}
        >
          Add New
        </Button>
      </Box>
    </Stack>
  );
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
