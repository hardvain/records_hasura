import gql from 'graphql-tag';
import {  useSubscription } from '@apollo/react-hooks';

export default ({
  name,
  where,
  order_by = { created_at: 'asc' },
  limit,
  fields,
  offset,
}) => {
  const queryString = `subscription list_${name}($where:${name}_bool_exp, $order_by:${name}_order_by!, $limit:Int, $offset:Int){
          ${name}(where:$where, order_by:[$order_by], limit:$limit,offset:$offset){
            ${fields.join(',')}
          }
      }`;
  const { error, data, loading } = useSubscription(gql(queryString), {
    variables: { where, order_by, limit, offset },
  });
  if (data) {
    const resultData = data[name];
    return [resultData, loading, error];
  } else {
    return [data, loading, error];
  }
};
