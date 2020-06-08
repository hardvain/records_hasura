import { useState } from 'react';
import { useColorMode } from '@chakra-ui/core';

export default (light, dark) => {
  const { colorMode } = useColorMode();
  return colorMode !== 'light';
};
