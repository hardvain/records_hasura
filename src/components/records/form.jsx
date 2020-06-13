import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
import SearchSelect from 'src/components/SearchSelect';
import { useStore } from 'src/store';
import { RecordForm } from './index';

let defaultRecord = { recordType: 'generic' };
export default ({ model = defaultRecord, frozenType }) => {
  const toast = useToast();
  const [record, setRecord] = useState(model);
  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedProject, setSelectedProject] = useState();

  const {
    date,
    createRecord,
    updateRecord,
    colors,
    getTeams,
    getProjects,
  } = useStore((state) => ({
    createRecord: state.createRecord,
    getTeams: state.getTeams,
    getProjects: state.getProjects,
    updateRecord: state.updateRecord,
    colors: state.ui.colors,
    date: state.ui.date,
  }));
  useEffect(() => {
    setRecord(model);
    setSelectedProject(
      model.projects && model.projects.length > 0
        ? model.projects[0].id
        : undefined
    );
  }, [model]);
  console.log(record, selectedProject);
  useEffect(() => {
    getTeams().then((r) => setTeams(r.items));
    getProjects().then((r) => setProjects(r.items));
  }, []);
  const submit = async () => {
    const payload = { ...record };

    if (!payload.timestamp) {
      payload.timestamp = moment().toISOString();
    }
    if (selectedProject) {
      payload.projects = {
        connect: [{ id: selectedProject }],
      };
    }
    if (frozenType) {
      payload.recordType = frozenType;
    }
    if (payload.id) {
      await updateRecord(payload, toast);
    } else {
      payload.timestamp = moment(payload.timestamp);
      payload.timestamp.set('year', date.get('year'));
      payload.timestamp.set('month', date.get('month'));
      payload.timestamp.set('date', date.get('date'));
      payload.timestamp = payload.timestamp.toISOString();
      await createRecord(payload, toast);
    }
    setSelectedProject(undefined);
    setRecord(defaultRecord);
  };
  return (
    <Card my={3} borderWidth={1} p={3}>
      <Stack w={'100%'}>
        <RecordForm
          record={record}
          setRecord={setRecord}
          frozenType={frozenType}
        />
        <Divider />
        <Flex justifyContent={'space-around'} mt={2}>
          <Select
            w={200}
            mr={2}
            isDisabled={frozenType}
            placeholder={'Select record type'}
            size={'sm'}
            value={frozenType || record.recordType}
            onChange={(v) => {
              setRecord({ ...record, recordType: v.target.value });
            }}
          >
            <option value="generic">Generic</option>
            <option value="activity">Activity</option>
            <option value="task">Task</option>
            <option value="food">Food</option>
            <option value="transaction">Transaction</option>
            <option value="glucose">Blood Glucose</option>
            <option value="water">Water Consumption</option>
            <option value="insulin">Insulin</option>
            <option value="note">Note</option>
          </Select>
          <SearchSelect
            placeholder={'Select a project'}
            items={projects}
            value={selectedProject ? [selectedProject] : []}
            onChange={(v) => setSelectedProject(v[0])}
          />
          {/*<SearchSelect*/}
          {/*  ml={2}*/}
          {/*  placeholder={'Select tags'}*/}
          {/*  multiple*/}
          {/*  items={teams}*/}
          {/*  value={[selectedTeam]}*/}
          {/*  onChange={(v) => setSelectedTeam(v[0])}*/}
          {/*/>*/}
          {/*<Select*/}
          {/*  ml={2}*/}
          {/*  size={'sm'}*/}
          {/*  w={200}*/}
          {/*  placeholder={'Select a team'}*/}
          {/*  value={selectedTeam}*/}
          {/*  onChange={(e) => setSelectedTeam(e.target.value)}*/}
          {/*>*/}
          {/*  {teams.map((t) => (*/}
          {/*    <option key={t.id} value={t.id}>*/}
          {/*      {t.name}*/}
          {/*    </option>*/}
          {/*  ))}*/}
          {/*</Select>*/}
          <Box flexGrow={1}></Box>
          <Button variant="solid" size={'sm'} mr={2}>
            Clear
          </Button>
          <Button
            variant="solid"
            variantColor={colors.primary}
            size={'sm'}
            onClick={submit}
          >
            {record.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};
