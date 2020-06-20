import {
  Box,
  Input,
  Stack,
  Checkbox,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { useEffect, useRef, useState } from 'react';

export default ({
  items,
  value,
  onChange,
  multiple = false,
  placeholder,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const select = useRef();
  const [searchText, setSearchText] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(value);
  const toggleItem = (isChecked, item) => {
    if (isChecked) {
      const result = multiple ? [...selectedOptions, item.id] : [item.id];
      setSelectedOptions(result);
      onChange(result);
    } else {
      const result = multiple
        ? selectedOptions.filter((opt) => opt !== item.id)
        : [];
      setSelectedOptions(result);
      onChange(result);
    }
  };

  const handleClickOutside = (event) => {
    if (select.current && !select.current.contains(event.target)) {
      setShowOptions(false);
    }
  };
  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <Box ref={select} {...rest}>
      <Input
        placeholder={placeholder}
        size={'sm'}
        onFocus={() => setShowOptions(true)}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {showOptions && (
        <Box
          mt={2}
          zIndex={1000}
          position={'absolute'}
          spacing={0}
          borderRadius={5}
          width={select.current.offsetWidth}
        >
          <Stack spacing={0}>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item) => (
                <Stack
                  isInline
                  w={'100%'}
                  key={item.id}
                  p={2}
                  bg={colorMode === 'light' ? 'white' : '#333'}
                >
                  <Checkbox
                    isChecked={selectedOptions.includes(item.id)}
                    onChange={(e) => toggleItem(e.target.checked, item)}
                  />
                  <Text>{item.name}</Text>
                </Stack>
              ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
