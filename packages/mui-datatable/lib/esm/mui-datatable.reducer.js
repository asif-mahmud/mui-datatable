import { MuiDatatableDefaultPaginationOptions, } from './mui-datatable-provider-props.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
export const MuiDatatableInitialValue = {
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
export const MuiDatatableReducer = (state, { action, payload }) => {
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
