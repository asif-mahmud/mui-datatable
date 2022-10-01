import { TableCellProps } from '@mui/material/TableCell';
import { ReactNode, Reducer } from 'react';
import MuiDatatableAction from './mui-datatable.action-types';

export type MuiDatatableColumnOptions = {
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

export type MuiDatatableReducerState = {
  columns: MuiDatatableColumnOptions[];
  visibleColumns: string[];
  columnVisibilityChoices: string[];
  data: any[];
  preparedData: any[];
  originalData: any[];
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
};

const MuiDatatableReducer: Reducer<
  MuiDatatableReducerState,
  MuiDatatableReducerAction
> = (state, { action, payload }) => {
  switch (action) {
    case MuiDatatableAction.UpdateColumns: {
      return {
        ...state,
        columns: payload?.columns || [],
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
    default:
      return state;
  }
};

export default MuiDatatableReducer;
