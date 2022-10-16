import { Reducer } from 'react';
import {
  MuiDatatableRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';
import { MuiDatatableAction } from './mui-datatable.action-types';

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
};

export type MuiDatatableReducerAction = {
  action: MuiDatatableAction;
  payload?: Partial<MuiDatatableReducerState>;
};

export const MuiDatatableInitialValue: MuiDatatableReducerState = {
  columns: [],
  visibleColumns: [],
  columnVisibilityChoices: [],
  data: [],
  preparedData: [],
  originalData: [],
  loading: false,
  searchTerm: '',
  searchableColumns: [],
};

export const MuiDatatableReducer: Reducer<
  MuiDatatableReducerState,
  MuiDatatableReducerAction
> = (state, { action, payload }) => {
  switch (action) {
    case MuiDatatableAction.UpdateColumns: {
      return {
        ...state,
        columns: payload?.columns || [],
      };
    }
    case MuiDatatableAction.UpdateColumnMeta: {
      return {
        ...state,
        columnVisibilityChoices: payload?.columnVisibilityChoices || [],
        visibleColumns: payload?.visibleColumns || [],
        searchableColumns: payload?.searchableColumns || [],
      };
    }
    case MuiDatatableAction.UpdateOriginalData: {
      return {
        ...state,
        originalData: payload?.originalData || [],
      };
    }
    case MuiDatatableAction.UpdatePreparedData: {
      return {
        ...state,
        preparedData: payload?.preparedData || [],
      };
    }
    case MuiDatatableAction.UpdateData: {
      return {
        ...state,
        data: payload?.data || [],
      };
    }
    case MuiDatatableAction.SetVisibleColumns: {
      return {
        ...state,
        visibleColumns: payload?.visibleColumns || [],
      };
    }
    case MuiDatatableAction.SetLoading: {
      return {
        ...state,
        loading: !!payload?.loading,
      };
    }
    case MuiDatatableAction.SetSearchTerm: {
      return {
        ...state,
        searchTerm: payload?.searchTerm || '',
      };
    }
    default:
      return state;
  }
};
