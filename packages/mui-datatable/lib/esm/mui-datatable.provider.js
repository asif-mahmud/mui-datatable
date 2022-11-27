"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatable = void 0;
const react_1 = __importDefault(require("react"));
const mui_datatable_page_navigation_component_1 = require("./mui-datatable-page-navigation.component");
const mui_datatable_page_size_select_component_1 = require("./mui-datatable-page-size-select.component");
const mui_datatable_search_component_1 = require("./mui-datatable-search.component");
const mui_datatable_select_columns_component_1 = require("./mui-datatable-select-columns.component");
const mui_datatable_table_component_1 = require("./mui-datatable-table.component");
const mui_datatable_context_1 = require("./mui-datatable.context");
const use_mui_datatable_processor_hook_1 = require("./use-mui-datatable-processor.hook");
const MuiDatatable = ({ children, ...rest }) => {
    const context = (0, use_mui_datatable_processor_hook_1.useMuiDatatableProcessor)(rest);
    return (react_1.default.createElement(mui_datatable_context_1.MuiDatatableContext.Provider, { value: context },
        children && children,
        !children && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(mui_datatable_search_component_1.MuiDatatableSearch, null),
            react_1.default.createElement(mui_datatable_select_columns_component_1.MuiDatatableSelectColumns, null),
            react_1.default.createElement(mui_datatable_table_component_1.MuiDatatableTable, null),
            react_1.default.createElement(mui_datatable_page_size_select_component_1.MuiDatatablePageSizeSelect, null),
            react_1.default.createElement(mui_datatable_page_navigation_component_1.MuiDatatablePageNavigation, null)))));
};
exports.MuiDatatable = MuiDatatable;
