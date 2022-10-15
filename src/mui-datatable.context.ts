import { createContext, Dispatch } from 'react';
import {
  MuiDatatableInitialValue,
  MuiDatatableReducerAction,
  MuiDatatableReducerState,
} from './mui-datatable.reducer';

export type MuiDatatableContextType = MuiDatatableReducerState & {
  dispatch?: Dispatch<MuiDatatableReducerAction>;
};

export const MuiDatatableContext = createContext<MuiDatatableContextType>(
  MuiDatatableInitialValue
);
