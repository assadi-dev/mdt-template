import React from "react";
import { TableContainer } from "./AccusationDatatable.styled";
import { useTable } from "react-table";

const AccusationsDatatable = ({ columns = [], infractions = [], ...props }) => {
  const columnData = React.useMemo(() => columns, [columns]);
  const rowData = React.useMemo(() => infractions, infractions);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columnData,
      data: rowData,
    });

  return (
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
        {infractions.length > 0 ? (
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
        ) : (
          <tr>
            <td colSpan={headerGroups[0].headers.length + 1}></td>
          </tr>
        )}
      </tbody>
    </TableContainer>
  );
};

export default AccusationsDatatable;
