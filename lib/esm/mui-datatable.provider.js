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
import React from 'react';
import { MuiDatatableSearch } from './mui-datatable-search.component';
import { MuiDatatableSelectColumns } from './mui-datatable-select-columns.component';
import { MuiDatatableTable } from './mui-datatable-table.component';
import { MuiDatatableContext } from './mui-datatable.context';
import { useMuiDatatableProcessor } from './use-mui-datatable-processor.hook';
export var MuiDatatable = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var context = useMuiDatatableProcessor(rest);
    return (React.createElement(MuiDatatableContext.Provider, { value: context },
        children && children,
        !children && (React.createElement(React.Fragment, null,
            React.createElement(MuiDatatableSearch, null),
            React.createElement(MuiDatatableSelectColumns, null),
            React.createElement(MuiDatatableTable, null)))));
};
