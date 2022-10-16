import { useContext } from 'react';
import { MuiDatatableAction } from './mui-datatable.action-types';
import { MuiDatatableContext } from './mui-datatable.context';
import { MuiDatatableColumnOptions } from './mui-datatable-column-options.type';

export function useMuiDatatable() {
  const { dispatch, ...rest } = useContext(MuiDatatableContext);

  // wrapper for update columns action
  const updateColumns = (columns: MuiDatatableColumnOptions[]) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.UpdateColumns,
        payload: {
          columns,
        },
      });
    }
  };

  // wrapper for update original data action
  const updateOriginalData = (data: any[]) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.UpdateOriginalData,
        payload: {
          originalData: data,
        },
      });
    }
  };

  // wrapper for update prepared data action
  const updatePreparedData = (data: any[]) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.UpdatePreparedData,
        payload: {
          preparedData: data,
        },
      });
    }
  };

  // wrapper for update data action
  const updateData = (data: any[]) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.UpdateData,
        payload: {
          data,
        },
      });
    }
  };

  // wrapper for set visible columns action
  const setVisibleColumns = (columns: string[]) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.SetVisibleColumns,
        payload: { visibleColumns: columns },
      });
    }
  };

  // wrapper for updating loading state
  const setLoading = (loading: boolean) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.SetLoading,
        payload: {
          loading,
        },
      });
    }
  };

  // wrapper for setting search term
  const setSearchTerm = (searchTerm: string) => {
    if (dispatch) {
      dispatch({
        action: MuiDatatableAction.SetSearchTerm,
        payload: {
          searchTerm,
        },
      });
    }
  };

  return {
    ...rest,
    updateColumns,
    updateOriginalData,
    updatePreparedData,
    updateData,
    setVisibleColumns,
    setLoading,
    setSearchTerm,
  };
}
