// Render Prop
import { Stack, Box, Button } from '@chakra-ui/core';
import Tasks from 'src/modules/Tasks';
import Projects from './index';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/forms/Field';
import useMutation from 'src/graphql/hooks/useMutation';
export default ({ model, showForm = true, onSubmitCallback = () => {} }) => {
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
    resource: 'projects',
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
        <FormContext {...methods} schema={Projects.schema}>
          <Field name={'name'} />
          <Field name={'description'} />
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
      {model && model.id && showForm && (
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
                formContext={{ project_id: model.id }}
                where={{ _and: [{ project_id: { _eq: model.id } }] }}
              />
            )}
          </>
        </Box>
      )}
    </Stack>
  );
};
