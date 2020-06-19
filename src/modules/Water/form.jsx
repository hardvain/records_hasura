// Render Prop
import {
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker, { FormikDatePicker } from 'src/components/DatePicker';
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
            description: currentModel?.description || '',
            timestamp: currentModel?.timestamp
              ? moment(currentModel.timestamp).toISOString(true)
              : moment().toISOString(true),
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
            setCurrentModel();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Stack spacing={10} my={5}>
                <Stack isInline>
                  <Box>
                    <FormControl>
                      <FormLabel htmlFor="quantity">Quantity</FormLabel>
                      <Field
                        name="quantity"
                        type="number"
                        size={'sm'}
                        as={Input}
                        placeholder={'Quantity'}
                      />
                      <ErrorMessage name="quantity" component="div" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel htmlFor="quantity">Timestamp</FormLabel>

                      <Box>
                        <FormikDatePicker name={'timestamp'} type={'input'} includeTime/>
                        <ErrorMessage name="timestamp" component="div" />
                      </Box>
                    </FormControl>
                  </Box>
                </Stack>

                <Box>
                  <FormControl>
                    <FormLabel htmlFor="quantity">Description</FormLabel>
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
                {!currentModel && (
                  <Button type="submit" onClick={() => setCurrentModel()}>
                    Clear
                  </Button>
                )}
                <Button type="submit" >
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
