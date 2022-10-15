/// <reference types="react" />
import { TableProps } from '@mui/material/Table';
import { TableBodyProps } from '@mui/material/TableBody';
import { TableCellProps } from '@mui/material/TableCell';
import { TableContainerProps } from '@mui/material/TableContainer';
import { TableHeadProps } from '@mui/material/TableHead';
import { TableRowProps } from '@mui/material/TableRow';
interface MuiDatatableTableProps {
    tableContainerProps?: TableContainerProps;
    tableProps?: TableProps;
    tableHeadProps?: TableHeadProps;
    headerRowProps?: TableRowProps;
    headerCellProps?: TableCellProps;
    tableBodyProps?: TableBodyProps;
    valueRowProps?: TableRowProps;
    valueCellProps?: TableCellProps;
}
export declare function MuiDatatableTable({ tableContainerProps, tableProps, tableHeadProps, headerRowProps, headerCellProps, tableBodyProps, valueRowProps, valueCellProps, }: MuiDatatableTableProps): JSX.Element;
export {};
