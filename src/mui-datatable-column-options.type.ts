import { TableCellProps } from '@mui/material/TableCell';
import { ReactNode } from 'react';

export type MuiDatatableRow = Record<string, any>;

export type MuiDatatableColumnOptions = {
  header?: string;
  renderHeader?: ReactNode;
  headerCellProps?: TableCellProps;
  property: string;
  valueGetter?: (property: string, row: MuiDatatableRow) => unknown;
  transformValue?: (value: any, row: MuiDatatableRow) => unknown;
  renderCell?: (
    value: any,
    preparedRow: MuiDatatableRow,
    row: MuiDatatableRow
  ) => ReactNode;
  valueCellProps?: TableCellProps;
  hideFromTable?: boolean;
  hideFromColumnSelection?: boolean;
  search?: boolean;
  searchFn?: (searchTerm: string, value: any) => boolean;
};
