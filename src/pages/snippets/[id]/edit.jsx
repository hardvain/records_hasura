import { Box, Button, Divider, Skeleton, Stack } from '@chakra-ui/core';
import React, { useEffect } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Field from 'src/components/forms/Field';
import useQuery from 'src/hooks/graphql/useQuery';
import Snippets from 'src/modules/Snippets';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [snippet] = useQuery({
    name: 'snippets',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description', 'checkins', 'difficulty', 'due_date'],
  });
  const methods = useForm();

  useEffect(() => {
    if (snippet && snippet[0]) {
      methods.reset(snippet[0]);
    }
  }, [snippet]);
  return snippet ? (
    <FormContext
      {...methods}
      schema={Snippets.schema}
      isSmart={snippet[0]?.id}
      id={snippet[0]?.id}
      resource={'snippets'}
    >
      <Field name={'description'} height={'100vh'} hideLabel />
    </FormContext>
  ) : (
    <Skeleton />
  );
};
