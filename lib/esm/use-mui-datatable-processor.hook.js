var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useReducer } from 'react';
import { MuiDatatableDefaultPaginationOptions, } from './mui-datatable-provider-props.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
import { MuiDatatableInitialValue, MuiDatatableReducer, } from './mui-datatable.reducer';
function defaultSearchFunction(searchTerm, value) {
    return "".concat(value).toLowerCase().search(searchTerm) >= 0;
}
export function useMuiDatatableProcessor(_a) {
    var columns = _a.columns, data = _a.data, loading = _a.loading, _b = _a.pageSizes, pageSizes = _b === void 0 ? MuiDatatableDefaultPaginationOptions.pageSizes : _b, _c = _a.defaultPageSize, defaultPageSize = _c === void 0 ? MuiDatatableDefaultPaginationOptions.defaultPageSize : _c, _d = _a.disablePagination, disablePagination = _d === void 0 ? MuiDatatableDefaultPaginationOptions.disablePagination : _d;
    // datatable state
    var _e = useReducer(MuiDatatableReducer, MuiDatatableInitialValue), state = _e[0], dispatch = _e[1];
    // set loading state
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.SetLoading,
            payload: { loading: !!loading },
        });
    }, [loading]);
    // set state's columns from the property value
    // we want to select the columns to be shown in the
    // show/hide column menu
    // we also want to reset/set the visible columns here
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdateColumns,
            payload: {
                columns: columns,
            },
        });
    }, [columns]);
    // setup pagination options
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdatePaginationOptions,
            payload: {
                paginationOptions: { pageSizes: pageSizes, defaultPageSize: defaultPageSize, disablePagination: disablePagination },
            },
        });
    }, [pageSizes, defaultPageSize, disablePagination]);
    // setup first page size based on default page size
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdatePagination,
            payload: {
                pageMeta: __assign(__assign({}, state.pageMeta), { pageSize: state.paginationOptions.defaultPageSize }),
            },
        });
    }, [state.paginationOptions.defaultPageSize]);
    // set original data from the property value
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdateOriginalData,
            payload: { originalData: data },
        });
    }, [data]);
    // set column visibility choices,
    // collect names of searchable columns
    useEffect(function () {
        var columnVisibilityChoices = columns
            .filter(function (col) { return !col.hideFromColumnSelection; })
            .map(function (col) { return col.property; });
        var visibleColumns = columns
            .filter(function (col) { return !col.hideFromTable; })
            .map(function (col) { return col.property; });
        var searchableColumns = columns
            .filter(function (col) { return !col.disableSearch; })
            .map(function (col) { return col.property; });
        dispatch({
            action: MuiDatatableAction.UpdateColumnMeta,
            payload: {
                columnVisibilityChoices: columnVisibilityChoices,
                visibleColumns: visibleColumns,
                searchableColumns: searchableColumns,
            },
        });
    }, [state.columns]);
    // set the prepared data based on state's original data
    // and columns
    useEffect(function () {
        // empty prepared data for empty data set or empty settings for
        // columns
        if (state.originalData.length === 0 || state.columns.length === 0) {
            dispatch({
                action: MuiDatatableAction.UpdatePreparedData,
                payload: { preparedData: [] },
            });
            return;
        }
        // filter out only the used properties in the table
        // configured by the column settings
        var preparedData = state.originalData.map(function (data) {
            return state.columns.reduce(function (prev, column) {
                var _a, _b;
                var value = undefined;
                // if property exists collect it directly
                if (column.property in data) {
                    value = data[column.property];
                }
                else if (column.valueGetter) {
                    value = column.valueGetter(column.property, data);
                }
                else {
                    return __assign(__assign({}, prev), (_a = {}, _a[column.property] = undefined, _a));
                }
                // if it needs to be transformed, transform it
                if (column.transformValue) {
                    value = column.transformValue(value, data);
                }
                // update the prepared data point
                return __assign(__assign({}, prev), (_b = {}, _b[column.property] = value, _b));
            }, {});
        });
        // update the prepared data in the state
        dispatch({
            action: MuiDatatableAction.UpdatePreparedData,
            payload: {
                preparedData: preparedData,
            },
        });
    }, [state.originalData, state.columns]);
    // set the data to be shown in the table
    useEffect(function () {
        // apply search
        var data = state.preparedData.filter(function (prepared, index) {
            // no need to apply search if not needed
            if (!state.searchTerm || state.searchableColumns.length === 0) {
                return true;
            }
            // choose the proper search function
            var searchFn = state.columns[index].searchFn || defaultSearchFunction;
            // only apply search if search term is non-empty and
            // there are columns to search into
            var foundInSearch = false;
            for (var _i = 0, _a = state.searchableColumns; _i < _a.length; _i++) {
                var searchKey = _a[_i];
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
            action: MuiDatatableAction.UpdateData,
            payload: {
                data: data,
            },
        });
    }, [state.preparedData, state.searchTerm, state.searchableColumns]);
    // set first page meta, this is
    // more like a startup/reset page meta
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdatePagination,
            payload: {
                pageMeta: {
                    cursor: 0,
                    total: state.data.length,
                },
            },
        });
    }, [state.data, state.paginationOptions, state.pageMeta.pageSize]);
    // calculate page meta
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdatePagination,
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
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.SetCurrentPageData,
            payload: {
                page: state.data.slice(state.pageMeta.cursor, state.pageMeta.cursor +
                    state.pageMeta.pageSize),
            },
        });
    }, [state.data, state.pageMeta]);
    return __assign(__assign({}, state), { dispatch: dispatch });
}
