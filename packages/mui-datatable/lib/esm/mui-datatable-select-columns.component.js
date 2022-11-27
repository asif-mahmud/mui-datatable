import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import React, { useId } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
function defaultRenderValue(selected, choices) {
    const hasUnselectedChoices = choices.filter(choice => !selected.includes(choice)).length > 0;
    return selected.length === 0
        ? ''
        : selected.length === 1
            ? 'Showing 1 column'
            : !hasUnselectedChoices
                ? 'Showing all columns'
                : `Showing ${selected.length} columns`;
}
function defaultRenderListItem(column, index) {
    return (React.createElement(React.Fragment, null,
        column.renderHeader && column.renderHeader,
        !column.renderHeader && (column.header || `Column #${index}`)));
}
export function MuiDatatableSelectColumns({ hideIcon, icon = React.createElement(VisibilityOutlinedIcon, null), label = (React.createElement(Typography, { variant: 'body1', sx: { ml: 1 } }, "Columns")), renderValue = defaultRenderValue, renderListItem = defaultRenderListItem, formControlProps: { sx: formControlSx, ...formControlRest } = {}, inputLabelProps, selectFieldProps, menuItemProps, }) {
    const { columnVisibilityChoices, visibleColumns, columns: columnsConfig, setVisibleColumns, } = useMuiDatatable();
    // remove columns that are to be visible always
    const columns = columnsConfig.filter(col => columnVisibilityChoices.includes(col.property));
    // field's label component
    const selectLabel = (React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
        !hideIcon && icon,
        label));
    // select field's label id
    const labelId = useId();
    return (React.createElement(FormControl, { sx: { minWidth: '12rem', ...formControlSx }, ...formControlRest },
        React.createElement(InputLabel, { id: labelId, ...inputLabelProps }, selectLabel),
        React.createElement(Select, { ...selectFieldProps, labelId: labelId, label: selectLabel, multiple: true, value: visibleColumns, onChange: event => {
                setVisibleColumns(event.target.value);
            }, renderValue: selected => renderValue(selected, columnVisibilityChoices) }, columns.map((col, index) => (React.createElement(MenuItem, { key: index, value: col.property, ...menuItemProps },
            React.createElement(Checkbox, { checked: visibleColumns.includes(col.property) }),
            React.createElement(ListItemText, null, renderListItem(col, index))))))));
}
