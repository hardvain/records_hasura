import { Skeleton } from '@chakra-ui/core';

export default ({ count = 1, height = 10, ...rest }) => {
  return [...Array(count).keys()].map((i) => (
    <Skeleton key={i} height={10} {...rest} />
  ));
};
