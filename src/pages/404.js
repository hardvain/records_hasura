import { Button, Flex, Heading, Stack } from '@chakra-ui/core';


export default () => {
  return <Flex alignItems={"center"} justifyContent={"center"} h={'90vh'}>
   <Stack textAlign={"center"}>
     <Heading>404</Heading>
     <Button variant={"solid"} size={"sm"} variantColor={"deeporange"}>Go back to Home Page</Button>
   </Stack>
  </Flex>
}
