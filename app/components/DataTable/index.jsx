import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { Table } from "./DataTable.styled";
import Pagination from "./Pagination";
import { useEffect } from "react";
import RowLoading from "./RowLoading";
import EmptyRow from "./EmptyRow";

const DataTable = ({
  columns = [],
  data = [],
  manualPagination = true,
  initialStatePagination,
  totalCount,
  isSuccess = false,
  isLoading = true,
  onPageChange,
  onPageTotalCountChange,
  loadingMessage,
  isError,
  ...props
}) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);

  const queryPageSize = initialStatePagination
    ? initialStatePagination.pageSize
    : 10;
  const queryPageIndex = initialStatePagination
    ? initialStatePagination.pageIndex
    : 0;

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
  } = useTable(
    {
      columns: columnData,
      data: isSuccess ? rowData : [],
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
      },
      manualPagination,
      pageCount: isSuccess ? Math.ceil(totalCount / queryPageSize) : null,
    },
    usePagination
  );

  const TABLE_CLASS = ["dataTable-theme-color", props.className];

  useEffect(() => {
    if (!onPageChange) return;
    onPageChange(pageIndex);
  }, [pageIndex]);
  useEffect(() => {
    if (!onPageTotalCountChange) return;
    //console.log(totalCount);
    onPageTotalCountChange(totalCount);
  }, [totalCount]);

  return (
    <>
      <Table {...getTableProps} {...props} className={TABLE_CLASS.join(" ")}>
        <thead>
          <tr>
            <th colSpan={100}>
              <Pagination
                pageIndex={queryPageIndex}
                pageCount={pageCount}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
              />
            </th>
          </tr>
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
          {isLoading ? (
            <RowLoading loadingMessage={loadingMessage} />
          ) : rows.length == 0 && !isLoading ? (
            <EmptyRow />
          ) : (
            rows.map((row, i) => {
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
          )}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
