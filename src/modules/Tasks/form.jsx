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
  const deleteMutate = useMutation({ resource: 'tasks', operation: 'delete' });

  return (
    <Stack spacing={10}>
      {model && model.id && (
        <Stack isInline spacing={10}>
          <Box flex={1}>
            {model?.status !== 'completed' ? (
              <Button
                variant={'outline'}
                variantColor={'green'}
                size={'xs'}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                Mark as Done
              </Button>
            ) : (
              <Button
                variant={'outline'}
                variantColor={'orange'}
                size={'xs'}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                Reopen
              </Button>
            )}
          </Box>
          <Box flex={1}>
            <Link as={`/tasks/${model.id}`} href={`/tasks/[id]`}>
              <Button variant={'outline'} size={'xs'}>
                View Details
              </Button>
            </Link>
          </Box>
          <Button
            onClick={() => {
              deleteMutate({ variables: { where: { id: { _eq: model.id } } } });
            }}
            flex={1}
            ml={2}
            variant={'outline'}
            variantColor={'red'}
            size={'xs'}
            leftIcon={'delete'}
          >
            Delete
          </Button>
        </Stack>
      )}
      <FormContext {...methods} schema={Tasks.schema}>
        <Stack spacing={10} flex={2}>
          <Field name={'name'} mb={5} />
          <Field rows={10} name={'description'} schema={Tasks.schema} />
          <Stack isInline>
            <Field name={'due_date'} flex={1} />
            <Field name={'priority'} flex={1} />
            <Field name={'status'} flex={1} />
          </Stack>
          <Stack isInline>
            <Field flex={1} name={'parent_id'} />
            <Field flex={1} name={'project_id'} />
            {<Field flex={1} name={'team_id'} disabled={model?.project_id} />}
          </Stack>
          <Field name={'people_id'} flex={1} />
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
      {model && model.id && (
        <Box pb={3}>
          <>
            <Tasks.List
              formContext={{ parent_id: model.id }}
              where={{ _and: [{ parent_id: { _eq: model.id } }] }}
            />
          </>
        </Box>
      )}
    </Stack>
  );
};
