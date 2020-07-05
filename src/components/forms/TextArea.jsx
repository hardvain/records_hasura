import { Input, Box, useColorMode, Button, Stack } from '@chakra-ui/core';
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
  return (
    <Stack
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
                md: true,
                html: false,
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
    </Stack>
  );
};
