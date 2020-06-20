import { createElement } from 'react';
import { Box, Stack, useToast } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  const toast = useToast();

  const onSubmit = () => {
    toast({
      title: 'Record updated successfully',
      duration: 2000,
      status: 'success',
      isClosable: true,
      position: 'top',
      variant: 'solid',
    });
  };
  return (
    <Box>
      <table>
        <tbody>
          {data.map((record) => (
            <Stack borderWidth={1} isInline key={record.id}>
              {createElement(preview, { record, onSubmit })}
            </Stack>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
