import { Badge, Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/core';
import {GiLoveInjection} from 'react-icons/gi'
import DatePicker from 'components/DatePicker';

export default ({record}) => {
  return <Flex alignItems={"center"}>
    <Box as={GiLoveInjection} alignSelf={'center'} mr={3} />
    <Stack flexGrow={1}>
      <Text>{record.data.value}</Text>
      <Badge w={80}>
        <DatePicker.TextDatePicker selected={new Date(record.timestamp)}/>
      </Badge>
    </Stack>
  </Flex>
}