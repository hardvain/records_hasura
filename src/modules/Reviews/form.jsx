// Render Prop
import { Stack, Box, Button } from '@chakra-ui/core';
import Tasks from 'src/modules/Tasks';
import Reviews from './index';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, showList = true, onSubmitCallback = () => {} }) => {
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
    resource: 'reviews',
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
        <FormContext
          {...methods}
          schema={Reviews.schema}
          isSmart={model?.id}
          id={model?.id}
          resource={'reviews'}
        >
          <Field name={'timestamp'} />
          <Field name={'type'} />
          <Field name={'score'} />
          <Field name={'summary'} />
        </FormContext>
      </Stack>

      <Stack isInline>
        <Box flexGrow={1} />
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
    </Stack>
  );
};
