import {
  Box,
  Skeleton,
  Stack,
  useColorMode,
  Heading,
  Button,
} from '@chakra-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import Modal from 'src/components/core/modal';
import ListItem from 'src/containers/collection/list/ListItem';
import useQuery from 'src/hooks/graphql/useQuery';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
import Objectives from 'src/modules/Objectives';
import KeyResults from 'src/modules/KeyResults';
import Summary from 'src/pages/index/Summary';
import { useStore } from 'src/store';
export default () => {
  const [expandAll, setExpandAll] = useState(false);

  const router = useRouter();
  const { colorMode } = useColorMode();
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const [show, setShow] = useState(false);

  const { id } = router.query;
  const [objective] = useQuery({
    name: 'objectives',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description', 'start_date', 'end_date'],
  });
  const addKeyResult = () => {
    setNewFormContext({ objective_id: objective[0]?.id });
    toggleFormPopup('key_results');
  };
  return objective ? (
    <Stack m={0}>
      <Card
        shadow={false}
        mt={0}
        borderLeftWidth={0}
        borderTopWidth={0}
        borderRadius={0}
        pb={0}
        mb={0}
      >
        <Stack isInline spacing={10} p={5}>
          <Box p={5} pb={10} flexGrow={1}>
            <Heading size={'md'}>{objective[0].name}</Heading>
          </Box>
          <Button
            variant={'ghost'}
            variantColor={'brand'}
            size={'sm'}
            onClick={() => setShow(!show)}
          >
            Edit
          </Button>
        </Stack>
        <Box p={5}>
          <Modal
            title={objective[0].name}
            show={show}
            onClose={() => setShow(!show)}
            href={`/objectives/[id]`}
            as={`/objectives/${objective[0]?.id}`}
          >
            <Objectives.Form model={objective[0]} showList={false} />
          </Modal>
        </Box>
      </Card>

      <Stack m={5} isInline>
        <Box flexGrow={1} />
        <Button
          variant={'solid'}
          variantColor={'brand'}
          leftIcon={'small-add'}
          size={'sm'}
          onClick={addKeyResult}
        >
          Add Key Result
        </Button>
      </Stack>
      <Card m={5} p={0} borderRadius={5}>
        <KeyResults.List
          expandAll={expandAll}
          where={{
            _and: [{ objective_id: { _eq: objective[0].id } }],
          }}
        />
      </Card>
    </Stack>
  ) : (
    <Skeleton />
  );
};
