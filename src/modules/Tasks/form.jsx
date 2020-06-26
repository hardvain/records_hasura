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
export default ({ model, onSubmitCallback = () => {} }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();
  const [showTasks, setShowTasks] = useState(false);

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
    onSubmitCallback();
  };
  return (
    <Stack spacing={10}>
      <Stack spacing={10}>
        <FormContext {...methods} schema={Tasks.schema}>
          <Field name={'name'} />
          <Divider />
          <Stack isInline spacing={10} justifyContent={'space-between'}>
            <Field name={'due_date'} />
            <Field name={'priority'} />
            <Field name={'status'} />
          </Stack>
          <Divider />
          <Stack isInline>
            <Field name={'parent_id'} />
            <Field name={'project_id'} />
            {<Field name={'team_id'} disabled={model?.project_id} />}
          </Stack>
          <Divider />
          <Field name={'description'} schema={Tasks.schema} />
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
      {model && model.id && (
        <Box pb={3}>
          <>
            {!showTasks && (
              <Button
                size={'sm'}
                mb={3}
                w={'100%'}
                variant={'outline'}
                onClick={() => setShowTasks(true)}
              >
                Load Sub Tasks
              </Button>
            )}
            {showTasks && (
              <Tasks.List
                formContext={{ parent_id: model.id }}
                where={{ _and: [{ parent_id: { _eq: model.id } }] }}
              />
            )}
          </>
        </Box>
      )}
    </Stack>
  );
};
