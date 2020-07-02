// Render Prop
import {
  Stack,
  Box,
  Button,
  Text,
  Checkbox,
  Input,
  Divider,
  IconButton,
  PseudoBox,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import Tasks from './index';
import Card from 'src/components/core/card';
import { useForm, Controller, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {}, showTasks }) => {
  const { colorMode } = useColorMode();
  const [operation, setOperation] = useState('insert');
  const methods = useForm();
  const [checklist, setChecklist] = useState([]);
  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
      setChecklist(model.checklist || []);
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'tasks',
    operation,
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
  const deleteMutate = useMutation({ resource: 'tasks', operation: 'delete' });
  const addCheckListItem = () => {
    setChecklist([...checklist, { checked: false }]);
  };
  const setChecklistItem = (value, property, index) => {
    const list = [...checklist];
    const item = list[index];
    list[index] = {
      ...item,
      [property]: value,
    };
    setChecklist(list);
  };
  const deleteChecklistItem = (index) => {
    const list = [...checklist];
    list.splice(index, 1);
    setChecklist(list);
  };
  return (
    <Stack spacing={10}>
      {model && model.id && (
        <Stack isInline spacing={10}>
          <Box flex={1}>
            {model?.status !== 'completed' ? (
              <Button
                variant={'outline'}
                variantColor={'green'}
                size={'xs'}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                Mark as Done
              </Button>
            ) : (
              <Button
                variant={'outline'}
                variantColor={'orange'}
                size={'xs'}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                Reopen
              </Button>
            )}
          </Box>
          <Box flex={1}>
            <Link as={`/tasks/${model.id}`} href={`/tasks/[id]`}>
              <Button variant={'outline'} size={'xs'}>
                View Details
              </Button>
            </Link>
          </Box>
          <Button
            onClick={() => {
              deleteMutate({ variables: { where: { id: { _eq: model.id } } } });
            }}
            flex={1}
            ml={2}
            variant={'outline'}
            variantColor={'red'}
            size={'xs'}
            leftIcon={'delete'}
          >
            Delete
          </Button>
        </Stack>
      )}
      <FormContext {...methods} schema={Tasks.schema}>
        <Stack isInline spacing={10} mb={5}>
          <Stack flex={2}>
            <Field name={'name'} mb={5} />
            <Field
              rows={10}
              name={'description'}
              schema={Tasks.schema}
              height={300}
            />
          </Stack>
          <Stack flex={1}>
            <Field name={'due_date'} flex={1} />
            <Field name={'priority'} flex={1} />
            <Field name={'status'} flex={1} />
            <Field
              flex={1}
              name={'parent_id'}
              where={{ _and: [{ project_id: { _eq: model?.project_id } }] }}
            />
            <Field flex={1} name={'project_id'} />
            {<Field flex={1} name={'team_id'} disabled={model?.project_id} />}
            <Field name={'people_id'} flex={1} />
          </Stack>
        </Stack>
        <Button
          my={5}
          type="submit"
          variant={'solid'}
          variantColor={'brand'}
          size={'sm'}
          onClick={onSubmit}
        >
          {model?.id ? 'Update' : 'Create'}
        </Button>
        {model && model.id && (
          <Stack isInline spacing={10}>
            <Stack spacing={2} flex={1}>
              <Text fontSize={12}>Checklists</Text>

              {checklist.map((item, index) => (
                <PseudoBox
                  px={2}
                  py={1}
                  _hover={
                    colorMode === 'light'
                      ? { bg: 'gray.50' }
                      : { bg: '#232626' }
                  }
                >
                  <Stack isInline key={index}>
                    <Checkbox
                      size={'lg'}
                      isChecked={item?.isChecked}
                      onChange={(e) =>
                        setChecklistItem(e.target.checked, 'isChecked', index)
                      }
                    />
                    <Input
                      flexGrow={1}
                      variant={'unstyled'}
                      textDecoration={item?.isChecked ? 'line-through' : ''}
                      value={item?.value}
                      onChange={(e) =>
                        setChecklistItem(e.target.value, 'value', index)
                      }
                    />
                    <IconButton
                      size={'sm'}
                      icon={'delete'}
                      onClick={() => deleteChecklistItem(index)}
                    />
                  </Stack>
                </PseudoBox>
              ))}
              <Box>
                <Button
                  size={'xs'}
                  variant={'link'}
                  leftIcon={'small-add'}
                  onClick={addCheckListItem}
                >
                  Add New
                </Button>
              </Box>
            </Stack>
            <Stack spacing={10} flex={1}>
              <Text fontSize={12}>Sub Tasks</Text>

              <Box pb={3}>
                <Card p={2}>
                  <Tasks.List
                    formContext={{ parent_id: model.id }}
                    where={{ _and: [{ parent_id: { _eq: model.id } }] }}
                  />
                </Card>
              </Box>
            </Stack>
          </Stack>
        )}
      </FormContext>
    </Stack>
  );
};
