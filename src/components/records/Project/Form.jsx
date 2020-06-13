import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/core';
import moment from 'moment';
import { useEffect } from 'react';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';
export default ({ project = {}, setProject }) => {
  return (
    <Stack>
      <Stack mr={2} spacing={5}>
        <FormControl>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            borderRadius={3}
            resize={'none'}
            value={project.name}
            onChange={(e) =>
              setProject({
                ...project,
                name: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Description</FormLabel>
          <Textarea
            borderRadius={3}
            resize={'none'}
            value={project.description}
            onChange={(e) =>
              setProject({
                ...project,
                description: e.target.value,
              })
            }
          />
        </FormControl>
      </Stack>
    </Stack>
  );
};
