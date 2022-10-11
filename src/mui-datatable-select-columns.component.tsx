import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React, { ReactNode } from 'react';
import { MuiDatatableColumnOptions } from './mui-datatable.reducer';
import useMuiDatatable from './use-mui-datatable.hook';

export type MuiDatatableSelectColumnsProps = {
  showIcon?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  renderValue?: (selected: string[], choices: string[]) => ReactNode;
  renderListItem?: (
    column: MuiDatatableColumnOptions,
    index: number
  ) => ReactNode;
};

function defaultRenderValue(selected: string[], choices: string[]) {
  return selected.length === 0
    ? ''
    : selected.length === 1
    ? 'Showing 1 column'
    : selected.length === choices.length
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

export default function MuiDatatableSelectColumns({
  showIcon = true,
  icon = <VisibilityOutlinedIcon sx={{ mr: 1 }} />,
  label = <Typography variant='body1'>Columns</Typography>,
  renderValue = defaultRenderValue,
  renderListItem = defaultRenderListItem,
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
      {showIcon && icon}
      {label}
    </Box>
  );

  return (
    <FormControl sx={{ minWidth: '12rem' }}>
      <InputLabel id='mui-datatable-select-columns'>{selectLabel}</InputLabel>
      <Select
        labelId='mui-datatable-select-columns'
        multiple
        value={visibleColumns}
        onChange={event => {
          setVisibleColumns(event.target.value as string[]);
        }}
        label={selectLabel}
        renderValue={selected => renderValue(selected, columnVisibilityChoices)}
      >
        {columns.map((col, index) => (
          <MenuItem key={index} value={col.property}>
            <Checkbox checked={visibleColumns.includes(col.property)} />
            <ListItemText>{renderListItem(col, index)}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
