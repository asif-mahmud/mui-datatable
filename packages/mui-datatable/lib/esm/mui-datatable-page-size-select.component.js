import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useId } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
const defaultPageSizeSelectLabel = 'Items per page';
function defaultRenderMenu(size) {
    return size;
}
export function MuiDatatablePageSizeSelect({ formControlProps, inputLabelProps, label = defaultPageSizeSelectLabel, selectProps, menuItemProps, renderMenu = defaultRenderMenu, }) {
    const { setPageSize, pageMeta, paginationOptions: { pageSizes, defaultPageSize, disablePagination }, } = useMuiDatatable();
    const id = useId();
    const { sx: formControlSx = { minWidth: 150 }, ...formControlRest } = formControlProps || {};
    // no need to render the whole element if pagination
    // is disabled for some reason
    if (disablePagination) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(FormControl, { sx: formControlSx, ...formControlRest },
        React.createElement(InputLabel, { id: id, ...inputLabelProps }, label),
        React.createElement(Select, { labelId: id, value: pageMeta.pageSize || defaultPageSize, label: label, onChange: event => setPageSize(event.target.value), ...selectProps }, pageSizes?.map((size, index) => (React.createElement(MenuItem, { key: index, value: size, ...menuItemProps }, renderMenu(size)))))));
}
