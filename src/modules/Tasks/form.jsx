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
  Collapse,
} from '@chakra-ui/core';
import Link from 'next/link';
import SegmentedControl from 'src/components/forms/SegmentedControl';
import Delete from 'src/containers/actions/delete';
import Checklists, { SmartChecklists } from 'src/modules/Tasks/Checklists';
import Tasks from './index';
import Card from 'src/components/core/card';
import { useForm, Controller, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {}, showTasks }) => {
  const { colorMode } = useColorMode();
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
    <Stack spacing={10}>
      {model && model.id && (
        <Stack isInline spacing={10}>
          <Box flex={1}>
            <SegmentedControl
              options={Tasks.schema.status.options}
              value={model?.status}
            />
          </Box>
          <Box flex={1}>
            <Link as={`/tasks/${model.id}`} href={`/tasks/[id]`}>
              <Button variant={'outline'} size={'xs'}>
                View Details
              </Button>
            </Link>
          </Box>
          <Delete resource={'tasks'} id={model.id} />
        </Stack>
      )}
      <FormContext
        {...methods}
        schema={Tasks.schema}
        resource={'tasks'}
        id={model?.id}
      >
        <Stack spacing={10} mb={5}>
          <Stack flex={2}>
            <Field name={'name'} mb={5} />
            <Field
              rows={10}
              name={'description'}
              schema={Tasks.schema}
              height={300}
            />
          </Stack>
          <Box>
            <Button
              size={'xs'}
              variant={'ghost'}
              onClick={() => setShowMore(!showMore)}
            >
              Toggle More Details
            </Button>
          </Box>
          <Collapse isOpen={showMore}>
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
              {!model?.project_id && <Field flex={1} name={'team_id'} />}
              <Field name={'people_id'} flex={1} />
            </Stack>
          </Collapse>
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
        {model && model.id && (
          <Stack spacing={10}>
            <SmartChecklists
              id={model?.id}
              name={'checklist'}
              resource={'tasks'}
              checklist={checklist}
              setChecklist={setChecklist}
            />
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
