import { ReactNode } from 'react';
import { MuiDatatableColumnOptions } from './mui-datatable.reducer';
export declare type MuiDatatableSelectColumnsProps = {
    showIcon?: boolean;
    icon?: ReactNode;
    label?: ReactNode;
    renderValue?: (selected: string[], choices: string[]) => ReactNode;
    renderListItem?: (column: MuiDatatableColumnOptions, index: number) => ReactNode;
};
export default function MuiDatatableSelectColumns({ showIcon, icon, label, renderValue, renderListItem, }: MuiDatatableSelectColumnsProps): JSX.Element;
