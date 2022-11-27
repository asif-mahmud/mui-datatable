import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
const defaultEndAdorment = (React.createElement(InputAdornment, { position: 'end' },
    React.createElement(SearchIcon, null)));
export function MuiDatatableSearch({ InputProps, ...rest }) {
    const { searchTerm, setSearchTerm } = useMuiDatatable();
    const { startAdornment, endAdornment = defaultEndAdorment, ...restOfInputProps } = InputProps || {};
    return (React.createElement(TextField, { value: searchTerm, onChange: event => setSearchTerm(event.currentTarget.value), InputProps: {
            endAdornment,
            startAdornment,
            ...restOfInputProps,
        }, ...rest }));
}
