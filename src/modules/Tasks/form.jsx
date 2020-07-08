// Render Prop
import {
  Stack,
  Box,
  Button,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Collapse,
  Divider,
} from '@chakra-ui/core';
import Link from 'next/link';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import Delete from 'src/containers/actions/delete';
import moment from 'moment';
import { SmartChecklists } from 'src/modules/Tasks/Checklists';
import Tasks from './index';
import Card from 'src/components/core/card';
import CardActions from 'src/modules/Tasks/CardActions';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';

const TaskActions = ({ props, model }) => {
  const updateMutation = useMutation({
    resource: 'tasks',
    operation: 'update',
  });
  const update = (name, value) => {
    updateMutation({
      variables: {
        object: { ...model, [name]: value },
        where: { id: { _eq: model?.id } },
      },
    });
  };
  return (
    <Stack isInline spacing={2} {...props}>
      <Box flexGrow={1} />
      <Menu>
        <MenuButton
          mr={2}
          variant={'outline'}
          variantColor={'brand'}
          as={Button}
          rightIcon="chevron-down"
          size={'sm'}
        >
          {model?.due_date
            ? moment(model?.due_date).format('MMM DD, yyyy')
            : 'Due Date'}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => update('due_date', undefined)}>
            Clear
          </MenuItem>
          <MenuItem
            onClick={() => update('due_date', moment().toISOString(true))}
          >
            Today
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(1, 'day').toISOString(true))
            }
          >
            Tomorrow
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(1, 'week').toISOString(true))
            }
          >
            Next Week
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(1, 'month').toISOString(true))
            }
          >
            Next Month
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(3, 'month').toISOString(true))
            }
          >
            3 Months
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(6, 'month').toISOString(true))
            }
          >
            6 Months
          </MenuItem>
          <MenuItem
            onClick={() =>
              update('due_date', moment().add(1, 'year').toISOString(true))
            }
          >
            Next Year
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          variant={'outline'}
          variantColor={'brand'}
          as={Button}
          rightIcon="chevron-down"
          size={'sm'}
        >
          Status
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => update('status', 'todo')}>To Do</MenuItem>
          <MenuItem onClick={() => update('status', 'in_progress')}>
            In Progress
          </MenuItem>
          <MenuItem onClick={() => update('status', 'completed')}>
            Completed
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default ({ model, onSubmitCallback = () => {}, isPreview = false }) => {
  const [showMore, setShowMore] = useState(false);
  const methods = useForm();
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

  return (
    <FormContext
      isSmart={model?.id}
      {...methods}
      schema={Tasks.schema}
      resource={'tasks'}
      id={model?.id}
    >
      <Stack spacing={5}>
        {model?.id && <TaskActions model={model} />}
        <Stack mt={2} isInline>
          <Box flex={2}>
            <StackedCard>
              <Stack flex={3}>
                <Field name={'name'} mb={5} />
                <Field rows={10} name={'description'} schema={Tasks.schema} />
              </Stack>

              {model && model.id && (
                <StackedCardItem title={'Checklists'}>
                  <Box>
                    <SmartChecklists
                      id={model?.id}
                      name={'checklist'}
                      resource={'tasks'}
                      checklist={checklist}
                      setChecklist={setChecklist}
                    />
                  </Box>
                </StackedCardItem>
              )}
              {model && model.id && (
                <StackedCardItem title={'Sub Tasks'}>
                  <Card p={0}>
                    <Tasks.List
                      formContext={{ parent_id: model.id }}
                      where={{ _and: [{ parent_id: { _eq: model.id } }] }}
                    />
                  </Card>
                </StackedCardItem>
              )}
            </StackedCard>
          </Box>
          {!isPreview && (
            <Box flex={1} p={5}>
              <Field name={'due_date'} flex={1} />
              <Divider />
              <Field name={'priority'} flex={1} />
              <Divider />
              <Field name={'status'} flex={1} />
              <Divider />
              <Field
                flex={1}
                name={'parent_id'}
                where={{ _and: [{ project_id: { _eq: model?.project_id } }] }}
              />
              <Divider />
              <Field flex={1} name={'project_id'} />
              <Divider />
              {!model?.project_id && <Field flex={1} name={'team_id'} />}
              <Field name={'people_id'} flex={1} />
            </Box>
          )}
        </Stack>

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
