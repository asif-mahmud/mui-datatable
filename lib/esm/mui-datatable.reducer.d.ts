import { Reducer } from 'react';
import { MuiDatatableRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
export declare type MuiDatatableReducerState = {
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: MuiDatatableRow[];
    preparedData: MuiDatatableRow[];
    originalData: MuiDatatableRow[];
    loading: boolean;
    searchTerm: string;
    searchableColumns: string[];
};
export declare type MuiDatatableReducerAction = {
    action: MuiDatatableAction;
    payload?: Partial<MuiDatatableReducerState>;
};
export declare const MuiDatatableInitialValue: MuiDatatableReducerState;
export declare const MuiDatatableReducer: Reducer<MuiDatatableReducerState, MuiDatatableReducerAction>;
