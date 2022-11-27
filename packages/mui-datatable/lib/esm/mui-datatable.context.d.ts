import { Dispatch } from 'react';
import { MuiDatatableReducerAction, MuiDatatableReducerState } from './mui-datatable.reducer';
export type MuiDatatableContextType = MuiDatatableReducerState & {
    dispatch?: Dispatch<MuiDatatableReducerAction>;
};
export declare const MuiDatatableContext: import("react").Context<MuiDatatableContextType>;
