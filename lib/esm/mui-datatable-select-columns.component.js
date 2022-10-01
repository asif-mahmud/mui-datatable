import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import useMuiDatatable from './use-mui-datatable.hook';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
export default function MuiDatatableSelectColumns() {
    var _a = useMuiDatatable(), columnVisibilityChoices = _a.columnVisibilityChoices, visibleColumns = _a.visibleColumns, columnsConfig = _a.columns, setVisibleColumns = _a.setVisibleColumns;
    // remove columns that are to be visible always
    var columns = columnsConfig.filter(function (col) {
        return columnVisibilityChoices.includes(col.property);
    });
    return (React.createElement(FormControl, { sx: { minWidth: '12rem' } },
        React.createElement(InputLabel, { id: 'mui-datatable-select-columns' },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
                React.createElement(VisibilityOutlinedIcon, { sx: { mr: 1 } }),
                React.createElement(Typography, { variant: 'body1' }, "Columns"))),
        React.createElement(Select, { labelId: 'mui-datatable-select-columns', multiple: true, value: visibleColumns, onChange: function (event) {
                setVisibleColumns(event.target.value);
            }, label: React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
                React.createElement(VisibilityOutlinedIcon, { sx: { mr: 1 } }),
                React.createElement(Typography, { variant: 'body1' }, "Columns")), renderValue: function (selected) {
                return selected.length === 0
                    ? ''
                    : selected.length === 1
                        ? 'Showing 1 column'
                        : selected.length === columnVisibilityChoices.length
                            ? 'Showing all columns'
                            : "Showing ".concat(selected.length, " columns");
            } }, columns.map(function (col, index) { return (React.createElement(MenuItem, { key: index, value: col.property },
            React.createElement(Checkbox, { checked: visibleColumns.includes(col.property) }),
            React.createElement(ListItemText, null,
                col.renderHeader && col.renderHeader,
                !col.renderHeader && (col.header || "Column #".concat(index))))); }))));
}
