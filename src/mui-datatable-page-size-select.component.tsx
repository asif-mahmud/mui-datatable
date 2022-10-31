import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import React, { ReactNode, useId } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';

export type MuiDatatablePageSizeSelectProps = {
  formControlProps?: FormControlProps;
  inputLabelProps?: Omit<InputLabelProps, 'id'>;
  label?: ReactNode;
  selectProps?: Omit<SelectProps, 'labelId' | 'value' | 'label' | 'onChange'>;
  menuItemProps?: Omit<MenuItemProps, 'value'>;
  renderMenu?: (size: number) => ReactNode;
};

const defaultPageSizeSelectLabel = 'Items per page';

function defaultRenderMenu(size: number) {
  return size;
}

export function MuiDatatablePageSizeSelect({
  formControlProps,
  inputLabelProps,
  label = defaultPageSizeSelectLabel,
  selectProps,
  menuItemProps,
  renderMenu = defaultRenderMenu,
}: MuiDatatablePageSizeSelectProps) {
  const {
    setPageSize,
    pageMeta,
    paginationOptions: { pageSizes, defaultPageSize, disablePagination },
  } = useMuiDatatable();
  const id = useId();
  const { sx: formControlSx = { minWidth: 150 }, ...formControlRest } =
    formControlProps || {};

  // no need to render the whole element if pagination
  // is disabled for some reason
  if (disablePagination) {
    return <></>;
  }

  return (
    <FormControl sx={formControlSx} {...formControlRest}>
      <InputLabel id={id} {...inputLabelProps}>
        {label}
      </InputLabel>
      <Select
        labelId={id}
        value={pageMeta.pageSize || defaultPageSize}
        label={label}
        onChange={event => setPageSize(event.target.value as number)}
        {...selectProps}
      >
        {pageSizes?.map((size, index) => (
          <MenuItem key={index} value={size} {...menuItemProps}>
            {renderMenu(size)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
