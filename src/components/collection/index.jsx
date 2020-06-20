import gql from 'graphql-tag';
import { Box, Skeleton } from '@chakra-ui/core';
import { createElement } from 'react';
import Table from './Table';
import List from './List';
import Gallery from './Gallery';
import Query from 'src/graphql/query';

const DisplayMap = {
  list: List,
  table: Table,
  gallery: Gallery,
};
export default ({
  resource,
  fields,
  where,
  order_by,
  limit,
  offset,
  config,
}) => {
  return (
    <Query
      resource={resource}
      fields={fields}
      where={where}
      order_by={order_by}
      limit={limit}
      offset={offset}
    >
      {(data) => (
        <Box>
          {createElement(DisplayMap[config.type], {
            data: data,
            preview: config.preview,
            onItemSelect: config.onItemSelect || (() => {}),
          })}
        </Box>
      )}
    </Query>
  );
};
