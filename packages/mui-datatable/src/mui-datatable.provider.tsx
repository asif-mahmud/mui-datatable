import React, { FC, PropsWithChildren } from 'react';
import { MuiDatatablePagination } from './mui-datatable-pagination.component';
import { MuiDatatableProviderProps } from './mui-datatable-provider-props.type';
import { MuiDatatableSearch } from './mui-datatable-search.component';
import { MuiDatatableSelectColumns } from './mui-datatable-select-columns.component';
import { MuiDatatableTable } from './mui-datatable-table.component';
import { MuiDatatableContext } from './mui-datatable.context';
import { useMuiDatatableProcessor } from './use-mui-datatable-processor.hook';

export const MuiDatatable: FC<PropsWithChildren<MuiDatatableProviderProps>> = ({
  children,
  ...rest
}) => {
  const context = useMuiDatatableProcessor(rest);

  return (
    <MuiDatatableContext.Provider value={context}>
      {children && children}
      {!children && (
        <>
          <MuiDatatableSearch />
          <MuiDatatableSelectColumns />
          <MuiDatatableTable />
          <MuiDatatablePagination />
        </>
      )}
    </MuiDatatableContext.Provider>
  );
};
