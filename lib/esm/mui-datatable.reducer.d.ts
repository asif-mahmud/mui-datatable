import { Reducer } from 'react';
import { DataRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
export declare type MuiDatatableReducerState = {
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: DataRow[];
    preparedData: DataRow[];
    originalData: DataRow[];
};
export declare type MuiDatatableReducerAction = {
    action: MuiDatatableAction;
    payload?: Partial<MuiDatatableReducerState>;
};
export declare const MuiDatatableInitialValue: MuiDatatableReducerState;
export declare const MuiDatatableReducer: Reducer<MuiDatatableReducerState, MuiDatatableReducerAction>;
