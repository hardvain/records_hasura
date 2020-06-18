// Render Prop
import { Input, Stack, Box, Button } from '@chakra-ui/core';
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
    <Mutation resource={'water'} operation={currentModel ? 'update' : 'insert'}>
      {(mutate) => (
        <Formik
          enableReinitialize={true}
          initialValues={{
            quantity: currentModel?.quantity || '',
            timestamp: currentModel?.timestamp
              ? moment(currentModel.timestamp).toISOString(true)
              : '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.quantity) {
              errors.quantity = 'Required';
            } else if (values.quantity <= 0) {
              errors.quantity = 'Invalid quantity';
            } else if (!values.timestamp) {
              errors.timestamp = 'Invalid timestamp';
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
            setCurrentModel()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={10} my={5}>
                <Box>
                  <Field
                    name="quantity"
                    type="number"
                    as={Input}
                    placeholder={'Quantity'}
                  />
                  <ErrorMessage name="quantity" component="div" />
                </Box>
                <Box>
                  <Field
                    name="timestamp"
                    as={Input}
                    placeholder={'Timestamp'}
                  />
                  <ErrorMessage name="timestamp" component="div" />
                </Box>
              </Stack>

              <Stack isInline>
                <Box flexGrow={1}></Box>
                <Button type="submit" onClick={() => setCurrentModel()}>
                  Clear
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
