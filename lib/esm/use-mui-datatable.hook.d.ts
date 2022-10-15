import { MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
export declare function useMuiDatatable(): {
    updateColumns: (columns: MuiDatatableColumnOptions[]) => void;
    updateOriginalData: (data: any[]) => void;
    updatePreparedData: (data: any[]) => void;
    updateData: (data: any[]) => void;
    setVisibleColumns: (columns: string[]) => void;
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: import("./mui-datatable-column-options.type").DataRow[];
    preparedData: import("./mui-datatable-column-options.type").DataRow[];
    originalData: import("./mui-datatable-column-options.type").DataRow[];
};
