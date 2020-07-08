// Render Prop
import {
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';

import moment from 'moment';
import People from 'src/modules/Categories';
import Glucose from 'src/modules/Glucose';
export default ({ model, onSubmitCallback = () => {} }) => {
  const methods = useForm();
  const [operation, setOperation] = useState('insert');

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);
  const mutate = useMutation({
    resource: 'glucose',
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
      <FormContext
        {...methods}
        schema={Glucose.schema}
        isSmart={model?.id}
        id={model?.id}
        resource={'glucose'}
      >
        <Field name={'value'} mb={5} />
        <Field name={'timestamp'} mb={5} />
        <Field name={'description'} mb={5} />
      </FormContext>
      {!model?.id && (
        <Button
          my={5}
          type="submit"
          variant={'solid'}
          variantColor={'brand'}
          size={'sm'}
          onClick={onSubmit}
        >
          Create
        </Button>
      )}
    </Stack>
  );
};
