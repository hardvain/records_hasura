import { Box } from '@chakra-ui/core';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';

export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));

  return (
    <Box py={30} px={50}>
      <RecordsWithForm filters={{ date: date.format('yyyy-MM-DD'), recordType:"transaction" }} frozenType={"transaction"}/>
    </Box>
  );
};
