import { Box } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';
import Filters from 'src/components/records/Filters';
export default () => {
  const { date, setColors } = useStore((state) => ({
    date: state.ui.date,
    setColors: state.setColors,
  }));

  useEffect(() => {
    setColors({ primary: 'deeppurple', secondary: 'deeporange' });
  }, []);
  return (
    <Box py={30}>
      <Filters filters={{ date }}>
        {(filters) => <RecordsWithForm filters={filters} />}
      </Filters>
    </Box>
  );
};
