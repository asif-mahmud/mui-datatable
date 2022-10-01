import { TableCellProps } from '@mui/material/TableCell';
import { ReactNode, Reducer } from 'react';
import MuiDatatableAction from './mui-datatable.action-types';
export declare type MuiDatatableColumnOptions = {
    header?: string;
    renderHeader?: ReactNode;
    headerCellProps?: TableCellProps;
    property: string;
    valueGetter?: (property: string, row: any) => unknown;
    transformValue?: (value: any, row: any) => unknown;
    renderCell?: (value: any, preparedRow: any, row: any) => ReactNode;
    valueCellProps?: TableCellProps;
    hide?: boolean;
    alwaysShow?: boolean;
};
export declare type MuiDatatableReducerState = {
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: any[];
    preparedData: any[];
    originalData: any[];
};
export declare type MuiDatatableReducerAction = {
    action: MuiDatatableAction;
    payload?: Partial<MuiDatatableReducerState>;
};
export declare const MuiDatatableInitialValue: MuiDatatableReducerState;
declare const MuiDatatableReducer: Reducer<MuiDatatableReducerState, MuiDatatableReducerAction>;
export default MuiDatatableReducer;
