import { createContext, Dispatch } from 'react';
import {
  MuiDatatableInitialValue,
  MuiDatatableReducerAction,
  MuiDatatableReducerState,
} from './mui-datatable.reducer';

export type MuiDatatableContextType = MuiDatatableReducerState & {
  dispatch?: Dispatch<MuiDatatableReducerAction>;
};

const MuiDatatableContext = createContext<MuiDatatableContextType>(
  MuiDatatableInitialValue
);

export default MuiDatatableContext;
