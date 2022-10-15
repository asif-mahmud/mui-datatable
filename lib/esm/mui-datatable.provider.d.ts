import { FC, PropsWithChildren } from 'react';
import { DataRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
export declare type MuiDatatableProviderProps = {
    columns: MuiDatatableColumnOptions[];
    data: DataRow[];
};
export declare const MuiDatatable: FC<PropsWithChildren<MuiDatatableProviderProps>>;
