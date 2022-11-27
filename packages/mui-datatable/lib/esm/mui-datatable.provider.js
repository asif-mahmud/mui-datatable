import React from 'react';
import { MuiDatatablePagination } from './mui-datatable-pagination.component';
import { MuiDatatableSearch } from './mui-datatable-search.component';
import { MuiDatatableSelectColumns } from './mui-datatable-select-columns.component';
import { MuiDatatableTable } from './mui-datatable-table.component';
import { MuiDatatableContext } from './mui-datatable.context';
import { useMuiDatatableProcessor } from './use-mui-datatable-processor.hook';
export const MuiDatatable = ({ children, ...rest }) => {
    const context = useMuiDatatableProcessor(rest);
    return (React.createElement(MuiDatatableContext.Provider, { value: context },
        children && children,
        !children && (React.createElement(React.Fragment, null,
            React.createElement(MuiDatatableSearch, null),
            React.createElement(MuiDatatableSelectColumns, null),
            React.createElement(MuiDatatableTable, null),
            React.createElement(MuiDatatablePagination, null)))));
};
