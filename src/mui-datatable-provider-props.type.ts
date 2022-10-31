import {
  MuiDatatableRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';

export type MuiDatatablePaginationOptions = {
  pageSizes?: number[];
  defaultPageSize?: number;
  disablePagination?: boolean;
};

export const MuiDatatableDefaultPaginationOptions: MuiDatatablePaginationOptions =
  {
    pageSizes: [5, 10, 25],
    defaultPageSize: 5,
    disablePagination: false,
  };

export type MuiDatatableProviderProps = {
  columns: MuiDatatableColumnOptions[];
  data: MuiDatatableRow[];
  loading?: boolean;
} & MuiDatatablePaginationOptions;
