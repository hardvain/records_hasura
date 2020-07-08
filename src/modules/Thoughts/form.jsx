import { Stack, Button } from '@chakra-ui/core';
import Thoughts from './index';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
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
    resource: 'thoughts',
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
        schema={Thoughts.schema}
        isSmart={model?.id}
        id={model?.id}
        resource={'thoughts'}
      >
        <Stack spacing={10} flex={2}>
          <Field name={'name'} mb={5} />
          <Field name={'description'} mb={5} />
          <Stack isInline>
            <Field name={'task_id'} />
            <Field name={'project_id'} />
            <Field name={'team_id'} />
          </Stack>
        </Stack>
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
