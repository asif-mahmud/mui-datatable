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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
import { rand } from './utils';
function defaultRenderValue(selected, choices) {
    return selected.length === 0
        ? ''
        : selected.length === 1
            ? 'Showing 1 column'
            : selected.length === choices.length
                ? 'Showing all columns'
                : "Showing ".concat(selected.length, " columns");
}
function defaultRenderListItem(column, index) {
    return (React.createElement(React.Fragment, null,
        column.renderHeader && column.renderHeader,
        !column.renderHeader && (column.header || "Column #".concat(index))));
}
export function MuiDatatableSelectColumns(_a) {
    var _b = _a.showIcon, showIcon = _b === void 0 ? true : _b, _c = _a.icon, icon = _c === void 0 ? React.createElement(VisibilityOutlinedIcon, null) : _c, _d = _a.label, label = _d === void 0 ? (React.createElement(Typography, { variant: 'body1', sx: { ml: 1 } }, "Columns")) : _d, _e = _a.renderValue, renderValue = _e === void 0 ? defaultRenderValue : _e, _f = _a.renderListItem, renderListItem = _f === void 0 ? defaultRenderListItem : _f, _g = _a.formControlProps, _h = _g === void 0 ? {} : _g, formControlSx = _h.sx, formControlRest = __rest(_h, ["sx"]), inputLabelProps = _a.inputLabelProps, selectFieldProps = _a.selectFieldProps, menuItemProps = _a.menuItemProps;
    var _j = useMuiDatatable(), columnVisibilityChoices = _j.columnVisibilityChoices, visibleColumns = _j.visibleColumns, columnsConfig = _j.columns, setVisibleColumns = _j.setVisibleColumns;
    // remove columns that are to be visible always
    var columns = columnsConfig.filter(function (col) {
        return columnVisibilityChoices.includes(col.property);
    });
    // field's label component
    var selectLabel = (React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
        showIcon && icon,
        label));
    // select field's label id
    var labelId = useMemo(function () { return "mui-datatable-select-columns-".concat(rand(4)); }, []);
    return (React.createElement(FormControl, __assign({ sx: __assign({ minWidth: '12rem' }, formControlSx) }, formControlRest),
        React.createElement(InputLabel, __assign({ id: labelId }, inputLabelProps), selectLabel),
        React.createElement(Select, __assign({}, selectFieldProps, { labelId: labelId, label: selectLabel, multiple: true, value: visibleColumns, onChange: function (event) {
                setVisibleColumns(event.target.value);
            }, renderValue: function (selected) { return renderValue(selected, columnVisibilityChoices); } }), columns.map(function (col, index) { return (React.createElement(MenuItem, __assign({ key: index, value: col.property }, menuItemProps),
            React.createElement(Checkbox, { checked: visibleColumns.includes(col.property) }),
            React.createElement(ListItemText, null, renderListItem(col, index)))); }))));
}
