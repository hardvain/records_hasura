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
import Card from 'src/components/Card';
import Tasks from './index';
import Select from 'src/forms/Select';
import { useForm, Controller, FormContext } from 'react-hook-form';
import EditableInput from 'src/components/FormikEditableInput';
import React, { useEffect, useState } from 'react';
import { CustomDatePicker } from 'src/components/DatePicker';
import Field from 'src/forms/Field';
import useMutation from 'src/graphql/hooks/useMutation';
export default ({ model, onSubmitCallback = () => {}, showTasks }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'transactions',
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
  const deleteMutate = useMutation({
    resource: 'transactions',
    operation: 'delete',
  });

  return (
    <Stack spacing={10}>
      <FormContext {...methods} schema={Tasks.schema}>
        <Stack spacing={10}>
          <Field name={'value'} />
          <Field name={'name'} />
          <Field rows={10} name={'description'} schema={Tasks.schema} />
          <Field name={'timestamp'} />
          <Field name={'type'} />
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
