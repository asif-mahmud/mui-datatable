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
import React, { useEffect, useReducer } from 'react';
import MuiDatatableSelectColumns from './mui-datatable-select-columns.component';
import MuiDatatableTable from './mui-datatable-table.component';
import MuiDatatableAction from './mui-datatable.action-types';
import MuiDatatableContext from './mui-datatable.context';
import MuiDatatableReducer, { MuiDatatableInitialValue, } from './mui-datatable.reducer';
var MuiDatatable = function (_a) {
    var columns = _a.columns, data = _a.data, children = _a.children;
    var _b = useReducer(MuiDatatableReducer, MuiDatatableInitialValue), state = _b[0], dispatch = _b[1];
    // set state's columns from the property value
    // we want to select the columns to be shown in the
    // show/hide column menu
    // we also want to reset/set the visible columns here
    useEffect(function () {
        var columnVisibilityChoices = columns
            .filter(function (col) { return !col.alwaysShow; })
            .map(function (col) { return col.property; });
        var visibleColumns = columns
            .filter(function (col) { return !col.alwaysShow && !col.hide; })
            .map(function (col) { return col.property; });
        dispatch({
            action: MuiDatatableAction.UpdateColumns,
            payload: {
                columns: columns,
                columnVisibilityChoices: columnVisibilityChoices,
                visibleColumns: visibleColumns,
            },
        });
    }, [columns]);
    // set original data from the property value
    useEffect(function () {
        dispatch({
            action: MuiDatatableAction.UpdateOriginalData,
            payload: { originalData: data },
        });
    }, [data]);
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
        // TODO: we should probably apply search, sort, filter operations
        // here as well
        dispatch({
            action: MuiDatatableAction.UpdateData,
            payload: {
                data: state.preparedData,
            },
        });
    }, [state.preparedData]);
    return (React.createElement(MuiDatatableContext.Provider, { value: __assign(__assign({}, state), { dispatch: dispatch }) },
        children && children,
        !children && (React.createElement(React.Fragment, null,
            React.createElement(MuiDatatableSelectColumns, null),
            React.createElement(MuiDatatableTable, null)))));
};
export default MuiDatatable;
