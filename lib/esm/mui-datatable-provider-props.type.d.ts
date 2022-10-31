import { MuiDatatableRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
export declare type MuiDatatablePaginationOptions = {
    pageSizes?: number[];
    defaultPageSize?: number;
    disablePagination?: boolean;
};
export declare const MuiDatatableDefaultPaginationOptions: MuiDatatablePaginationOptions;
export declare type MuiDatatableProviderProps = {
    columns: MuiDatatableColumnOptions[];
    data: MuiDatatableRow[];
    loading?: boolean;
} & MuiDatatablePaginationOptions;
