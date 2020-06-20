import { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export default ({
  name,
  where,
  order_by = { created_at: 'desc' },
  limit,
  fields,
  offset,
}) => {
  const queryString = `query list_${name}($where:${name}_bool_exp, $order_by:${name}_order_by!, $limit:Int, $offset:Int){
          ${name}(where:$where, order_by:[$order_by], limit:$limit,offset:$offset){
            ${fields.join(',')}
          }
      }`;
  const { loading, error, data } = useQuery(gql(queryString), {
    variables: { where, order_by, limit, offset },
  });
  if (data) {
    const resultData = data[name];
    return [resultData, loading, error];
  } else {
    return [data, loading, error];
  }
};