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
import useMutation from 'src/graphql/hooks/useMutation';

import moment from 'moment';
export default ({ model, onSubmit }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  const mutate = useMutation({
    resource: 'transactions',
    operation: currentModel ? 'update' : 'insert',
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: currentModel?.name || '',
        value: currentModel?.value || 0,
        description: currentModel?.description || '',
        team: currentModel?.team || '',
        type: currentModel?.type || 'expense',
        timestamp: currentModel?.timestamp
          ? moment(currentModel.timestamp).toISOString(true)
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
        if (!currentModel) {
          setCurrentModel();
        }
        onSubmit();
      }}
    >
      {({ isSubmitting, handleChange, handleBlur, values }) => (
        <Form>
          <Stack spacing={10} my={5}>
            <Box>
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field name="name" as={Input} placeholder={'Name'} />
                <ErrorMessage name="name" component="div" />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel htmlFor="value">Value</FormLabel>
                <Field
                  name="value"
                  as={Input}
                  type={'number'}
                  placeholder={'Value'}
                />
                <ErrorMessage name="value" component="div" />
              </FormControl>
            </Box>
            <Stack isInline justifyContent={'space-between'}>
              <Box>
                <FormControl display={'grid'}>
                  <FormLabel htmlFor="timestamp">Timestamp</FormLabel>
                  <FormikDatePicker
                    placeholderText="Select a due date"
                    name={'timestamp'}
                    type={'input'}
                    includeTime
                  />
                  <ErrorMessage name="timestamp" component="div" />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="team">Type</FormLabel>
                  <Select
                    size={'sm'}
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                    placeholder={'Select a type'}
                  >
                    <option value={'expense'}>Expense</option>
                    <option value={'income'}>Income</option>
                    <option value={'transfer'}>Transfer</option>
                  </Select>
                  <ErrorMessage name="type" component="div" />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel htmlFor="team">Team</FormLabel>
                  <Select
                    size={'sm'}
                    name="team"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.team}
                    placeholder={'Select a Team'}
                  >
                    <option value={'vndly'}>VNDLY</option>
                    <option value={'family'}>Family</option>
                    <option value={'relationships'}>Relationships</option>
                    <option value={'knowledge'}>Knowledge</option>
                    <option value={'health'}>Health</option>
                    <option value={'nutrition'}>Nutrition</option>
                    <option value={'home'}>Home</option>
                    <option value={'personal'}>Personal</option>
                    <option value={'finance'}>Finance</option>
                  </Select>
                  <ErrorMessage name="team" component="div" />
                </FormControl>
              </Box>
            </Stack>

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
  );
};
