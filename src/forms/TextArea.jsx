import { Input, Textarea } from '@chakra-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
export default ({ options, ...rest }) => {
  const { control } = useFormContext(); // methods contain all useForm functions
  return <Controller control={control} as={Textarea} size={'sm'} {...rest} />;
};
