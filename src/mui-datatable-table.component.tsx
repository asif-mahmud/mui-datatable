import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useMemo } from 'react';
import useMuiDatatable from './use-mui-datatable.hook';

export default function MuiDatatableTable() {
  const {
    columns: columnsConfig,
    visibleColumns,
    data,
    preparedData,
    originalData,
  } = useMuiDatatable();

  // only show columns that are being selected to be visible
  const columns = useMemo(() => {
    return columnsConfig.filter(col => visibleColumns.includes(col.property));
  }, [columnsConfig, visibleColumns]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.property} {...col.headerCellProps}>
                {col.renderHeader && col.renderHeader}
                {!col.renderHeader && (col.header || col.property)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map(col => (
                <TableCell key={col.property} {...col.valueCellProps}>
                  {col.renderCell &&
                    col.renderCell(
                      row[col.property] || '',
                      preparedData[index],
                      originalData[index]
                    )}
                  {!col.renderCell && (row[col.property] || '')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
