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
exports.MuiDatatableSelectColumns = void 0;
const VisibilityOutlined_1 = __importDefault(require("@mui/icons-material/VisibilityOutlined"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importStar(require("react"));
const use_mui_datatable_hook_1 = require("./use-mui-datatable.hook");
function defaultRenderValue(selected, choices) {
    const hasUnselectedChoices = choices.filter(choice => !selected.includes(choice)).length > 0;
    return selected.length === 0
        ? ''
        : selected.length === 1
            ? 'Showing 1 column'
            : !hasUnselectedChoices
                ? 'Showing all columns'
                : `Showing ${selected.length} columns`;
}
function defaultRenderListItem(column, index) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        column.renderHeader && column.renderHeader,
        !column.renderHeader && (column.header || `Column #${index}`)));
}
function MuiDatatableSelectColumns({ hideIcon, icon = react_1.default.createElement(VisibilityOutlined_1.default, null), label = (react_1.default.createElement(Typography_1.default, { variant: 'body1', sx: { ml: 1 } }, "Columns")), renderValue = defaultRenderValue, renderListItem = defaultRenderListItem, formControlProps: { sx: formControlSx, ...formControlRest } = {}, inputLabelProps, selectFieldProps, menuItemProps, }) {
    const { columnVisibilityChoices, visibleColumns, columns: columnsConfig, setVisibleColumns, } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    // remove columns that are to be visible always
    const columns = columnsConfig.filter(col => columnVisibilityChoices.includes(col.property));
    // field's label component
    const selectLabel = (react_1.default.createElement(Box_1.default, { sx: { display: 'flex', alignItems: 'center' } },
        !hideIcon && icon,
        label));
    // select field's label id
    const labelId = (0, react_1.useId)();
    return (react_1.default.createElement(FormControl_1.default, { sx: { minWidth: '12rem', ...formControlSx }, ...formControlRest },
        react_1.default.createElement(InputLabel_1.default, { id: labelId, ...inputLabelProps }, selectLabel),
        react_1.default.createElement(Select_1.default, { ...selectFieldProps, labelId: labelId, label: selectLabel, multiple: true, value: visibleColumns, onChange: event => {
                setVisibleColumns(event.target.value);
            }, renderValue: selected => renderValue(selected, columnVisibilityChoices) }, columns.map((col, index) => (react_1.default.createElement(MenuItem_1.default, { key: index, value: col.property, ...menuItemProps },
            react_1.default.createElement(Checkbox_1.default, { checked: visibleColumns.includes(col.property) }),
            react_1.default.createElement(ListItemText_1.default, null, renderListItem(col, index))))))));
}
exports.MuiDatatableSelectColumns = MuiDatatableSelectColumns;
