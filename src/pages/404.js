import { Button, Flex, Heading, Stack } from '@chakra-ui/core';


export default () => {
  return <Flex alignItems={"center"} justifyContent={"center"} h={'90vh'}>
   <Stack textAlign={"center"}>
     <Heading>Page does not exist</Heading>
     <Button variant={"solid"} size={"sm"} variantColor={"brand"}>Home Page</Button>
   </Stack>
  </Flex>
}
