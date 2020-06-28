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
  Divider,
  SimpleGrid,
  Checkbox,
  Text,
} from '@chakra-ui/core';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'src/components/DatePicker';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikDatePicker } from 'src/components/DatePicker';
import useMutation from 'src/hooks/graphql/useMutation';
import moment from 'moment';

import Tasks from 'src/modules/Tasks';
import ResourceSelector from 'src/containers/collection/Selector';
const schema = {
  id: {
    type: 'uuid',
  },
  name: {
    type: 'string',
  },
  due_date: {
    type: 'timestamptz',
  },
  description: {
    type: 'string',
    minRows: 5,
  },
  priority: {
    type: 'select',
    options: [
      { value: 'very_high', label: 'Very High' },
      { value: 'high', label: 'High' },
      { value: 'medium', label: 'Medium' },
      { value: 'low', label: 'Low' },
      { value: 'very_low', label: 'Very Low' },
    ],
  },
  status: {
    type: 'select',
    options: [
      { value: 'todo', label: 'Todo' },
      { value: 'in_progress', label: 'In Progress' },
      { value: 'done', label: 'Done' },
    ],
  },
  project_id: {
    type: 'ref',
    resource: 'projects',
  },
};
const componentMap = {
  string: (key, schema) => {
    return <Input size={'sm'} />;
  },
  text: (key, schema) => {
    return <Textarea size={'sm'} />;
  },
  select: (key, schema) => {
    return (
      <Select placeholder={'Select a value'} size={'sm'}>
        {schema.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
    );
  },
  timestamptz: (key, schema, control) => (
    <Box>
      <Controller
        name={key}
        as={DatePicker}
        type={'input'}
        resource={schema.resource}
        control={control}
      />
    </Box>
  ),
  ref: (key, schema, control) => (
    <Controller
      name={key}
      as={ResourceSelector}
      resource={schema.resource}
      control={control}
    />
  ),
};
const SmartForm = ({ schema, defaultValues, render }) => {
  const { register, handleSubmit, reset, errors, control } = useForm({
    defaultValues,
  });
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);
  const components = Object.keys(schema)
    .filter((key) => !key.startsWith('ref') && schema[key].type !== 'uuid')
    .map((key) => {
      const component = componentMap[schema[key].type];
      return React.cloneElement(component(key, schema[key], control), {
        name: key,
        ref: register,
      });
    });
  return (
    <Stack spacing={10}>
      {components}
      {render(handleSubmit)}
    </Stack>
  );
};
export default ({ model, onSubmit = () => {} }) => {
  const [currentModel, setCurrentModel] = useState({
    name: 'Task name',
    description: 'Task Description',
    due_date: '2020-06-23T16:39:12.379985+00:00',
    status: 'todo',
    priority: 'very_high',
    project_id: '3a0ec3a0-75cd-4642-bff4-6075a9aef177',
  });
  useEffect(() => {
    setCurrentModel(model);
  }, [model]);

  return (
    <Stack spacing={10}>
      <SmartForm
        schema={schema}
        defaultValues={currentModel}
        render={(handleSubmit) => (
          <Button onClick={handleSubmit(console.log)}>Submit</Button>
        )}
      />
    </Stack>
  );
};
