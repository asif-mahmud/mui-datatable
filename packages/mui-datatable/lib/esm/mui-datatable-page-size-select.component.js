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
exports.MuiDatatablePageSizeSelect = void 0;
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const react_1 = __importStar(require("react"));
const use_mui_datatable_hook_1 = require("./use-mui-datatable.hook");
const defaultPageSizeSelectLabel = 'Items per page';
function defaultRenderMenu(size) {
    return size;
}
function MuiDatatablePageSizeSelect({ formControlProps, inputLabelProps, label = defaultPageSizeSelectLabel, selectProps, menuItemProps, renderMenu = defaultRenderMenu, }) {
    const { setPageSize, pageMeta, paginationOptions: { pageSizes, defaultPageSize, disablePagination }, } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    const id = (0, react_1.useId)();
    const { sx: formControlSx = { minWidth: 150 }, ...formControlRest } = formControlProps || {};
    // no need to render the whole element if pagination
    // is disabled for some reason
    if (disablePagination) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(FormControl_1.default, { sx: formControlSx, ...formControlRest },
        react_1.default.createElement(InputLabel_1.default, { id: id, ...inputLabelProps }, label),
        react_1.default.createElement(Select_1.default, { labelId: id, value: pageMeta.pageSize || defaultPageSize, label: label, onChange: event => setPageSize(event.target.value), ...selectProps }, pageSizes?.map((size, index) => (react_1.default.createElement(MenuItem_1.default, { key: index, value: size, ...menuItemProps }, renderMenu(size)))))));
}
exports.MuiDatatablePageSizeSelect = MuiDatatablePageSizeSelect;
