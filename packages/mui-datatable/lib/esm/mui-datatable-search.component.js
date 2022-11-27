"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatableSearch = void 0;
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_1 = __importDefault(require("react"));
const use_mui_datatable_hook_1 = require("./use-mui-datatable.hook");
const defaultEndAdorment = (react_1.default.createElement(InputAdornment_1.default, { position: 'end' },
    react_1.default.createElement(Search_1.default, null)));
function MuiDatatableSearch({ InputProps, ...rest }) {
    const { searchTerm, setSearchTerm } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    const { startAdornment, endAdornment = defaultEndAdorment, ...restOfInputProps } = InputProps || {};
    return (react_1.default.createElement(TextField_1.default, { value: searchTerm, onChange: event => setSearchTerm(event.currentTarget.value), InputProps: {
            endAdornment,
            startAdornment,
            ...restOfInputProps,
        }, ...rest }));
}
exports.MuiDatatableSearch = MuiDatatableSearch;
