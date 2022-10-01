import { MuiDatatableColumnOptions } from './mui-datatable.reducer';
export default function useMuiDatatable(): {
    updateColumns: (columns: MuiDatatableColumnOptions[]) => void;
    updateOriginalData: (data: any[]) => void;
    updatePreparedData: (data: any[]) => void;
    updateData: (data: any[]) => void;
    setVisibleColumns: (columns: string[]) => void;
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: any[];
    preparedData: any[];
    originalData: any[];
};
