import gql from 'graphql-tag';
import { useSubscription } from '@apollo/react-hooks';

const constructAggregateString = (aggregates) => {
  let result = 'aggregate{\n';
  Object.keys(aggregates).map((key) => {
    const fieldsString =
      aggregates[key]?.length > 0 ? `{${aggregates[key].join(',')}}` : '';
    result = `${result}${key}${fieldsString}\n`;
  });
  result = result + '}';
  return result;
};

export default ({
  name,
  where,
  order_by = { created_at: 'desc' },
  limit,
  offset,
  aggregates,
}) => {
  const aggregateString = constructAggregateString(aggregates);
  const queryString = `subscription aggregate_${name}($where:${name}_bool_exp, $order_by:${name}_order_by!, $limit:Int, $offset:Int){
          ${name}_aggregate(where:$where, order_by:[$order_by], limit:$limit,offset:$offset){
            ${aggregateString}
          }
      }`;

  const { error, data, loading } = useSubscription(gql(queryString), {
    variables: { where, order_by, limit, offset },
  });

  if (data) {
    const resultData = data[`${name}_aggregate`].aggregate;
    return [resultData, loading, error];
  } else {
    return [data, loading, error];
  }
};
