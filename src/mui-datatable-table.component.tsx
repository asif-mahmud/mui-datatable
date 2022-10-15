import CircularProgress from '@mui/material/CircularProgress';
import Table, { TableProps } from '@mui/material/Table';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer, {
  TableContainerProps,
} from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import React, { ReactNode, useMemo } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';

export type MuiDatatableTableProps = {
  tableContainerProps?: TableContainerProps;
  tableProps?: TableProps;
  tableHeadProps?: TableHeadProps;
  headerRowProps?: TableRowProps;
  headerCellProps?: TableCellProps;
  tableBodyProps?: TableBodyProps;
  valueRowProps?: TableRowProps;
  valueCellProps?: TableCellProps;
  progressRowProps?: TableRowProps;
  progressCellProps?: Omit<TableCellProps, 'colSpan' | 'align'>;
  renderProgress?: () => ReactNode;
};

function defaultRenderProgress() {
  return <CircularProgress />;
}

export function MuiDatatableTable({
  tableContainerProps,
  tableProps,
  tableHeadProps,
  headerRowProps,
  headerCellProps,
  tableBodyProps,
  valueRowProps,
  valueCellProps,
  progressRowProps,
  progressCellProps,
  renderProgress = defaultRenderProgress,
}: MuiDatatableTableProps) {
  const {
    columns: columnsConfig,
    visibleColumns,
    data,
    preparedData,
    originalData,
    loading,
  } = useMuiDatatable();

  // only show columns that are being selected to be visible
  const columns = useMemo(() => {
    return columnsConfig.filter(col => visibleColumns.includes(col.property));
  }, [columnsConfig, visibleColumns]);

  return (
    <TableContainer {...tableContainerProps}>
      <Table {...tableProps}>
        <TableHead {...tableHeadProps}>
          <TableRow {...headerRowProps}>
            {columns.map(col => (
              <TableCell
                key={col.property}
                {...headerCellProps}
                {...col.headerCellProps}
              >
                {col.renderHeader && col.renderHeader}
                {!col.renderHeader && (col.header || col.property)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody {...tableBodyProps}>
          {!loading &&
            data.map((row, index) => (
              <TableRow key={index} {...valueRowProps}>
                {columns.map(col => (
                  <TableCell
                    key={col.property}
                    {...valueCellProps}
                    {...col.valueCellProps}
                  >
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

          {loading && (
            <TableRow {...progressRowProps}>
              <TableCell
                colSpan={columns.length}
                align='center'
                {...progressCellProps}
              >
                {renderProgress()}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
