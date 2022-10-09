import React, { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import MuiDatatableSelectColumns from './mui-datatable-select-columns.component';
import MuiDatatableTable from './mui-datatable-table.component';
import MuiDatatableAction from './mui-datatable.action-types';
import MuiDatatableContext from './mui-datatable.context';
import MuiDatatableReducer, {
  MuiDatatableColumnOptions,
  MuiDatatableInitialValue,
} from './mui-datatable.reducer';

export type MuiDatatableProviderProps = {
  columns: MuiDatatableColumnOptions[];
  data: Object[];
};

const MuiDatatable: FC<PropsWithChildren<MuiDatatableProviderProps>> = ({
  columns,
  data,
  children,
}) => {
  const [state, dispatch] = useReducer(
    MuiDatatableReducer,
    MuiDatatableInitialValue
  );

  // set state's columns from the property value
  // we want to select the columns to be shown in the
  // show/hide column menu
  // we also want to reset/set the visible columns here
  useEffect(() => {
    dispatch({
      action: MuiDatatableAction.UpdateColumns,
      payload: {
        columns,
      },
    });
  }, [columns]);

  // set original data from the property value
  useEffect(() => {
    dispatch({
      action: MuiDatatableAction.UpdateOriginalData,
      payload: { originalData: data },
    });
  }, [data]);

  // set column visibility choices
  useEffect(() => {
    const columnVisibilityChoices = columns
      .filter(col => !col.alwaysShow)
      .map(col => col.property);
    const visibleColumns = columns
      .filter(col => !col.alwaysShow && !col.hide)
      .map(col => col.property);
    dispatch({
      action: MuiDatatableAction.UpdateColumnVisiblityChoices,
      payload: {
        columnVisibilityChoices,
        visibleColumns,
      },
    });
  }, [state.columns]);

  // set the prepared data based on state's original data
  // and columns
  useEffect(() => {
    // empty prepared data for empty data set or empty settings for
    // columns
    if (state.originalData.length === 0 || state.columns.length === 0) {
      dispatch({
        action: MuiDatatableAction.UpdatePreparedData,
        payload: { preparedData: [] },
      });
      return;
    }

    // filter out only the used properties in the table
    // configured by the column settings
    const preparedData = state.originalData.map(data => {
      return state.columns.reduce((prev, column) => {
        let value: unknown = undefined;
        // if property exists collect it directly
        if (column.property in data) {
          value = data[column.property];
        } else if (column.valueGetter) {
          value = column.valueGetter(column.property, data);
        } else {
          return {
            ...prev,
            [column.property]: undefined,
          };
        }

        // if it needs to be transformed, transform it
        if (column.transformValue) {
          value = column.transformValue(value, data);
        }

        // update the prepared data point
        return {
          ...prev,
          [column.property]: value,
        };
      }, {});
    });

    // update the prepared data in the state
    dispatch({
      action: MuiDatatableAction.UpdatePreparedData,
      payload: {
        preparedData,
      },
    });
  }, [state.originalData, state.columns]);

  // set the data to be shown in the table
  useEffect(() => {
    // TODO: we should probably apply search, sort, filter operations
    // here as well
    dispatch({
      action: MuiDatatableAction.UpdateData,
      payload: {
        data: state.preparedData,
      },
    });
  }, [state.preparedData]);

  return (
    <MuiDatatableContext.Provider value={{ ...state, dispatch }}>
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

export default MuiDatatable;
