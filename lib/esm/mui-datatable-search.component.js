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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useMuiDatatable } from './use-mui-datatable.hook';
var defaultEndAdorment = (React.createElement(InputAdornment, { position: 'end' },
    React.createElement(SearchIcon, null)));
export function MuiDatatableSearch(_a) {
    var InputProps = _a.InputProps, rest = __rest(_a, ["InputProps"]);
    var _b = useMuiDatatable(), searchTerm = _b.searchTerm, setSearchTerm = _b.setSearchTerm;
    var _c = InputProps || {}, startAdornment = _c.startAdornment, _d = _c.endAdornment, endAdornment = _d === void 0 ? defaultEndAdorment : _d, restOfInputProps = __rest(_c, ["startAdornment", "endAdornment"]);
    return (React.createElement(TextField, __assign({ value: searchTerm, onChange: function (event) { return setSearchTerm(event.currentTarget.value); }, InputProps: __assign({ endAdornment: endAdornment, startAdornment: startAdornment }, restOfInputProps) }, rest)));
}
