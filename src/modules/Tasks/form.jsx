// Render Prop
import { Input, Stack, Box, Button, Textarea, Select } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Mutation from 'src/graphql/mutation';
import moment from 'moment';
export default ({ model }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  return (
    <Mutation resource={'tasks'} operation={currentModel ? 'update' : 'insert'}>
      {(mutate) => (
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: currentModel?.name || '',
            description: currentModel?.description || '',
            priority: currentModel?.priority || '',
            team: currentModel?.team || '',
            due_date: currentModel?.due_date
              ? moment(currentModel.due_date).toISOString(true)
              : undefined,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            mutate({
              variables: {
                object: values,
                where: { id: { _eq: currentModel?.id } },
              },
            });
            setCurrentModel();
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form>
              <Stack spacing={10} my={5}>
                <Box>
                  <Field name="name" as={Input} placeholder={'Name'} />
                  <ErrorMessage name="name" component="div" />
                </Box>
                <Box>
                  <Field name="due_date" as={Input} placeholder={'due_date'} />
                  <ErrorMessage name="due_date" component="div" />
                </Box>
                <Box>
                  <Field
                    name="description"
                    as={Textarea}
                    placeholder={'Description'}
                  />
                  <ErrorMessage name="description" component="div" />
                </Box>
                <Box>
                  <Select
                    name="priority"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.priority}
                  >
                    <option value={'very_high'}>Very High</option>
                    <option value={'high'}>High</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'low'}>Low</option>
                    <option value={'very_low'}>Very Low</option>
                  </Select>
                  <ErrorMessage name="priority" component="div" />
                </Box>
              </Stack>

              <Stack isInline>
                <Box flexGrow={1}></Box>
                {!currentModel && (
                  <Button type="submit" onClick={() => setCurrentModel()}>
                    Clear
                  </Button>
                )}
                <Button type="submit" disabled={isSubmitting}>
                  {currentModel?.id ? 'Update' : 'Submit'}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
