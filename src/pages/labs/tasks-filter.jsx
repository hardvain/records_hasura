import {
  Box, Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/core';
import React from 'react';
import ResourceSelector from 'src/components/collection/Selector';
import useFilters from 'src/hooks/useFilters';

export default () => {
  const filters = useFilters();

  return (
    <Stack p={10}>
      <Box>{JSON.stringify(filters)}</Box>
      <Stack isInline spacing={10}>
        <Button onClick={filters.and}>And</Button>
        <Button onClick={filters.or}>Or</Button>
        <Button onClick={filters.not}>Not</Button>
      </Stack>
      <FormControl mt={5}>
        <FormLabel>Team</FormLabel>
        <Select
          variant={'outline'}
          size={'sm'}
          name="team"
          value={filters.valueOf('team')}
          onChange={(e) => filters.set('team', e.target.value)}
          placeholder={'Select a Team'}
        >
          <option value={'vndly'}>VNDLY</option>
          <option value={'family'}>Family</option>
          <option value={'relationships'}>Relationships</option>
          <option value={'knowledge'}>Knowledge</option>
          <option value={'health'}>Health</option>
          <option value={'nutrition'}>Nutrition</option>
          <option value={'home'}>Home</option>
          <option value={'personal'}>Personal</option>
          <option value={'finance'}>Finance</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Project</FormLabel>
        <ResourceSelector
          placeholder={'Select a project'}
          name={'projects'}
          value={filters.valueOf('project')}
          onChange={(e) => filters.set('project', e)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <Select
          variant={'outline'}
          size={'sm'}
          name="priority"
          placeholder={'Select Priority'}
          value={filters.valueOf('priority')}
          onChange={(e) => filters.set('priority', e.target.value)}
        >
          <option value={'very_high'}>Very High</option>
          <option value={'high'}>High</option>
          <option value={'medium'}>Medium</option>
          <option value={'low'}>Low</option>
          <option value={'very_low'}>Very Low</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select
          variant={'outline'}
          size={'sm'}
          name="status"
          value={filters.valueOf('status')}
          onChange={(e) => filters.set('status', e.target.value)}
          placeholder={'Select Status'}
        >
          <option value={'todo'}>To Do</option>
          <option value={'in_progress'}>In Progress</option>
          <option value={'completed'}>Completed</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          value={filters.valueOf('name')}
          onChange={(e) => filters.set('name', e.target.value)}
        />
      </FormControl>
    </Stack>
  );
};
