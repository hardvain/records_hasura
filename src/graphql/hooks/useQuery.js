import { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

export default ({
  name,
  where,
  order_by = { created_at: 'desc' },
  limit,
  fields,
  offset,
}) => {
  const client = useApolloClient();
  const [[data, loading, error], setResult] = useState([]);
  const queryString = `query list_${name}($where:${name}_bool_exp, $order_by:${name}_order_by!, $limit:Int, $offset:Int){
          ${name}(where:$where, order_by:[$order_by], limit:$limit,offset:$offset){
            ${fields.join(',')}
          }
      }`;

  const loadQuery = async () => {
    const { error, data, loading } = await client.query({
      query: gql(queryString),
      variables: { where, order_by, limit, offset },
    });
    setResult([data, loading, error]);
  };
  useEffect(() => {
    loadQuery();
  }, []);
  if (data) {
    const resultData = data[name];
    return [resultData, loading, error];
  } else {
    return [data, loading, error];
  }
};
