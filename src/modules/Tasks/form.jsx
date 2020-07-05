// Render Prop
import {
  Stack,
  Box,
  Button,
  Text,
  useColorMode,
  Collapse,
  Divider,
} from '@chakra-ui/core';
import Link from 'next/link';
import StackedCard, { StackedCardItem } from 'src/components/core/StackedCard';
import Delete from 'src/containers/actions/delete';
import { SmartChecklists } from 'src/modules/Tasks/Checklists';
import Tasks from './index';
import Card from 'src/components/core/card';
import CardActions from 'src/modules/Tasks/CardActions';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
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
      <Stack>
        <Stack isInline>
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
