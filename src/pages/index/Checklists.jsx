// Render Prop
import {
  Stack,
  Box,
  Button,
  Text,
  Checkbox,
  Input,
  IconButton,
  PseudoBox,
  useColorMode,
} from '@chakra-ui/core';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';

const Checklists = ({ checklist, setChecklist }) => {
  const setChecklistItem = (value, property, index) => {
    const list = [...checklist];
    const item = list[index];
    list[index] = {
      ...item,
      [property]: value,
    };
    setChecklist(list);
  };

  return (
    <Stack spacing={0} flex={1}>
      {checklist.map((item, index) => (
        <PseudoBox key={index} px={2} py={1}>
          <Stack isInline key={index}>
            <Checkbox
              variantColor={'brand'}
              size={'xs'}
              isChecked={item?.isChecked}
              onChange={(e) =>
                setChecklistItem(e.target.checked, 'isChecked', index)
              }
            />
            <Input
              size={'xs'}
              flexGrow={1}
              variant={'unstyled'}
              textDecoration={item?.isChecked ? 'line-through' : ''}
              value={item?.value}
              onChange={(e) => setChecklistItem(e.target.value, 'value', index)}
            />
          </Stack>
        </PseudoBox>
      ))}
    </Stack>
  );
};

export default Checklists;

export const SmartChecklists = ({ resource, id, name, ...rest }) => {
  const mutate = useMutation({ resource, operation: 'update' });
  const update = (value) => {
    if (id) {
      mutate({
        variables: {
          object: { [name]: value },
          where: { id: { _eq: id } },
        },
      });
    }
  };
  const setChecklist = (v) => {
    update(v);
    rest.setChecklist(v);
  };
  return <Checklists {...rest} setChecklist={setChecklist} />;
};
