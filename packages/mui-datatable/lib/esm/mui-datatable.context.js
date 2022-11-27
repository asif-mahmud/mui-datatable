"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatableContext = void 0;
const react_1 = require("react");
const mui_datatable_reducer_1 = require("./mui-datatable.reducer");
exports.MuiDatatableContext = (0, react_1.createContext)(mui_datatable_reducer_1.MuiDatatableInitialValue);
