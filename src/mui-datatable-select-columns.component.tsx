import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import useMuiDatatable from './use-mui-datatable.hook';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

export default function MuiDatatableSelectColumns() {
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

  return (
    <FormControl sx={{ minWidth: '12rem' }}>
      <InputLabel id='mui-datatable-select-columns'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <VisibilityOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant='body1'>Columns</Typography>
        </Box>
      </InputLabel>
      <Select
        labelId='mui-datatable-select-columns'
        multiple
        value={visibleColumns}
        onChange={event => {
          setVisibleColumns(event.target.value as string[]);
        }}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <VisibilityOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant='body1'>Columns</Typography>
          </Box>
        }
        renderValue={selected => {
          return selected.length === 0
            ? ''
            : selected.length === 1
            ? 'Showing 1 column'
            : selected.length === columnVisibilityChoices.length
            ? 'Showing all columns'
            : `Showing ${selected.length} columns`;
        }}
      >
        {columns.map((col, index) => (
          <MenuItem key={index} value={col.property}>
            <Checkbox checked={visibleColumns.includes(col.property)} />
            <ListItemText>
              {col.renderHeader && col.renderHeader}
              {!col.renderHeader && (col.header || `Column #${index}`)}
            </ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
