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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useMemo } from 'react';
import useMuiDatatable from './use-mui-datatable.hook';
export default function MuiDatatableTable() {
    var _a = useMuiDatatable(), columnsConfig = _a.columns, visibleColumns = _a.visibleColumns, data = _a.data, preparedData = _a.preparedData, originalData = _a.originalData;
    // only show columns that are being selected to be visible
    var columns = useMemo(function () {
        return columnsConfig.filter(function (col) { return visibleColumns.includes(col.property); });
    }, [columnsConfig, visibleColumns]);
    return (React.createElement(TableContainer, null,
        React.createElement(Table, null,
            React.createElement(TableHead, null,
                React.createElement(TableRow, null, columns.map(function (col) { return (React.createElement(TableCell, __assign({ key: col.property }, col.headerCellProps),
                    col.renderHeader && col.renderHeader,
                    !col.renderHeader && (col.header || col.property))); }))),
            React.createElement(TableBody, null, data.map(function (row, index) { return (React.createElement(TableRow, { key: index }, columns.map(function (col) { return (React.createElement(TableCell, __assign({ key: col.property }, col.valueCellProps),
                col.renderCell &&
                    col.renderCell(row[col.property] || '', preparedData[index], originalData[index]),
                !col.renderCell && (row[col.property] || ''))); }))); })))));
}
