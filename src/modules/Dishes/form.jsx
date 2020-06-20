// Render Prop
import {
  Input,
  Stack,
  Box,
  Button,
  Textarea,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikDatePicker } from 'src/components/DatePicker';
import Mutation from 'src/graphql/mutation';
import moment from 'moment';
export default ({ model, onSubmit = () => {} }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  return (
    <Mutation
      resource={'dishes'}
      operation={currentModel ? 'update' : 'insert'}
    >
      {(mutate) => (
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: currentModel?.name || '',
            description: currentModel?.description || '',
            carbs: currentModel?.carbs || 0,
            fat: currentModel?.fat || 0,
            protein: currentModel?.protein || 0,
            quantity: currentModel?.protein || 0,
            unit: currentModel?.unit || '',
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
            if (!currentModel) {
              setCurrentModel();
            }
            onSubmit();
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field name="name" as={Input} placeholder={'Name'} />
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
              <Stack isInline>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="carbs">Carbs</FormLabel>
                    <Field name="carbs" as={Input} placeholder={'Carbs'} />
                    <ErrorMessage name="carbs" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="fat">Fat</FormLabel>
                    <Field name="fat" as={Input} placeholder={'Fat'} />
                    <ErrorMessage name="fat" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="protein">Protein</FormLabel>
                    <Field name="protein" as={Input} placeholder={'Protein'} />
                    <ErrorMessage name="protein" component="div" />
                  </FormControl>
                </Box>
              </Stack>
              <Stack isInline>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="quantity">Quantity</FormLabel>
                    <Field
                      name="quantity"
                      as={Input}
                      placeholder={'Quantity'}
                    />
                    <ErrorMessage name="quantity" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="unit">Unit</FormLabel>
                    <Field name="unit" as={Input} placeholder={'Unit'} />
                    <ErrorMessage name="unit" component="div" />
                  </FormControl>
                </Box>
              </Stack>
              <Stack isInline>
                <Box flexGrow={1}></Box>
                <Button
                  type="submit"
                  variant={'default'}
                  bg={'brand.50'}
                  color={'brand.900'}
                  borderWidth={1}
                  borderColor={'brand.900'}
                >
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