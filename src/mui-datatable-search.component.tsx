import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useMuiDatatable } from './use-mui-datatable.hook';

export type MuiDatatableSearchProps = Omit<
  TextFieldProps,
  'value' | 'onChange'
>;

const defaultEndAdorment = (
  <InputAdornment position='end'>
    <SearchIcon />
  </InputAdornment>
);

export function MuiDatatableSearch({
  InputProps,
  ...rest
}: MuiDatatableSearchProps) {
  const { searchTerm, setSearchTerm } = useMuiDatatable();
  const {
    startAdornment,
    endAdornment = defaultEndAdorment,
    ...restOfInputProps
  } = InputProps || {};

  return (
    <TextField
      value={searchTerm}
      onChange={event => setSearchTerm(event.currentTarget.value)}
      InputProps={{
        endAdornment,
        startAdornment,
        ...restOfInputProps,
      }}
      {...rest}
    />
  );
}
