import React from 'react';
import Card from 'src/components/core/card';

export default ({ expand, children,...rest }) => {

  return (
    <Card
      borderRadius={3}
      p={3}
      py={1}
      borderWidth={0}
      borderLeftWidth={0}
      borderBottomWidth={1}
      cursor={'pointer'}
      px={3}
      {...rest}
    >
      {children}
    </Card>
  );
};
