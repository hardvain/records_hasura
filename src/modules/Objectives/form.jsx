// Render Prop
import { Stack, Box, Button } from '@chakra-ui/core';
import People from 'src/modules/Categories';
import KeyResults from 'src/modules/KeyResults';
import Objectives from './index';
import Teams from 'src/modules/Teams';
import { useForm, FormContext } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Field from 'src/components/forms/Field';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ model, onSubmitCallback = () => {}, showList = true }) => {
  const [operation, setOperation] = useState('insert');
  const [teams, setTeams] = useState([]);
  const methods = useForm();

  useEffect(() => {
    methods.reset(model);
    if (model?.id) {
      setOperation('update');
    }
  }, [model]);

  const objectiveTeamMutation = useMutation({
    resource: 'objective_team',
    operation,
  });
  const mutate = useMutation({
    resource: 'objectives',
    operation,
    callback: (data) => {
      teams.map((team) => {
        objectiveTeamMutation({
          variables: {
            object: { team_id: team, objective_id: data[0]?.id },
          },
        });
      });
      onSubmitCallback()
    },
  });
  const onSubmit = () => {
    methods.handleSubmit((data) => {
      const payload = { ...data };
      setTeams(payload['teams']);
      delete payload['teams'];
      mutate({
        variables: {
          object: { ...model, ...payload },
          where: { id: { _eq: model?.id } },
        },
      });
    })();
  };
  return (
    <Stack spacing={10}>
      <Stack spacing={10}>
        <FormContext
          {...methods}
          schema={Objectives.schema}
          isSmart={model?.id}
          id={model?.id}
          resource={'objectives'}
        >
          <Field name={'name'} />
          <Field name={'description'} />
          <Field name={'start_date'} />
          <Field name={'end_date'} />
          <Field name={'teams'} />
        </FormContext>
      </Stack>

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
      {model && model.id && showList && (
        <Box pb={3}>
          <KeyResults.List
            where={{ _and: [{ objective_id: { _eq: model.id } }] }}
          />
        </Box>
      )}
    </Stack>
  );
};
