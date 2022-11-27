import { Reducer } from 'react';
import { MuiDatatableRow, MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
import { MuiDatatablePaginationOptions } from './mui-datatable-provider-props.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
export type MuiDatatablePageMeta = {
    cursor?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    pageSize?: number;
    total?: number;
};
export type MuiDatatableReducerState = {
    columns: MuiDatatableColumnOptions[];
    visibleColumns: string[];
    columnVisibilityChoices: string[];
    data: MuiDatatableRow[];
    preparedData: MuiDatatableRow[];
    originalData: MuiDatatableRow[];
    loading: boolean;
    searchTerm: string;
    searchableColumns: string[];
    pageMeta: MuiDatatablePageMeta;
    paginationOptions: MuiDatatablePaginationOptions;
    page: MuiDatatableRow[];
};
export type MuiDatatableReducerAction = {
    action: MuiDatatableAction;
    payload?: Partial<MuiDatatableReducerState>;
};
export declare const MuiDatatableInitialValue: MuiDatatableReducerState;
export declare const MuiDatatableReducer: Reducer<MuiDatatableReducerState, MuiDatatableReducerAction>;
