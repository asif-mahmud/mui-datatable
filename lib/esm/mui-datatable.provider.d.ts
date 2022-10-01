import { FC, PropsWithChildren } from 'react';
import { MuiDatatableColumnOptions } from './mui-datatable.reducer';
export declare type MuiDatatableProviderProps = {
    columns: MuiDatatableColumnOptions[];
    data: Object[];
};
declare const MuiDatatable: FC<PropsWithChildren<MuiDatatableProviderProps>>;
export default MuiDatatable;
