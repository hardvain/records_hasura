import { Box } from '@chakra-ui/core';
import { useEffect } from 'react';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';

export default () => {
  const { date, setColors } = useStore((state) => ({
    date: state.ui.date,
    setColors: state.setColors,
  }));

  useEffect(() => {
    setColors({ primary: 'teal', secondary: 'blue' });
  }, []);
  return (
    <Box py={30}>
      <RecordsWithForm
        filters={{ date: date.format('yyyy-MM-DD'), recordType: 'transaction' }}
        frozenType={'transaction'}
      />
    </Box>
  );
};
