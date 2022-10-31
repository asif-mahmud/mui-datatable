import { Reducer } from 'react';
import {
  MuiDatatableRow,
  MuiDatatableColumnOptions,
} from './mui-datatable-column-options.type';
import {
  MuiDatatableDefaultPaginationOptions,
  MuiDatatablePaginationOptions,
} from './mui-datatable-provider-props.type';
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
  pageMeta: {
    cursor: 0,
    hasNext: false,
    hasPrevious: false,
    pageSize: 0,
    total: 0,
  },
  paginationOptions: MuiDatatableDefaultPaginationOptions,
  page: [],
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
    case MuiDatatableAction.UpdatePaginationOptions: {
      return {
        ...state,
        paginationOptions: {
          ...state.paginationOptions,
          ...payload?.paginationOptions,
        },
      };
    }
    case MuiDatatableAction.UpdatePagination: {
      return {
        ...state,
        pageMeta: {
          ...state.pageMeta,
          ...payload?.pageMeta,
        },
      };
    }
    case MuiDatatableAction.SetCurrentPageData: {
      return {
        ...state,
        page: payload?.page || [],
      };
    }
    default:
      return state;
  }
};
