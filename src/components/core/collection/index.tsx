import List from './list';
import Table from './table';
import React from 'react';
import Skeleton from '../Skeleton';
import { Box } from '@chakra-ui/core';


export type QueryProps<BoolExp, OrderByExp> = {
  where?: BoolExp;
  orderBy?: OrderByExp[];
  limit?: number;
  offset?: number;
  type?: string;
};


type ListProps<A> = {
  listItem: React.FC<A>;
  details: React.FC<A>;
  hasDetails: (a: A) => boolean;
  expandAll?: boolean;
};

type TableProps<A, B> = {
  columns: B[];
};
type Props<A, B> = {
  loading: boolean;
  error: string;
  data: A[];
  type: string;
  listProps: ListProps<A>;
  tableProps: TableProps<A, B>;
};
function Collection<A, B>({
  loading,
  error,
  data,
  type = 'list',
  listProps,
  tableProps,
}: Props<A, B>) {
  if (loading) {
    // @ts-ignore
    return <Skeleton count={10} />;
  } else if (error) {
    return <Box>Error</Box>;
  } else {
    if (type === 'table') {
      return (
        <Table
          loading={loading}
          error={error}
          data={data}
          tableProps={tableProps}
        />
      );
    } else {
      return <List data={data} listProps={listProps} />;
    }
  }
}

export default Collection;
