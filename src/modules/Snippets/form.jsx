// Render Prop
import { Stack, Box, Button, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { ResourceSelector } from 'src/containers/collection/Selector';
import Loader from 'src/components/core/Loader';
import Tasks from './index';
import Snippets from './index';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {}, formContext = {} }) => {
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
  const snippetMutation = useMutation({
    resource: 'associated_snippets',
    operation: 'insert',
  });
  const onSelectSnippet = (id) => {
    snippetMutation({
      variables: {
        object: { source_id: model.id, target_id: id },
      },
    });
  };
  const onSubmit = () => {
    methods.handleSubmit((data) => {
      return mutate({
        variables: {
          object: { ...model, ...formContext, ...data },
          where: { id: { _eq: model?.id } },
        },
      });
    })();
    onSubmitCallback();
  };
  return (
    <Stack spacing={10}>
      <Box>
        <Link href={`/snippets/[id]`} as={`/snippets/${model?.id}`}>
          <Button size={'xs'}>View Details</Button>
        </Link>
      </Box>
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
        <Loader title={'References'}>
          <Stack spacing={10}>
            <Box mb={5}>
              <Text fontSize={13} mb={3}>
                References
              </Text>
              <Snippets.List
                where={{
                  _and: [{ ref_snippets: { source_id: { _eq: model.id } } }],
                }}
              />
            </Box>
            <ResourceSelector
              resource={'snippets'}
              onChange={onSelectSnippet}
            />

            <Box>
              <Text fontSize={13} mb={3}>
                Referenced By
              </Text>
              <Snippets.List
                where={{
                  _and: [{ ref_snippets: { target_id: { _eq: model.id } } }],
                }}
              />
            </Box>
          </Stack>
        </Loader>
      )}
    </Stack>
  );
};
