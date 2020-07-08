// Render Prop
import { Stack, Box, Button } from '@chakra-ui/core';
import People from 'src/modules/Categories';
import Teams from './index';
import Projects from 'src/modules/Projects';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {} }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'teams',
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
          schema={Teams.schema}
          isSmart={model?.id}
          id={model?.id}
          resource={'teams'}
        >
          <Field name={'name'} />
          <Field name={'description'} />
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
      {model && model.id && (
        <Projects.List
          formContext={{ team_id: model.id }}
          where={{ _and: [{ team_id: { _eq: model.id } }] }}
        />
      )}
    </Stack>
  );
};
