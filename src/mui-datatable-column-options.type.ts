import { TableCellProps } from '@mui/material/TableCell';
import { ReactNode } from 'react';

export type DataRow = Record<string, any>;

export type MuiDatatableColumnOptions = {
  header?: string;
  renderHeader?: ReactNode;
  headerCellProps?: TableCellProps;
  property: string;
  valueGetter?: (property: string, row: DataRow) => unknown;
  transformValue?: (value: any, row: DataRow) => unknown;
  renderCell?: (value: any, preparedRow: DataRow, row: DataRow) => ReactNode;
  valueCellProps?: TableCellProps;
  hide?: boolean;
  alwaysShow?: boolean;
};
