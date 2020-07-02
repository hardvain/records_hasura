import useQuery from 'src/hooks/graphql/useQuery';
import useMutation from 'src/hooks/graphql/useMutation';

export const getRecords = (payload) => useQuery(payload);
export const updateRecord = (payload) =>
  useMutation({ ...payload, operation: 'update' });
export const insertRecord = (payload) =>
  useMutation({ ...payload, operation: 'insert' });
export const deleteRecord = (payload) =>
  useMutation({ ...payload, operation: 'delete' });
