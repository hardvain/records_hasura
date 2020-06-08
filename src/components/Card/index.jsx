import { Flex } from '@chakra-ui/core';
import isDarkMode from 'hooks/isDarkMode';

export default ({ children, ...rest }) => {
  const isDark = isDarkMode();
  return (
    <Flex
      minWidth={300}
      borderWidth={1}
      borderRadius={3}
      h={"100%"}
      bg={!isDark ? '#FEFEFE' : '#333'}
      p={5}
      justifyContent={'center'}
      {...rest}
    >
      {children}
    </Flex>
  );
};
