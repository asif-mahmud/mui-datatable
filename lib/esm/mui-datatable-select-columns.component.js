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
import React, { useId } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
function defaultRenderValue(selected, choices) {
    var hasUnselectedChoices = choices.filter(function (choice) { return !selected.includes(choice); }).length > 0;
    return selected.length === 0
        ? ''
        : selected.length === 1
            ? 'Showing 1 column'
            : !hasUnselectedChoices
                ? 'Showing all columns'
                : "Showing ".concat(selected.length, " columns");
}
function defaultRenderListItem(column, index) {
    return (React.createElement(React.Fragment, null,
        column.renderHeader && column.renderHeader,
        !column.renderHeader && (column.header || "Column #".concat(index))));
}
export function MuiDatatableSelectColumns(_a) {
    var hideIcon = _a.hideIcon, _b = _a.icon, icon = _b === void 0 ? React.createElement(VisibilityOutlinedIcon, null) : _b, _c = _a.label, label = _c === void 0 ? (React.createElement(Typography, { variant: 'body1', sx: { ml: 1 } }, "Columns")) : _c, _d = _a.renderValue, renderValue = _d === void 0 ? defaultRenderValue : _d, _e = _a.renderListItem, renderListItem = _e === void 0 ? defaultRenderListItem : _e, _f = _a.formControlProps, _g = _f === void 0 ? {} : _f, formControlSx = _g.sx, formControlRest = __rest(_g, ["sx"]), inputLabelProps = _a.inputLabelProps, selectFieldProps = _a.selectFieldProps, menuItemProps = _a.menuItemProps;
    var _h = useMuiDatatable(), columnVisibilityChoices = _h.columnVisibilityChoices, visibleColumns = _h.visibleColumns, columnsConfig = _h.columns, setVisibleColumns = _h.setVisibleColumns;
    // remove columns that are to be visible always
    var columns = columnsConfig.filter(function (col) {
        return columnVisibilityChoices.includes(col.property);
    });
    // field's label component
    var selectLabel = (React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
        !hideIcon && icon,
        label));
    // select field's label id
    var labelId = useId();
    return (React.createElement(FormControl, __assign({ sx: __assign({ minWidth: '12rem' }, formControlSx) }, formControlRest),
        React.createElement(InputLabel, __assign({ id: labelId }, inputLabelProps), selectLabel),
        React.createElement(Select, __assign({}, selectFieldProps, { labelId: labelId, label: selectLabel, multiple: true, value: visibleColumns, onChange: function (event) {
                setVisibleColumns(event.target.value);
            }, renderValue: function (selected) { return renderValue(selected, columnVisibilityChoices); } }), columns.map(function (col, index) { return (React.createElement(MenuItem, __assign({ key: index, value: col.property }, menuItemProps),
            React.createElement(Checkbox, { checked: visibleColumns.includes(col.property) }),
            React.createElement(ListItemText, null, renderListItem(col, index)))); }))));
}
