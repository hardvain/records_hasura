import { createElement } from 'react';
import { SimpleGrid, useToast } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  const toast = useToast();

  const onSubmit = () => {
    toast({
      title: 'Record updated successfully',
      duration: 2000,
      status: 'success',
      isClosable: true,
      position:'top',
      variant:'solid'
    });
  };
  return (
    <SimpleGrid columns={3} spacing={10}>
      {data.map((record) => (
        <div onClick={() => onItemSelect(record)} key={record.id}>
          {createElement(preview, { record, onSubmit })}
        </div>
      ))}
    </SimpleGrid>
  );
};
