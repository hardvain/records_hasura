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
  Heading,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikDatePicker } from 'src/components/DatePicker';
import useMutation from 'src/graphql/hooks/useMutation';
import moment from 'moment';
import { FormikResourceSelector } from 'src/components/collection/Selector';
import Tasks from 'src/modules/Tasks';
export default ({ model, onSubmit = () => {} }) => {
  const [currentModel, setCurrentModel] = useState(model);
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);
  const mutate = useMutation({
    resource: 'tasks',
    operation: currentModel ? 'update' : 'insert',
  });
  return (
    <Stack spacing={10}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: currentModel?.name || '',
          description: currentModel?.description || '',
          priority: currentModel?.priority || '',
          team: currentModel?.team || '',
          project_id: currentModel?.project_id || undefined,
          status: currentModel?.status || 'todo',
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
              <Stack isInline justifyContent={'space-between'}>
                <Box>
                  <FormControl display={'grid'}>
                    <FormLabel htmlFor="due_date">Due Date</FormLabel>
                    <FormikDatePicker
                      placeholderText="Select a due date"
                      name={'due_date'}
                      type={'input'}
                      includeTime
                    />
                    <ErrorMessage name="due_date" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="team">Status</FormLabel>
                    <Select
                      size={'sm'}
                      name="status"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                      placeholder={'Select a status'}
                    >
                      <option value={'todo'}>To Do</option>
                      <option value={'in_progress'}>In Progress</option>
                      <option value={'completed'}>Completed</option>
                    </Select>
                    <ErrorMessage name="status" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="team">Project</FormLabel>
                    <FormikResourceSelector
                      fieldName="project_id"
                      name={'projects'}
                      value={values.project_id}
                    />
                    <ErrorMessage name="project_id" component="div" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="priority">Priority</FormLabel>
                    <Select
                      size={'sm'}
                      name="priority"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.priority}
                      placeholder={'Select a Priority'}
                    >
                      <option value={'very_high'}>Very High</option>
                      <option value={'high'}>High</option>
                      <option value={'medium'}>Medium</option>
                      <option value={'low'}>Low</option>
                      <option value={'very_low'}>Very Low</option>
                    </Select>
                    <ErrorMessage name="priority" component="div" />
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
      {currentModel && (
        <Box pb={3}>
          <Heading size={'sm'} mb={3}>
            Sub Tasks
          </Heading>
          <Tasks.List
            where={{ _and: [{ parent_id: { _eq: currentModel.id } }] }}
          />
        </Box>
      )}
    </Stack>
  );
};
