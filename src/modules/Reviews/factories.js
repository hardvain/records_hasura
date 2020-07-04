import { useEffect } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';
import useQuery from 'src/hooks/graphql/useQuery';
import { today } from './filters';
import Reviews from 'src/modules/Reviews';
import moment from 'moment';
export const getReviewForDate = (date) => {
  const [data, loading, error] = useQuery({
    name: 'reviews',
    where: today(date),
    fields: Object.keys(Reviews.schema),
  });
  const mutate = useMutation({
    resource: 'reviews',
    operation: 'insert',
  });
  const length = data?.length;
  const condition = !loading && (!data || length < 1);
  useEffect(() => {
    if (condition) {
      mutate({
        variables: {
          object: { timestamp: date.toISOString(true) },
        },
      });
    }
  }, [data]);
  return [data];
};
