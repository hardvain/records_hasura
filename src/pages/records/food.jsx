import { Box } from '@chakra-ui/core';
import { useEffect } from 'react';
import Filters from 'src/components/records/Filters';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';

export default () => {
  const { date, setColors } = useStore((state) => ({
    date: state.ui.date,
    setColors: state.setColors,
  }));

  useEffect(() => {
    setColors({ primary: 'red', secondary: 'orange' });
  }, []);
  return (
    <Box py={30}>
      <Filters filters={{ date: date, recordType: 'food' }}>
        {(filters) => (
          <RecordsWithForm filters={filters} frozenType={'food'} />
        )}
      </Filters>
    </Box>
  );
};
