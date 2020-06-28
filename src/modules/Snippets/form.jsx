// Render Prop
import { Stack, Box, Button, Text } from '@chakra-ui/core';
import Tasks from './index';
import Snippets from './index';
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
    resource: 'snippets',
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
      {model && model.id && (
        <Stack>
          <Box mb={5}>
            <Text fontSize={13}>References</Text>
            <Snippets.List
              where={{
                _and: [{ ref_snippets: { source_id: { _eq: model.id } } }],
              }}
            />
          </Box>
          <Box>
            <Text fontSize={13}>Referenced By</Text>
            <Snippets.List
              where={{
                _and: [{ ref_snippets: { target_id: { _eq: model.id } } }],
              }}
            />
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
