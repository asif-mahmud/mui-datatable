import {
  DataRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';

export type MuiDatatableProviderProps = {
  columns: MuiDatatableColumnOptions[];
  data: DataRow[];
  loading?: boolean;
};
