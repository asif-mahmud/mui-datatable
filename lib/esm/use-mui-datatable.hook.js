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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useContext } from 'react';
import { MuiDatatableAction } from './mui-datatable.action-types';
import { MuiDatatableContext } from './mui-datatable.context';
export function useMuiDatatable() {
    var _a = useContext(MuiDatatableContext), dispatch = _a.dispatch, rest = __rest(_a, ["dispatch"]);
    // wrapper for update columns action
    var updateColumns = function (columns) {
        if (dispatch) {
            dispatch({
                action: MuiDatatableAction.UpdateColumns,
                payload: {
                    columns: columns,
                },
            });
        }
    };
    // wrapper for update original data action
    var updateOriginalData = function (data) {
        if (dispatch) {
            dispatch({
                action: MuiDatatableAction.UpdateOriginalData,
                payload: {
                    originalData: data,
                },
            });
        }
    };
    // wrapper for update prepared data action
    var updatePreparedData = function (data) {
        if (dispatch) {
            dispatch({
                action: MuiDatatableAction.UpdatePreparedData,
                payload: {
                    preparedData: data,
                },
            });
        }
    };
    // wrapper for update data action
    var updateData = function (data) {
        if (dispatch) {
            dispatch({
                action: MuiDatatableAction.UpdateData,
                payload: {
                    data: data,
                },
            });
        }
    };
    // wrapper for set visible columns action
    var setVisibleColumns = function (columns) {
        if (dispatch) {
            dispatch({
                action: MuiDatatableAction.SetVisibleColumns,
                payload: { visibleColumns: columns },
            });
        }
    };
    return __assign(__assign({}, rest), { updateColumns: updateColumns, updateOriginalData: updateOriginalData, updatePreparedData: updatePreparedData, updateData: updateData, setVisibleColumns: setVisibleColumns });
}
