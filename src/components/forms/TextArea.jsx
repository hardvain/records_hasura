import { Input, Box, useColorMode } from '@chakra-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic';
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});
export default ({ options, ...rest }) => {
  const { control } = useFormContext(); // methods contain all useForm functions
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const { colorMode } = useColorMode();

  return (
    <Box
      className={colorMode === 'light' ? 'md-editor-light' : 'md-editor-dark'}
      w={'100%'}
    >
      <Controller
        as={MdEditor}
        control={control}
        config={{
          view: {
            menu: true,
            md: true,
            html: false,
            fullScreen: true,
            hideMenu: true,
          },
          table: {
            maxRow: 5,
            maxCol: 6,
          },
          imageUrl: 'https://octodex.github.com/images/minion.png',
          syncScrollMode: ['leftFollowRight', 'rightFollowLeft'],
        }}
        style={{ height: rest.height || 500, width: rest.width || '100%' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={([{ text }]) => text}
        {...rest}
      />
    </Box>
  );
};
