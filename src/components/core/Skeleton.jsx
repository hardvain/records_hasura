import { Skeleton, useColorMode } from '@chakra-ui/core';

export default ({ count = 1, height = 10, ...rest }) => {
  const { colorMode } = useColorMode();

  let color = rest.color || (colorMode === 'light' ? '#e0e0e0' : 'gray');
  return [...Array(count).keys()].map((i) => (
    <Skeleton
      key={i}
      height={10}
      {...rest}
      colorStart={color}
      colorEnd={color}
      my={rest.my || 2}
    />
  ));
};
