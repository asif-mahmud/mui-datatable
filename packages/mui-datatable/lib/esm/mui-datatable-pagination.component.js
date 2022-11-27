import TablePagination from '@mui/material/TablePagination';
import React from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
export function MuiDatatablePagination({ showFirstButton = true, showLastButton = true, ...rest }) {
    const { data, pageMeta: { pageSize, cursor }, paginationOptions: { defaultPageSize, pageSizes, disablePagination }, setPage, setPageSize, } = useMuiDatatable();
    if (disablePagination) {
        return React.createElement(React.Fragment, null, " ");
    }
    return (React.createElement(TablePagination, { count: data.length, component: 'div', page: (cursor || 0) / (pageSize || 1), onPageChange: (_, page) => setPage(page), rowsPerPage: pageSize || defaultPageSize || 0, rowsPerPageOptions: pageSizes, onRowsPerPageChange: e => setPageSize(Number(e.target.value)), showFirstButton: showFirstButton, showLastButton: showLastButton, ...rest }));
}
