import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useMemo } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
function defaultRenderProgress() {
    return React.createElement(CircularProgress, null);
}
export function MuiDatatableTable({ tableContainerProps, tableProps, tableHeadProps, headerRowProps, headerCellProps, tableBodyProps, valueRowProps, valueCellProps, progressRowProps, progressCellProps, renderProgress = defaultRenderProgress, }) {
    const { columns: columnsConfig, visibleColumns, data, page, paginationOptions: { disablePagination }, preparedData, originalData, loading, } = useMuiDatatable();
    // select whole data or just current page to render
    const dataToRender = disablePagination ? data : page;
    // only show columns that are being selected to be visible
    const columns = useMemo(() => {
        return columnsConfig.filter(col => visibleColumns.includes(col.property));
    }, [columnsConfig, visibleColumns]);
    return (React.createElement(TableContainer, { ...tableContainerProps },
        React.createElement(Table, { ...tableProps },
            React.createElement(TableHead, { ...tableHeadProps },
                React.createElement(TableRow, { ...headerRowProps }, columns.map(col => (React.createElement(TableCell, { key: col.property, ...headerCellProps, ...col.headerCellProps },
                    col.renderHeader && col.renderHeader,
                    !col.renderHeader && (col.header || col.property)))))),
            React.createElement(TableBody, { ...tableBodyProps },
                !loading &&
                    dataToRender.map((row, index) => (React.createElement(TableRow, { key: index, ...valueRowProps }, columns.map(col => (React.createElement(TableCell, { key: col.property, ...valueCellProps, ...col.valueCellProps },
                        col.renderCell &&
                            col.renderCell(row[col.property] || '', preparedData[index], originalData[index]),
                        !col.renderCell && (row[col.property] || ''))))))),
                loading && (React.createElement(TableRow, { ...progressRowProps },
                    React.createElement(TableCell, { colSpan: columns.length, align: 'center', ...progressCellProps }, renderProgress())))))));
}
