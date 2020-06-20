import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
export default ({ name, fields, pollInterval = undefined }) => {
  const queryString = `query {${name}${fields}}`;
  const { loading, error, data } = useQuery(gql(queryString), {});
  if (data) {
    const resultData = data[name];
    return [resultData, loading, error];
  } else {
    return [data, loading, error];
  }
};
