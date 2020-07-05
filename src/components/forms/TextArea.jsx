import {
  Input,
  Box,
  useColorMode,
  Button,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic';
import useMutation from 'src/hooks/graphql/useMutation';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});
export default ({ name, options, ...rest }) => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const { colorMode } = useColorMode();
  const { control, resource, id, getValues } = useFormContext(); // methods contain all useForm functions
  const mutate = useMutation({ resource, operation: 'update', silent: false });
  const update = () => {
    if (id) {
      const value = getValues(name);
      mutate({
        variables: {
          object: { [name]: value },
          where: { id: { _eq: id } },
        },
      });
    }
  };
  const Editor = ({ html = false, md = true }) => {
    return (
      <Controller
        name={name}
        as={({ onChange, value }) => (
          <MdEditor
            size={'sm'}
            value={value || ''}
            {...rest}
            config={{
              view: {
                menu: true,
                md,
                html,
                fullScreen: true,
                hideMenu: true,
                ...rest?.config?.view,
              },
              table: {
                maxRow: 5,
                maxCol: 6,
              },
              syncScrollMode: ['leftFollowRight', 'rightFollowLeft'],
              ...rest?.config,
            }}
            style={{ height: rest.height || 200, width: rest.width || '100%' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={({ text }) => {
              onChange(text);
            }}
            {...rest}
          />
        )}
        control={control}
      />
    );
  };
  return (
    <Stack
      borderWidth={1}
      p={2}
      borderRadius={3}
      className={colorMode === 'light' ? 'md-editor-light' : 'md-editor-dark'}
      w={'100%'}
    >
      <Button
        size={'sm'}
        variantColor={'brand'}
        variant={'outline'}
        onClick={update}
        my={2}
      >
        Save
      </Button>
      <Tabs variantColor={'brand'}>
        <TabList mb={2}>
          <Tab>Write</Tab>
          <Tab>Preview</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Editor />
          </TabPanel>
          <TabPanel>
            <Editor html={true} md={false} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
