import { useColorMode, Stack } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic';
import useMutation from 'src/hooks/graphql/useMutation';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const Default = ({ value, onChange, ...rest }) => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const { colorMode } = useColorMode();
  return (
    <Stack
      borderWidth={1}
      p={2}
      borderRadius={3}
      className={colorMode === 'light' ? 'md-editor-light' : 'md-editor-dark'}
      w={'100%'}
    >
      <MdEditor
        size={'sm'}
        value={value || ''}
        {...rest}
        config={{
          view: {
            menu: true,
            md: true,
            html: true,
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
    </Stack>
  );
};

export { Default };
