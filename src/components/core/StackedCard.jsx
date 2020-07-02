import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/core/card';
export const StackedCardItem = ({ title, children }) => {
  return <Box>{children}</Box>;
};
export default ({ actions, children, expandAll = false }) => {
  const collection = Array.isArray(children) ? children : [children];
  const [first, ...rest] = collection;
  const [openItems, setOpenItems] = useState(rest.map((c) => expandAll));
  const toggleItem = (index) => {
    const result = [...openItems];
    result[index] = !result[index];
    setOpenItems(result);
  };
  return (
    <Card>
      <Stack spacing={0}>
        {actions && (
          <Box p={2}>
            <Box>{actions}</Box>
            <Divider />
          </Box>
        )}
        <Box p={2}>{first}</Box>
        {rest
          .filter((c) => c)
          .map((child, index) => (
            <Box key={index}>
              <Divider m={0} />
              <Box borderWidth={0} p={2}>
                <Stack isInline alignItems={'baseline'}>
                  <IconButton
                    size={'sm'}
                    variant={'ghost'}
                    icon={openItems[index] ? 'chevron-down' : 'chevron-right'}
                    onClick={() => toggleItem(index)}
                  />
                  <Text>{child.props.title}</Text>
                </Stack>
                <Collapse borderWidth={0} isOpen={openItems[index]}>
                  {openItems[index] && <Box p={2}>{child.props.children}</Box>}
                </Collapse>
              </Box>
            </Box>
          ))}
      </Stack>
    </Card>
  );
};
