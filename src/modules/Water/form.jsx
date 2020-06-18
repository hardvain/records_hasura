// Render Prop
import { Input, Stack, Box, Button } from '@chakra-ui/core';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Mutation from 'src/graphql/mutation';
import moment from 'moment';
const fields = `{
    id
    quantity
    description
    timestamp
}`;
export default ({model}) => (
  <Mutation resource={'water'} fields={fields}>
    {(mutate) => (
      <Formik
        initialValues={model || { quantity: '', timestamp: moment().toISOString(true) }}
        validate={(values) => {
          const errors = {};
          if (!values.quantity) {
            errors.quantity = 'Required';
          } else if (values.quantity <= 0) {
            errors.quantity = 'Invalid quantity';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          mutate({ variables: { object: values } });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack spacing={10} my={5}>
              <Box>
                <Field name="quantity" as={Input} placeholder={'Quantity'} />
                <ErrorMessage name="quantity" component="div" />
              </Box>
              <Box>
                <Field name="timestamp" as={Input} placeholder={'Timestamp'} />
                <ErrorMessage name="timestamp" component="div" />
              </Box>
            </Stack>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )}
  </Mutation>
);
