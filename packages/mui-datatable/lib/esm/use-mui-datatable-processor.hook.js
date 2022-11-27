"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMuiDatatableProcessor = void 0;
const react_1 = require("react");
const mui_datatable_provider_props_type_1 = require("./mui-datatable-provider-props.type");
const mui_datatable_action_types_1 = require("./mui-datatable.action-types");
const mui_datatable_reducer_1 = require("./mui-datatable.reducer");
function defaultSearchFunction(searchTerm, value) {
    return `${value}`.toLowerCase().search(searchTerm) >= 0;
}
function useMuiDatatableProcessor({ columns, data, loading, pageSizes = mui_datatable_provider_props_type_1.MuiDatatableDefaultPaginationOptions.pageSizes, defaultPageSize = mui_datatable_provider_props_type_1.MuiDatatableDefaultPaginationOptions.defaultPageSize, disablePagination = mui_datatable_provider_props_type_1.MuiDatatableDefaultPaginationOptions.disablePagination, }) {
    // datatable state
    const [state, dispatch] = (0, react_1.useReducer)(mui_datatable_reducer_1.MuiDatatableReducer, mui_datatable_reducer_1.MuiDatatableInitialValue);
    // set loading state
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.SetLoading,
            payload: { loading: !!loading },
        });
    }, [loading]);
    // set state's columns from the property value
    // we want to select the columns to be shown in the
    // show/hide column menu
    // we also want to reset/set the visible columns here
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdateColumns,
            payload: {
                columns,
            },
        });
    }, [columns]);
    // setup pagination options
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePaginationOptions,
            payload: {
                paginationOptions: { pageSizes, defaultPageSize, disablePagination },
            },
        });
    }, [pageSizes, defaultPageSize, disablePagination]);
    // setup first page size based on default page size
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
            payload: {
                pageMeta: {
                    ...state.pageMeta,
                    pageSize: state.paginationOptions.defaultPageSize,
                },
            },
        });
    }, [state.paginationOptions.defaultPageSize]);
    // set original data from the property value
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdateOriginalData,
            payload: { originalData: data },
        });
    }, [data]);
    // set column visibility choices,
    // collect names of searchable columns
    (0, react_1.useEffect)(() => {
        const columnVisibilityChoices = columns
            .filter(col => !col.hideFromColumnSelection)
            .map(col => col.property);
        const visibleColumns = columns
            .filter(col => !col.hideFromTable)
            .map(col => col.property);
        const searchableColumns = columns
            .filter(col => !col.disableSearch)
            .map(col => col.property);
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdateColumnMeta,
            payload: {
                columnVisibilityChoices,
                visibleColumns,
                searchableColumns,
            },
        });
    }, [state.columns]);
    // set the prepared data based on state's original data
    // and columns
    (0, react_1.useEffect)(() => {
        // empty prepared data for empty data set or empty settings for
        // columns
        if (state.originalData.length === 0 || state.columns.length === 0) {
            dispatch({
                action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePreparedData,
                payload: { preparedData: [] },
            });
            return;
        }
        // filter out only the used properties in the table
        // configured by the column settings
        const preparedData = state.originalData.map(data => {
            return state.columns.reduce((prev, column) => {
                let value = undefined;
                // if property exists collect it directly
                if (column.property in data) {
                    value = data[column.property];
                }
                else if (column.valueGetter) {
                    value = column.valueGetter(column.property, data);
                }
                else {
                    return {
                        ...prev,
                        [column.property]: undefined,
                    };
                }
                // if it needs to be transformed, transform it
                if (column.transformValue) {
                    value = column.transformValue(value, data);
                }
                // update the prepared data point
                return {
                    ...prev,
                    [column.property]: value,
                };
            }, {});
        });
        // update the prepared data in the state
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePreparedData,
            payload: {
                preparedData,
            },
        });
    }, [state.originalData, state.columns]);
    // set the data to be shown in the table
    (0, react_1.useEffect)(() => {
        // apply search
        const data = state.preparedData.filter((prepared, index) => {
            // no need to apply search if not needed
            if (!state.searchTerm || state.searchableColumns.length === 0) {
                return true;
            }
            // choose the proper search function
            const searchFn = state.columns[index].searchFn || defaultSearchFunction;
            // only apply search if search term is non-empty and
            // there are columns to search into
            let foundInSearch = false;
            for (const searchKey of state.searchableColumns) {
                if (searchFn(state.searchTerm, prepared[searchKey])) {
                    foundInSearch = true;
                    break;
                }
            }
            return foundInSearch;
        });
        // TODO: we should probably apply search, sort, filter operations
        // here as well
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdateData,
            payload: {
                data,
            },
        });
    }, [state.preparedData, state.searchTerm, state.searchableColumns]);
    // set first page meta, this is
    // more like a startup/reset page meta
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
            payload: {
                pageMeta: {
                    cursor: 0,
                    total: state.data.length,
                },
            },
        });
    }, [state.data, state.paginationOptions, state.pageMeta.pageSize]);
    // calculate page meta
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.UpdatePagination,
            payload: {
                pageMeta: {
                    hasNext: state.data.length >
                        state.pageMeta.cursor +
                            state.pageMeta.pageSize,
                    hasPrevious: state.pageMeta.cursor > 0,
                },
            },
        });
    }, [state.data, state.pageMeta.cursor, state.pageMeta.pageSize]);
    // set the current page data based on page meta
    (0, react_1.useEffect)(() => {
        dispatch({
            action: mui_datatable_action_types_1.MuiDatatableAction.SetCurrentPageData,
            payload: {
                page: state.data.slice(state.pageMeta.cursor, state.pageMeta.cursor +
                    state.pageMeta.pageSize),
            },
        });
    }, [state.data, state.pageMeta]);
    return { ...state, dispatch };
}
exports.useMuiDatatableProcessor = useMuiDatatableProcessor;
