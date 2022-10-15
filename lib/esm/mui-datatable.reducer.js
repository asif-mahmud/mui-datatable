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
import { MuiDatatableAction } from './mui-datatable.action-types';
export var MuiDatatableInitialValue = {
    columns: [],
    visibleColumns: [],
    columnVisibilityChoices: [],
    data: [],
    preparedData: [],
    originalData: [],
};
export var MuiDatatableReducer = function (state, _a) {
    var action = _a.action, payload = _a.payload;
    switch (action) {
        case MuiDatatableAction.UpdateColumns: {
            return __assign(__assign({}, state), { columns: (payload === null || payload === void 0 ? void 0 : payload.columns) || [] });
        }
        case MuiDatatableAction.UpdateColumnVisiblityChoices: {
            return __assign(__assign({}, state), { columnVisibilityChoices: (payload === null || payload === void 0 ? void 0 : payload.columnVisibilityChoices) || [], visibleColumns: (payload === null || payload === void 0 ? void 0 : payload.visibleColumns) || [] });
        }
        case MuiDatatableAction.UpdateOriginalData: {
            return __assign(__assign({}, state), { originalData: (payload === null || payload === void 0 ? void 0 : payload.originalData) || [] });
        }
        case MuiDatatableAction.UpdatePreparedData: {
            return __assign(__assign({}, state), { preparedData: (payload === null || payload === void 0 ? void 0 : payload.preparedData) || [] });
        }
        case MuiDatatableAction.UpdateData: {
            return __assign(__assign({}, state), { data: (payload === null || payload === void 0 ? void 0 : payload.data) || [] });
        }
        case MuiDatatableAction.SetVisibleColumns: {
            return __assign(__assign({}, state), { visibleColumns: (payload === null || payload === void 0 ? void 0 : payload.visibleColumns) || [] });
        }
        default:
            return state;
    }
};
