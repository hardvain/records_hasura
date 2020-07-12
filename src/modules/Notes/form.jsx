// Render Prop
import { Stack, Box, Button, Text, Collapse } from '@chakra-ui/core';
import People from 'src/modules/Categories';
import Notes from './index';
import Snippets from 'src/modules/Snippets';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import { ResourceSelector } from 'src/components/forms/ResourceSelector';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {} }) => {
  const [operation, setOperation] = useState('insert');
  const methods = useForm();
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'notes',
    operation,
  });
  const snippetMutation = useMutation({
    resource: 'notes_snippets',
    operation: 'insert',
  });
  const onSelectSnippet = (id) => {
    snippetMutation({
      variables: {
        object: { note_id: model.id, snippet_id: id },
      },
    });
  };

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
        schema={Notes.schema}
        isSmart={model?.id}
        id={model?.id}
        resource={'notes'}
      >
        <Field name={'name'} />
        <Field name={'description'} />
      </FormContext>
      <Box mt={2} flexGrow={1}>
        <Button
          type="submit"
          variant={'solid'}
          variantColor={'brand'}
          size={'sm'}
          onClick={onSubmit}
        >
          {model?.id ? 'Update' : 'Create'}
        </Button>
      </Box>
      {/*{model && model.id && (*/}
      {/*  <Stack flex={1}>*/}
      {/*    <Box mb={5}>*/}
      {/*      <Text fontSize={13} mb={3}>*/}
      {/*        Snippets*/}
      {/*      </Text>*/}
      {/*      <Snippets.List*/}
      {/*        showBanners*/}
      {/*        formContext={{*/}
      {/*          notes_snippets: {*/}
      {/*            data: { note_id: model.id },*/}
      {/*          },*/}
      {/*        }}*/}
      {/*        where={{*/}
      {/*          _and: [{ ref_notes: { note_id: { _eq: model.id } } }],*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </Box>*/}
      {/*    /!*<ResourceSelector resource={'snippets'} onChange={onSelectSnippet} />*!/*/}
      {/*  </Stack>*/}
      {/*)}*/}
    </Stack>
  );
};
