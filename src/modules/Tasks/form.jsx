// Render Prop
import { Stack, Box, Button, Divider, Heading } from '@chakra-ui/core';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import { SmartChecklists } from 'src/modules/Tasks/Checklists';
import { useStore } from 'src/store';
import Tasks from './index';
import Card from 'src/components/core/card';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
import TaskFormActions from 'src/modules/Tasks/TaskFormActions';

export default ({ model, onSubmitCallback, isPreview = false }) => {
  const methods = useForm();
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const [checklist, setChecklist] = useState([]);
  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setChecklist(model.checklist || []);
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'tasks',
    operation: 'insert',
  });

  const onSubmit = () => {
    methods.handleSubmit((data) =>
      mutate({
        variables: {
          object: { ...model, ...data, checklist },
          where: { id: { _eq: model?.id } },
        },
      })
    )();
    onSubmitCallback();
  };
  const addSubTask = (task) => {
    setNewFormContext({ project_id: task.project_id, parent_id: task.id });
    toggleFormPopup('tasks');
  };
  return (
    <FormContext
      isSmart={model?.id}
      {...methods}
      schema={Tasks.schema}
      resource={'tasks'}
      id={model?.id}
    >
      <Stack spacing={5} mb={5}>
        {model?.id && <TaskFormActions model={model} />}
        <Stack mt={2} isInline>
          <Stack spacing={5} flex={2}>
            <Stack flex={3}>
              <Field name={'name'} mb={5} />
              <Field rows={10} name={'description'} schema={Tasks.schema} />
            </Stack>
          </Stack>
          <Box flex={1} p={5}>
            <Field name={'due_date'} flex={1} />
            <Field name={'priority'} flex={1} />
            <Field name={'status'} flex={1} />
            <Field
              flex={1}
              name={'parent_id'}
              where={{ _and: [{ project_id: { _eq: model?.project_id } }] }}
            />
            <Field flex={1} name={'project_id'} />
            {!model?.project_id && <Field flex={1} name={'team_id'} />}
            <Field name={'people_id'} flex={1} />
          </Box>
        </Stack>
        {model?.id && (
          <Box>
            <Heading size={'xs'} mb={2}>
              Sub Tasks
            </Heading>
            <Card>
              <Tasks.List
                formContext={{ parent_id: model.id }}
                where={{ _and: [{ parent_id: { _eq: model.id } }] }}
              />
            </Card>
            <Button
              leftIcon={'small-add'}
              variant={'link'}
              variantColor={'brand'}
              size={'xs'}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addSubTask(model);
              }}
            >
              Add Sub Task
            </Button>
          </Box>
        )}
        {!model?.id && (
          <Button
            my={5}
            type="submit"
            variant={'solid'}
            variantColor={'brand'}
            size={'sm'}
            onClick={onSubmit}
          >
            Create
          </Button>
        )}
      </Stack>
    </FormContext>
  );
};
