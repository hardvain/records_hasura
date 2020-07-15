// Render Prop
import { Stack, Box, Button, Text } from '@chakra-ui/core';
import Link from 'next/link';
import People from 'src/modules/Categories';
import Tasks from './index';
import Snippets from './index';
import { getNextRevisionDate } from './spaced-repetition';
import moment from 'moment';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
import MarkdownIt from 'markdown-it';

export default ({ model, onSubmitCallback = () => {}, formContext = {} }) => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  const [operation, setOperation] = useState('insert');
  const methods = useForm();
  const [showProjects, setShowProjects] = useState(false);
  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const mutate = useMutation({
    resource: 'snippets',
    operation,
  });
  const onCheckin = (currentEasiness) => {
    const response = getNextRevisionDate(model, currentEasiness);
    mutate({
      variables: {
        where: { id: { _eq: model?.id } },
        object: {
          due_date: response.due_date,
          checkins: [
            ...model.checkins,
            {
              timestamp: response.due_date.toISOString(true),
              easiness: currentEasiness,
              interval: response.interval,
            },
          ],
        },
      },
    });
  };

  const onSubmit = () => {
    methods.handleSubmit((data) => {
      return mutate({
        variables: {
          object: { ...model, ...formContext, ...data },
          where: { id: { _eq: model?.id } },
        },
      });
    })();
    onSubmitCallback();
  };
  return (
    <Stack spacing={10} w={'100%'}>
      <FormContext
        {...methods}
        schema={Snippets.schema}
        isSmart={model?.id}
        id={model?.id}
        resource={'snippets'}
      >
        <Stack isInline w={'100%'}>
         <Box w={'100%'}>
           <Field name={'name'} />
         </Box>

          {model && model?.id && (
            <Stack isInline borderWidth={1} borderRadius={3} p={3}>
              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(0)}
              >
                0
              </Button>

              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(1)}
              >
                1
              </Button>
              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(2)}
              >
                2
              </Button>
              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(3)}
              >
                3
              </Button>
              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(4)}
              >
                4
              </Button>
              <Button
                variant={'solid'}
                variantColor={'brand'}
                size={'sm'}
                onClick={() => onCheckin(5)}
              >
                5
              </Button>
            </Stack>
          )}
        </Stack>
        {model && model?.id && (
          <Box borderWidth={1} p={2}>
            <Field name={'description'} height={'100vh'} />
          </Box>
        )}
      </FormContext>

      <Stack isInline>
        <Box flexGrow={1} />
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
    </Stack>
  );
};
