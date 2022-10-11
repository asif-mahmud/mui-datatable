import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React from 'react';
import useMuiDatatable from './use-mui-datatable.hook';
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
export default function MuiDatatableSelectColumns(_a) {
    var _b = _a.showIcon, showIcon = _b === void 0 ? true : _b, _c = _a.icon, icon = _c === void 0 ? React.createElement(VisibilityOutlinedIcon, { sx: { mr: 1 } }) : _c, _d = _a.label, label = _d === void 0 ? React.createElement(Typography, { variant: 'body1' }, "Columns") : _d, _e = _a.renderValue, renderValue = _e === void 0 ? defaultRenderValue : _e, _f = _a.renderListItem, renderListItem = _f === void 0 ? defaultRenderListItem : _f;
    var _g = useMuiDatatable(), columnVisibilityChoices = _g.columnVisibilityChoices, visibleColumns = _g.visibleColumns, columnsConfig = _g.columns, setVisibleColumns = _g.setVisibleColumns;
    // remove columns that are to be visible always
    var columns = columnsConfig.filter(function (col) {
        return columnVisibilityChoices.includes(col.property);
    });
    // field's label component
    var selectLabel = (React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
        showIcon && icon,
        label));
    return (React.createElement(FormControl, { sx: { minWidth: '12rem' } },
        React.createElement(InputLabel, { id: 'mui-datatable-select-columns' }, selectLabel),
        React.createElement(Select, { labelId: 'mui-datatable-select-columns', multiple: true, value: visibleColumns, onChange: function (event) {
                setVisibleColumns(event.target.value);
            }, label: selectLabel, renderValue: function (selected) { return renderValue(selected, columnVisibilityChoices); } }, columns.map(function (col, index) { return (React.createElement(MenuItem, { key: index, value: col.property },
            React.createElement(Checkbox, { checked: visibleColumns.includes(col.property) }),
            React.createElement(ListItemText, null, renderListItem(col, index)))); }))));
}
