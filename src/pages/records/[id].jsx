import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Form from 'src/components/records/form';
import { useStore } from 'src/store';
import { Box } from '@chakra-ui/core';
import Card from 'src/components/Card';
export default () => {
  const [record, setRecord] = useState();
  const router = useRouter();
  const { id } = router.query;
  const { getRecord } = useStore((state) => ({
    getRecord: state.getRecord,
  }));

  useEffect(() => {
    if (id) {
      getRecord(id).then(setRecord);
    }
  }, [id]);
  return (
    <Box p={5} >
      <Form model={record} setRecord={setRecord} />
    </Box>
  );
};
