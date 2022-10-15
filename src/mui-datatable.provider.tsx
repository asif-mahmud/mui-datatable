import React, { FC, PropsWithChildren } from 'react';
import { MuiDatatableProviderProps } from './mui-datatable-provider-props.type';
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
          <MuiDatatableSelectColumns />
          <MuiDatatableTable />
        </>
      )}
    </MuiDatatableContext.Provider>
  );
};
