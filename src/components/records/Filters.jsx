import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Collapse,
  Stack,
  Select,
} from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import RecordForm from 'src/components/records/form';
import RecordsList from 'src/components/records/list';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';

export default ({ filters: initialFilters, children }) => {
  const [filters, setFilters] = useState(initialFilters);

  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);
  const { date, nextDate, prevDate, setDate, getTeams, getProjects } = useStore(
    (state) => ({
      date: state.ui.date,
      nextDate: state.nextDate,
      prevDate: state.prevDate,
      setDate: state.setDate,
      getTeams: state.getTeams,
      getProjects: state.getProjects,
      setCurrentTeam: state.setCurrentTeam,
      currentTeam: state.ui.currentTeam,
    })
  );
  useEffect(() => {
    setFilters({ ...filters, date });
  }, [date.toISOString()]);
  useEffect(() => {
    getTeams().then((r) => setTeams(r.items));
    getProjects().then((r) => setProjects(r.items));
  }, []);

  return (
    <Box>
      <Flex justifyContent={'flex-start'}>
        <IconButton
          size={'sm'}
          icon={'chevron-left'}
          mr={2}
          onClick={prevDate}
        />
        <DatePicker
          selected={filters.date || date}
          onChange={setDate}
          type={'button'}
        />
        <Button mx={2} size={'sm'} onClick={() => setDate(moment())}>
          Today
        </Button>
        <IconButton size={'sm'} icon={'chevron-right'} onClick={nextDate} />
        <Select
          ml={2}
          size={'sm'}
          w={200}
          value={filters.project || 'all'}
          onChange={(e) => setFilters({ ...filters, project: e.target.value })}
        >
          <option value={'all'}>All</option>
          {projects.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </Select>
      </Flex>
      <Box>{children(filters)}</Box>
    </Box>
  );
};
