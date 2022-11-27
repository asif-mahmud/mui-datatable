"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatableTable = void 0;
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const react_1 = __importStar(require("react"));
const use_mui_datatable_hook_1 = require("./use-mui-datatable.hook");
function defaultRenderProgress() {
    return react_1.default.createElement(CircularProgress_1.default, null);
}
function MuiDatatableTable({ tableContainerProps, tableProps, tableHeadProps, headerRowProps, headerCellProps, tableBodyProps, valueRowProps, valueCellProps, progressRowProps, progressCellProps, renderProgress = defaultRenderProgress, }) {
    const { columns: columnsConfig, visibleColumns, data, page, paginationOptions: { disablePagination }, preparedData, originalData, loading, } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    // select whole data or just current page to render
    const dataToRender = disablePagination ? data : page;
    // only show columns that are being selected to be visible
    const columns = (0, react_1.useMemo)(() => {
        return columnsConfig.filter(col => visibleColumns.includes(col.property));
    }, [columnsConfig, visibleColumns]);
    return (react_1.default.createElement(TableContainer_1.default, { ...tableContainerProps },
        react_1.default.createElement(Table_1.default, { ...tableProps },
            react_1.default.createElement(TableHead_1.default, { ...tableHeadProps },
                react_1.default.createElement(TableRow_1.default, { ...headerRowProps }, columns.map(col => (react_1.default.createElement(TableCell_1.default, { key: col.property, ...headerCellProps, ...col.headerCellProps },
                    col.renderHeader && col.renderHeader,
                    !col.renderHeader && (col.header || col.property)))))),
            react_1.default.createElement(TableBody_1.default, { ...tableBodyProps },
                !loading &&
                    dataToRender.map((row, index) => (react_1.default.createElement(TableRow_1.default, { key: index, ...valueRowProps }, columns.map(col => (react_1.default.createElement(TableCell_1.default, { key: col.property, ...valueCellProps, ...col.valueCellProps },
                        col.renderCell &&
                            col.renderCell(row[col.property] || '', preparedData[index], originalData[index]),
                        !col.renderCell && (row[col.property] || ''))))))),
                loading && (react_1.default.createElement(TableRow_1.default, { ...progressRowProps },
                    react_1.default.createElement(TableCell_1.default, { colSpan: columns.length, align: 'center', ...progressCellProps }, renderProgress())))))));
}
exports.MuiDatatableTable = MuiDatatableTable;
