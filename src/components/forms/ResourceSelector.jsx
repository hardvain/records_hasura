import { Box, useColorMode } from '@chakra-ui/core';
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';

const animatedComponents = makeAnimated();

const colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export default (props) => {
  const { colorMode } = useColorMode();

  const [input, setInput] = useState('');
  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInput(inputValue);
    return inputValue;
  };
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };
  return (
    <Box className={colorMode === 'light' ? '' : 'react-select'} {...props}>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={colourOptions}
        closeMenuOnSelect={false}
        components={animatedComponents}
      />
    </Box>
  );
};
