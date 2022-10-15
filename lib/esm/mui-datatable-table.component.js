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
import { useMuiDatatable } from './use-mui-datatable.hook';
export function MuiDatatableTable(_a) {
    var tableContainerProps = _a.tableContainerProps, tableProps = _a.tableProps, tableHeadProps = _a.tableHeadProps, headerRowProps = _a.headerRowProps, headerCellProps = _a.headerCellProps, tableBodyProps = _a.tableBodyProps, valueRowProps = _a.valueRowProps, valueCellProps = _a.valueCellProps;
    var _b = useMuiDatatable(), columnsConfig = _b.columns, visibleColumns = _b.visibleColumns, data = _b.data, preparedData = _b.preparedData, originalData = _b.originalData;
    // only show columns that are being selected to be visible
    var columns = useMemo(function () {
        return columnsConfig.filter(function (col) { return visibleColumns.includes(col.property); });
    }, [columnsConfig, visibleColumns]);
    return (React.createElement(TableContainer, __assign({}, tableContainerProps),
        React.createElement(Table, __assign({}, tableProps),
            React.createElement(TableHead, __assign({}, tableHeadProps),
                React.createElement(TableRow, __assign({}, headerRowProps), columns.map(function (col) { return (React.createElement(TableCell, __assign({ key: col.property }, headerCellProps, col.headerCellProps),
                    col.renderHeader && col.renderHeader,
                    !col.renderHeader && (col.header || col.property))); }))),
            React.createElement(TableBody, __assign({}, tableBodyProps), data.map(function (row, index) { return (React.createElement(TableRow, __assign({ key: index }, valueRowProps), columns.map(function (col) { return (React.createElement(TableCell, __assign({ key: col.property }, valueCellProps, col.valueCellProps),
                col.renderCell &&
                    col.renderCell(row[col.property] || '', preparedData[index], originalData[index]),
                !col.renderCell && (row[col.property] || ''))); }))); })))));
}
