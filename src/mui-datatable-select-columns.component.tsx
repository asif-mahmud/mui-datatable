import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React, { ReactNode, useMemo } from 'react';
import { MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
import { useMuiDatatable } from './use-mui-datatable.hook';
import { rand } from './utils';

export type MuiDatatableSelectColumnsProps = {
  hideIcon?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  renderValue?: (selected: string[], choices: string[]) => ReactNode;
  renderListItem?: (
    column: MuiDatatableColumnOptions,
    index: number
  ) => ReactNode;
  formControlProps?: FormControlProps;
  inputLabelProps?: Omit<InputLabelProps, 'id'>;
  selectFieldProps?: Partial<
    Omit<
      SelectProps<string[]>,
      'labelId' | 'multiple' | 'value' | 'onChange' | 'label' | 'renderValue'
    >
  >;
  menuItemProps?: Omit<MenuItemProps, 'key' | 'value'>;
};

function defaultRenderValue(selected: string[], choices: string[]) {
  const hasUnselectedChoices =
    choices.filter(choice => !selected.includes(choice)).length > 0;
  return selected.length === 0
    ? ''
    : selected.length === 1
    ? 'Showing 1 column'
    : !hasUnselectedChoices
    ? 'Showing all columns'
    : `Showing ${selected.length} columns`;
}

function defaultRenderListItem(
  column: MuiDatatableColumnOptions,
  index: number
) {
  return (
    <>
      {column.renderHeader && column.renderHeader}
      {!column.renderHeader && (column.header || `Column #${index}`)}
    </>
  );
}

export function MuiDatatableSelectColumns({
  hideIcon,
  icon = <VisibilityOutlinedIcon />,
  label = (
    <Typography variant='body1' sx={{ ml: 1 }}>
      Columns
    </Typography>
  ),
  renderValue = defaultRenderValue,
  renderListItem = defaultRenderListItem,
  formControlProps: {
    sx: formControlSx,
    ...formControlRest
  } = {} as FormControlProps,
  inputLabelProps,
  selectFieldProps,
  menuItemProps,
}: MuiDatatableSelectColumnsProps) {
  const {
    columnVisibilityChoices,
    visibleColumns,
    columns: columnsConfig,
    setVisibleColumns,
  } = useMuiDatatable();

  // remove columns that are to be visible always
  const columns = columnsConfig.filter(col =>
    columnVisibilityChoices.includes(col.property)
  );

  // field's label component
  const selectLabel = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {!hideIcon && icon}
      {label}
    </Box>
  );

  // select field's label id
  const labelId = useMemo(() => `mui-datatable-select-columns-${rand(4)}`, []);

  return (
    <FormControl
      sx={{ minWidth: '12rem', ...formControlSx }}
      {...formControlRest}
    >
      <InputLabel id={labelId} {...inputLabelProps}>
        {selectLabel}
      </InputLabel>
      <Select
        {...selectFieldProps}
        labelId={labelId}
        label={selectLabel}
        multiple
        value={visibleColumns}
        onChange={event => {
          setVisibleColumns(event.target.value as string[]);
        }}
        renderValue={selected => renderValue(selected, columnVisibilityChoices)}
      >
        {columns.map((col, index) => (
          <MenuItem key={index} value={col.property} {...menuItemProps}>
            <Checkbox checked={visibleColumns.includes(col.property)} />
            <ListItemText>{renderListItem(col, index)}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
