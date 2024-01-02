import React from "react";
import { TableContainer } from "./AccusationDatatable.styled";
import { useTable, usePagination } from "react-table";

const AccusationsDatatable = ({
  columns = [],
  infractions = [],
  queryPageSize = 5,
  getTablePagingationInstance = () => {},

  ...props
}) => {
  const columnData = React.useMemo(() => columns, [columns]);
  const rowData = React.useMemo(() => infractions, [infractions]);

  const reactTableInstance = useTable(
    {
      columns: columnData,
      data: rowData,
      initialState: {
        pageIndex: 0,
        pageSize: queryPageSize,
      },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = reactTableInstance;

  React.useEffect(() => {
    const instance = {
      pageIndex,
      pageSize,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
    };
    console.log(canPreviousPage);
    getTablePagingationInstance(instance);
  }, [pageIndex, canNextPage, canPreviousPage]);

  return (
    <>
      <TableContainer {...getTableProps} {...props}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {infractions.length > 0
            ? page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()}>
                    {row.cells.map((cell, i) => {
                      return (
                        <td key={i} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </TableContainer>
    </>
  );
};

export default AccusationsDatatable;
