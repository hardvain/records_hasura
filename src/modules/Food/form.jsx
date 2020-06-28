// Render Prop
import {
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Heading,
  Divider,
  SimpleGrid,
  Checkbox,
  Text,
} from '@chakra-ui/core';
import Link from 'next/link';
import Card from 'src/components/core/card';
import People from './index';
import Select from 'src/components/forms/Select';
import { useForm, Controller, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { CustomDatePicker } from 'src/components/DatePicker';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {} }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'food',
    operation,
  });
  const onSubmit = () => {
    methods.handleSubmit((data) =>
      mutate({
        variables: {
          object: { ...model, ...data },
          where: { id: { _eq: model?.id } },
        },
      })
    )();
    onSubmitCallback();
  };

  return (
    <Stack spacing={10}>
      <FormContext {...methods} schema={People.schema}>
        <Stack spacing={10} flex={2}>
          <Field name={'timestamp'} mb={5} />
          <Field name={'dish_id'} mb={5} />
        </Stack>
      </FormContext>
      <Button
        my={5}
        type="submit"
        variant={'solid'}
        variantColor={'brand'}
        size={'sm'}
        onClick={onSubmit}
      >
        {model?.id ? 'Update' : 'Create'}
      </Button>
    </Stack>
  );
};
