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
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useMutation from 'src/graphql/hooks/useMutation';
import Tasks from 'src/modules/Tasks/index';
export default ({ model, onSubmit, formContext }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  const mutate = useMutation({
    resource: 'projects',
    operation: currentModel && currentModel.id ? 'update' : 'insert',
  });
  return (
    <Stack spacing={10}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: currentModel?.name || '',
          description: currentModel?.description || '',
          is_archived: currentModel?.is_archived,
          ...formContext,
        }}
        validate={(values) => {
          return {};
        }}
        onSubmit={(values, { setSubmitting }) => {
          mutate({
            variables: {
              object: values,
              where: { id: { _eq: currentModel?.id } },
            },
          });
          if (!currentModel) {
            setCurrentModel();
          }
          onSubmit();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={10} my={5}>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    name="name"
                    size={'sm'}
                    as={Input}
                    placeholder={'Name'}
                  />
                  <ErrorMessage name="name" component="div" />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Field
                    name="description"
                    as={Textarea}
                    placeholder={'Description'}
                  />
                  <ErrorMessage name="description" component="div" />
                </FormControl>
              </Box>
            </Stack>

            <Stack isInline>
              <Box flexGrow={1}></Box>
              <Button
                type="submit"
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
              >
                {currentModel?.id ? 'Update' : 'Create'}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      {currentModel && currentModel.id && (
        <Box pb={3}>
          <Heading size={'sm'} mb={3}>
            Tasks
          </Heading>
          <Tasks.List
            formContext={{ project_id: currentModel.id }}
            showFilterBar
            where={{ _and: [{ project_id: { _eq: currentModel.id } }] }}
          />
        </Box>
      )}
    </Stack>
  );
};
