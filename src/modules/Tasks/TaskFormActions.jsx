import {
  Stack,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from '@chakra-ui/core';
import moment from 'moment';
import useMutation from 'src/hooks/graphql/useMutation';

export default ({ props, model }) => {
  const { colorMode } = useColorMode();

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
        <MenuList bg={colorMode === 'light' ? 'white' : '#3e4242'}>
          <MenuItem onClick={() => update('due_date', null)}>Clear</MenuItem>
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
        <MenuList bg={colorMode === 'light' ? 'white' : '#3e4242'}>
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
