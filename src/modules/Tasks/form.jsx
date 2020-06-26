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
import Tasks from './index';
import Select from 'src/forms/Select';
import { useForm, Controller, FormContext } from 'react-hook-form';
import EditableInput from 'src/components/FormikEditableInput';
import React, { useEffect, useState } from 'react';
import { CustomDatePicker } from 'src/components/DatePicker';
import Field from 'src/forms/Field';
import useMutation from 'src/graphql/hooks/useMutation';
import moment from 'moment';
import ResourceSelector from 'src/components/collection/Selector';
export default ({ model, formContext }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'tasks',
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
  };
  console.log(model)
  return (
    <Stack spacing={10}>
      <Stack spacing={10}>
        <FormContext {...methods} schema={Tasks.schema}>
          <Field
            name={'name'}
            defaultValue={model?.name}
            schema={Tasks.schema}
          />
          <Divider />
          <Stack isInline spacing={10} justifyContent={'space-between'}>
            <Field name={'due_date'} />
            <Field name={'priority'} />
            <Field name={'status'} />
            <Field name={'project_id'} />
          </Stack>
          <Divider />
          <Field
            name={'description'}
            schema={Tasks.schema}
          />
        </FormContext>
      </Stack>

      <Stack isInline>
        <Box flexGrow={1} />
        <Button
          type="submit"
          variant={'solid'}
          variantColor={'brand'}
          size={'sm'}
          onClick={onSubmit}
        >
          {model?.id ? 'Update' : 'Create'}
        </Button>
      </Stack>
    </Stack>
  );
};
