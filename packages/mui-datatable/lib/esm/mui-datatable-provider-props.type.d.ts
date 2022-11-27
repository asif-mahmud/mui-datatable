import { MuiDatatableRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
export type MuiDatatablePaginationOptions = {
    pageSizes?: number[];
    defaultPageSize?: number;
    disablePagination?: boolean;
};
export declare const MuiDatatableDefaultPaginationOptions: MuiDatatablePaginationOptions;
export type MuiDatatableProviderProps = {
    columns: MuiDatatableColumnOptions[];
    data: MuiDatatableRow[];
    loading?: boolean;
} & MuiDatatablePaginationOptions;
