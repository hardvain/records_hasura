import { Skeleton, useColorMode } from '@chakra-ui/core';

export default ({ count = 1, height = 10, ...rest }) => {
  const { colorMode } = useColorMode();

  let color = rest.color || (colorMode === 'light' ? '#fafbfc' : '#333');
  return [...Array(count).keys()].map((i) => (
    <Skeleton key={i} height={10} {...rest} color={color} my={rest.my || 2}/>
  ));
};
