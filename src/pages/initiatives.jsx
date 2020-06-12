import {
  Box,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Button,
  Stack,
  Flex,
  Collapse,
  Icon,
  Text,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
export default () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Box py={5}>
      <Flex>
        <Button size={'sm'} leftIcon={'small-add'}>
          New Initiative
        </Button>
      </Flex>
      <Stack spacing={5} py={30}>
        <Box>
          <Card title={'Open Source Visibility'}>
            <Box p={5}>
              <StatGroup>
                <Stat>
                  <StatLabel>Active Projects</StatLabel>
                  <StatNumber>23</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Pending Tasks Across Projects</StatLabel>
                  <StatNumber>45</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Clicked</StatLabel>
                  <StatNumber>45</StatNumber>
                </Stat>
              </StatGroup>
            </Box>
            <Box>
              <Box
                p={2}
                borderTopWidth={1}
                variant={'ghost'}
                isFullWidth={true}
                onClick={handleToggle}
              >
                <Stack isInline alignItems={'center'}>
                  <Icon name={show ? 'chevron-down' : 'chevron-right'} fontSize={'lg'} />
                  <Text>Show Projects</Text>
                </Stack>
              </Box>
              <Collapse my={4} p={3} isOpen={show}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Collapse>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};
