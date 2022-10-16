import { useEffect, useReducer } from 'react';
import { MuiDatatableProviderProps } from './mui-datatable-provider-props.type';
import { MuiDatatableAction } from './mui-datatable.action-types';
import { MuiDatatableContextType } from './mui-datatable.context';
import {
  MuiDatatableInitialValue,
  MuiDatatableReducer,
} from './mui-datatable.reducer';

function defaultSearchFunction(searchTerm: string, value: any): boolean {
  return `${value}`.toLowerCase().search(searchTerm) >= 0;
}

export function useMuiDatatableProcessor({
  columns,
  data,
  loading,
}: MuiDatatableProviderProps): MuiDatatableContextType {
  // datatable state
  const [state, dispatch] = useReducer(
    MuiDatatableReducer,
    MuiDatatableInitialValue
  );

  // set loading state
  useEffect(() => {
    dispatch({
      action: MuiDatatableAction.SetLoading,
      payload: { loading: !!loading },
    });
  }, [loading]);

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

  // set column visibility choices,
  // collect names of searchable columns
  useEffect(() => {
    const columnVisibilityChoices = columns
      .filter(col => !col.hideFromColumnSelection)
      .map(col => col.property);
    const visibleColumns = columns
      .filter(col => !col.hideFromTable)
      .map(col => col.property);
    const searchableColumns = columns
      .filter(col => col.search)
      .map(col => col.property);
    dispatch({
      action: MuiDatatableAction.UpdateColumnMeta,
      payload: {
        columnVisibilityChoices,
        visibleColumns,
        searchableColumns,
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
    // apply search
    const data = state.preparedData.filter((prepared, index) => {
      // no need to apply search if not needed
      if (!state.searchTerm || state.searchableColumns.length === 0) {
        return true;
      }

      // choose the proper search function
      const searchFn = state.columns[index].searchFn || defaultSearchFunction;

      // only apply search if search term is non-empty and
      // there are columns to search into
      let foundInSearch = false;
      for (const searchKey of state.searchableColumns) {
        if (searchFn(state.searchTerm, prepared[searchKey])) {
          foundInSearch = true;
          break;
        }
      }

      return foundInSearch;
    });

    // TODO: we should probably apply search, sort, filter operations
    // here as well
    dispatch({
      action: MuiDatatableAction.UpdateData,
      payload: {
        data,
      },
    });
  }, [state.preparedData, state.searchTerm, state.searchableColumns]);

  return { ...state, dispatch };
}
