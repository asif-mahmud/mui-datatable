"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatableReducer = exports.MuiDatatableInitialValue = void 0;
const mui_datatable_provider_props_type_1 = require("./mui-datatable-provider-props.type");
const mui_datatable_action_types_1 = require("./mui-datatable.action-types");
exports.MuiDatatableInitialValue = {
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
    paginationOptions: mui_datatable_provider_props_type_1.MuiDatatableDefaultPaginationOptions,
    page: [],
};
const MuiDatatableReducer = (state, { action, payload }) => {
    switch (action) {
        case mui_datatable_action_types_1.MuiDatatableAction.UpdateColumns: {
            return {
                ...state,
                columns: payload?.columns || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdateColumnMeta: {
            return {
                ...state,
                columnVisibilityChoices: payload?.columnVisibilityChoices || [],
                visibleColumns: payload?.visibleColumns || [],
                searchableColumns: payload?.searchableColumns || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdateOriginalData: {
            return {
                ...state,
                originalData: payload?.originalData || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdatePreparedData: {
            return {
                ...state,
                preparedData: payload?.preparedData || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdateData: {
            return {
                ...state,
                data: payload?.data || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.SetVisibleColumns: {
            return {
                ...state,
                visibleColumns: payload?.visibleColumns || [],
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.SetLoading: {
            return {
                ...state,
                loading: !!payload?.loading,
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.SetSearchTerm: {
            return {
                ...state,
                searchTerm: payload?.searchTerm || '',
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdatePaginationOptions: {
            return {
                ...state,
                paginationOptions: {
                    ...state.paginationOptions,
                    ...payload?.paginationOptions,
                },
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination: {
            return {
                ...state,
                pageMeta: {
                    ...state.pageMeta,
                    ...payload?.pageMeta,
                },
            };
        }
        case mui_datatable_action_types_1.MuiDatatableAction.SetCurrentPageData: {
            return {
                ...state,
                page: payload?.page || [],
            };
        }
        default:
            return state;
    }
};
exports.MuiDatatableReducer = MuiDatatableReducer;
