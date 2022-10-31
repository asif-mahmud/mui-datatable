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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useId } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
var defaultPageSizeSelectLabel = 'Items per page';
function defaultRenderMenu(size) {
    return size;
}
export function MuiDatatablePageSizeSelect(_a) {
    var formControlProps = _a.formControlProps, inputLabelProps = _a.inputLabelProps, _b = _a.label, label = _b === void 0 ? defaultPageSizeSelectLabel : _b, selectProps = _a.selectProps, menuItemProps = _a.menuItemProps, _c = _a.renderMenu, renderMenu = _c === void 0 ? defaultRenderMenu : _c;
    var _d = useMuiDatatable(), setPageSize = _d.setPageSize, pageMeta = _d.pageMeta, _e = _d.paginationOptions, pageSizes = _e.pageSizes, defaultPageSize = _e.defaultPageSize, disablePagination = _e.disablePagination;
    var id = useId();
    var _f = formControlProps || {}, _g = _f.sx, formControlSx = _g === void 0 ? { minWidth: 150 } : _g, formControlRest = __rest(_f, ["sx"]);
    // no need to render the whole element if pagination
    // is disabled for some reason
    if (disablePagination) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(FormControl, __assign({ sx: formControlSx }, formControlRest),
        React.createElement(InputLabel, __assign({ id: id }, inputLabelProps), label),
        React.createElement(Select, __assign({ labelId: id, value: pageMeta.pageSize || defaultPageSize, label: label, onChange: function (event) { return setPageSize(event.target.value); } }, selectProps), pageSizes === null || pageSizes === void 0 ? void 0 : pageSizes.map(function (size, index) { return (React.createElement(MenuItem, __assign({ key: index, value: size }, menuItemProps), renderMenu(size))); }))));
}
