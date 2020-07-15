import { List, ListItem, Box, SimpleGrid } from '@chakra-ui/core';
import Skeleton from '../Skeleton';
import { useTable } from 'react-table';
export default ({ loading, error, data, tableProps }) => {
  if (loading) {
    return (
      <SimpleGrid columns={5} spacing={1}>
        <Skeleton count={10} />
        <Skeleton count={10} />
        <Skeleton count={10} />
        <Skeleton count={10} />
        <Skeleton count={10} />
      </SimpleGrid>
    );
  } else if (error) {
    return <Box>Error</Box>;
  } else {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns: tableProps.columns.map((c) => ({
        Header: c,
        accessor: c.toString(),
      })),
      data,
    });

    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};
