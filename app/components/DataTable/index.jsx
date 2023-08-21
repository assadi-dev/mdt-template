import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table } from "./DataTable.styled";
import Pagination from "./Pagination";

const DataTable = ({
  columns = [],
  data = [],
  manualPagination = false,
  ...props
}) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columnData,
      data: rowData,
      manualPagination,
    });

  const TABLE_CLASS = ["dataTable-theme-color", props.className];

  return (
    <>
      <Table {...getTableProps} {...props} className={TABLE_CLASS.join(" ")}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
