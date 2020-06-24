// Render Prop
import {
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  FormControl,
  FormLabel, Heading,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker, { FormikDatePicker } from 'src/components/DatePicker';
import useMutation from 'src/graphql/hooks/useMutation';
import Card from 'src/components/Card';
import moment from 'moment';
import Projects from 'src/modules/Projects';
export default ({ model, onSubmit }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  const mutate = useMutation({
    resource: 'teams',
    operation: currentModel ? 'update' : 'insert',
  });
  return (
    <Stack spacing={10}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: currentModel?.name || '',
          description: currentModel?.description || '',
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
              <Button type="submit">
                {currentModel?.id ? 'Update' : 'Submit'}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>

      {currentModel && (
        <Box>
          <Heading size={'sm'}>Projects</Heading>
          <Projects.List
            where={{ _and: [{ team_id: { _eq: currentModel.id } }] }}
          />
        </Box>
      )}
    </Stack>
  );
};
