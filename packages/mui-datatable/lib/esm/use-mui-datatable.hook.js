"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMuiDatatable = void 0;
const react_1 = require("react");
const mui_datatable_action_types_1 = require("./mui-datatable.action-types");
const mui_datatable_context_1 = require("./mui-datatable.context");
function useMuiDatatable() {
    const { dispatch, ...rest } = (0, react_1.useContext)(mui_datatable_context_1.MuiDatatableContext);
    // wrapper for update columns action
    const updateColumns = (columns) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdateColumns,
                payload: {
                    columns,
                },
            });
        }
    };
    // wrapper for update original data action
    const updateOriginalData = (data) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdateOriginalData,
                payload: {
                    originalData: data,
                },
            });
        }
    };
    // wrapper for update prepared data action
    const updatePreparedData = (data) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePreparedData,
                payload: {
                    preparedData: data,
                },
            });
        }
    };
    // wrapper for update data action
    const updateData = (data) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdateData,
                payload: {
                    data,
                },
            });
        }
    };
    // wrapper for set visible columns action
    const setVisibleColumns = (columns) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.SetVisibleColumns,
                payload: { visibleColumns: columns },
            });
        }
    };
    // wrapper for updating loading state
    const setLoading = (loading) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.SetLoading,
                payload: {
                    loading,
                },
            });
        }
    };
    // wrapper for setting search term
    const setSearchTerm = (searchTerm) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.SetSearchTerm,
                payload: {
                    searchTerm,
                },
            });
        }
    };
    // wrapper for changing pagination options
    const updatePaginationOptions = (options) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePaginationOptions,
                payload: {
                    paginationOptions: options,
                },
            });
        }
    };
    // wrapper for setting current page size
    const setPageSize = (pageSize) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        pageSize,
                    },
                },
            });
        }
    };
    // wrapper for navigating to a page
    const setPage = (page) => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        cursor: rest.pageMeta.pageSize * page,
                    },
                },
            });
        }
    };
    // wrapper to navigate to next page
    const nextPage = () => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        cursor: rest.pageMeta.cursor +
                            rest.pageMeta.pageSize,
                    },
                },
            });
        }
    };
    // wrapper to navigate to previous page
    const previousPage = () => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        cursor: rest.pageMeta.cursor -
                            rest.pageMeta.pageSize,
                    },
                },
            });
        }
    };
    // wrapper to navigate to first page
    const firstPage = () => {
        if (dispatch) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        cursor: 0,
                    },
                },
            });
        }
    };
    // wrapper to navigate to last page
    const lastPage = () => {
        if (dispatch) {
            const pageCount = Math.floor(rest.pageMeta.total / rest.pageMeta.pageSize);
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
                payload: {
                    pageMeta: {
                        cursor: pageCount * rest.pageMeta.pageSize,
                    },
                },
            });
        }
    };
    return {
        ...rest,
        updateColumns,
        updateOriginalData,
        updatePreparedData,
        updateData,
        setVisibleColumns,
        setLoading,
        setSearchTerm,
        updatePaginationOptions,
        setPageSize,
        setPage,
        nextPage,
        previousPage,
        firstPage,
        lastPage,
    };
}
exports.useMuiDatatable = useMuiDatatable;
