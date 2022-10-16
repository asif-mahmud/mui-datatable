import {
  MuiDatatableRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';

export type MuiDatatableProviderProps = {
  columns: MuiDatatableColumnOptions[];
  data: MuiDatatableRow[];
  loading?: boolean;
};
