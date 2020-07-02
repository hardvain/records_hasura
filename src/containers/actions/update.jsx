import { IconButton } from '@chakra-ui/core';
import React from 'react';
import useMutation from 'src/hooks/graphql/useMutation';

export default ({ resource, id, children, ...rest }) => {
  const mutate = useMutation({
    resource,
    operation: 'update',
  });
  return (
    <IconButton
      ml={2}
      size={'sm'}
      icon={'delete'}
      variant={'ghost'}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        mutate({ variables: { where: { id: { _eq: id } } } });
      }}
      {...rest}
    />
  );
};
