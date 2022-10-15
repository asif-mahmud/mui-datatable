import { Reducer } from 'react';
import {
  DataRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';
import { MuiDatatableAction } from './mui-datatable.action-types';

export type MuiDatatableReducerState = {
  columns: MuiDatatableColumnOptions[];
  visibleColumns: string[];
  columnVisibilityChoices: string[];
  data: DataRow[];
  preparedData: DataRow[];
  originalData: DataRow[];
  loading: boolean;
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
    case MuiDatatableAction.UpdateColumnVisiblityChoices: {
      return {
        ...state,
        columnVisibilityChoices: payload?.columnVisibilityChoices || [],
        visibleColumns: payload?.visibleColumns || [],
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
    default:
      return state;
  }
};
