import React from 'react';
import Objectives from 'src/modules/Objectives';
import { Box, Button, Heading, Stack, TabPanel } from '@chakra-ui/core';
import { useStore } from 'src/store';

export default () => {
  const { toggleFormPopup } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
  }));
  const addObjectives = () => {
    toggleFormPopup('objectives');
  };
  return (
    <Stack spacing={10} p={5}>
      <Stack m={5} isInline>
        <Box flexGrow={1} />
        <Button
          variant={'solid'}
          variantColor={'brand'}
          leftIcon={'small-add'}
          size={'sm'}
          onClick={addObjectives}
        >
          Add Objective
        </Button>
      </Stack>
      <Objectives.List
        group_by_field={(row) =>
          row['ref_objective_teams'][0]['ref_team']['name']
        }
        order_by={{
          created_at: 'asc_nulls_first',
        }}
      />
    </Stack>
  );
};
