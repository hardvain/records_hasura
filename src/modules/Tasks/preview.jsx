// Render Prop
import {
  Stack,
  Box,
  Button,
  Text,
  Checkbox,
  Heading,
  Input,
  Divider,
  IconButton,
  PseudoBox,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import Tasks from './index';
import { useForm, Controller, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import Card from 'src/components/core/card'
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model }) => {
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
        <Box flex={1}>
          <Link as={`/tasks/${model.id}`} href={`/tasks/[id]`}>
            <Button variant={'outline'} size={'xs'}>
              View Details
            </Button>
          </Link>
        </Box>
      )}
      <Stack flex={2}>
        <FormContext {...methods} schema={Tasks.schema}>
          <Field
            rows={10}
            name={'description'}
            schema={Tasks.schema}
            height={300}
            config={{ view: { menu: false, md: false, html: true } }}
          />
        </FormContext>
      </Stack>
      {model && model.id && (
        <Stack spacing={10}>
          <Stack spacing={2} flex={1}>
            <Text fontSize={12}>Checklists</Text>
            {checklist.map((item, index) => (
              <PseudoBox
                px={2}
                py={1}
                _hover={
                  colorMode === 'light' ? { bg: 'gray.50' } : { bg: '#232626' }
                }
              >
                <Stack isInline key={index}>
                  <Checkbox
                    size={'lg'}
                    isDisabled={true}
                    isChecked={item?.isChecked}
                  />
                  <Input
                    flexGrow={1}
                    variant={'unstyled'}
                    textDecoration={item?.isChecked ? 'line-through' : ''}
                    value={item?.value}
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
    </Stack>
  );
};
