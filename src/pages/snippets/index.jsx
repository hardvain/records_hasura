import React, { useEffect, useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Field from 'src/components/forms/Field';
import useQuery from 'src/hooks/graphql/useQuery';
import Snippets from 'src/modules/Snippets';
import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Spinner,
  Button,
  useColorMode,
  MenuList,
  Text,
} from '@chakra-ui/core';
import { useStore } from 'src/store';

export default () => {
  const [selectedSnippet, setSelectedSnippet] = useState();
  const methods = useForm();
  const { colorMode } = useColorMode();
  const { toggleFormPopup } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
  }));
  const addSnippet = () => {
    toggleFormPopup('snippets');
  };
  const [snippets] = useQuery({
    name: 'snippets',
    fields: ['id', 'name', 'description', 'checkins'],
  });
  useEffect(() => {
    if(snippets){
      setSelectedSnippet(snippets.filter((s) => s.id === selectedSnippet?.id)[0]);
    }
  }, [snippets]);
  useEffect(() => {
    methods.reset(selectedSnippet);
  }, [selectedSnippet]);

  return snippets ? (
    <Box w={'100%'}>
      <Stack isInline>
        <Stack
          flex={2}
          borderRightWidth={1}
          h={'100vh'}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          {snippets.map((snippet) => (
            <Stack
              alignItems={'center'}
              isInline
              cursor={'pointer'}
              p={2}
              minHeight={50}
              borderBottomWidth={1}
              onClick={() => setSelectedSnippet(snippet)}
              key={snippet.id}
            >
              <Box flexGrow={1}>
                <Heading size={'xs'}>{snippet.name}</Heading>
              </Box>
              <Box>
                <Text>{snippet.checkins?.length}</Text>
              </Box>
            </Stack>
          ))}
          <Button m={2} size={'xs'} onClick={addSnippet}>
            Add New Snippet
          </Button>
        </Stack>
        <Box flex={10}>
          {selectedSnippet && (
            <FormContext
              {...methods}
              schema={Snippets.schema}
              isSmart={selectedSnippet?.id}
              id={selectedSnippet?.id}
              resource={'snippets'}
            >
              <Field name={'description'} height={'100vh'} hideLabel />
            </FormContext>
          )}
        </Box>
      </Stack>
    </Box>
  ) : (
    <Spinner />
  );
};
