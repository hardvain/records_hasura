import {
  Box,
  Icon,
  Input,
  Stack,
  Button,
  Checkbox,
  Text,
  Divider,
} from '@chakra-ui/core';
import { useEffect, useRef, useState } from 'react';

export default ({ items }) => {
  const select = useRef();
  const [searchText, setSearchText] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleItem = (isChecked, item) => {
    if (isChecked) {
      setSelectedOptions([...selectedOptions, item.id]);
    } else {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== item.id));
    }
  };
  const handleClickOutside = (event) => {
    if (select.current && !select.current.contains(event.target)) {
      setShowOptions(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    <Box ref={select}>
      <Input
        placeholder={'Select a team'}
        size={'sm'}
        onFocus={() => setShowOptions(true)}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {showOptions && (
        <Box mt={2} zIndex={1000} position={'absolute'} spacing={0} borderRadius={5} width={select.current.offsetWidth}>
          <Stack>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item) => (
                <>
                  <Stack
                    isInline
                    w={'100%'}
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedOptions([...selectedOptions, item.id]);
                    }}
                    p={2}
                    bg={'#333'}
                  >
                    <Checkbox
                      isChecked={selectedOptions.includes(item.id)}
                      onChange={(e) => toggleItem(e.target.checked, item)}
                    />
                    <Text>{item.name}</Text>
                  </Stack>
                </>
              ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
