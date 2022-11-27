import { FormControlProps } from '@mui/material/FormControl';
import { InputLabelProps } from '@mui/material/InputLabel';
import { MenuItemProps } from '@mui/material/MenuItem';
import { SelectProps } from '@mui/material/Select';
import { ReactNode } from 'react';
import { MuiDatatableColumnOptions } from './mui-datatable-column-options.type';
export type MuiDatatableSelectColumnsProps = {
    hideIcon?: boolean;
    icon?: ReactNode;
    label?: ReactNode;
    renderValue?: (selected: string[], choices: string[]) => ReactNode;
    renderListItem?: (column: MuiDatatableColumnOptions, index: number) => ReactNode;
    formControlProps?: FormControlProps;
    inputLabelProps?: Omit<InputLabelProps, 'id'>;
    selectFieldProps?: Partial<Omit<SelectProps<string[]>, 'labelId' | 'multiple' | 'value' | 'onChange' | 'label' | 'renderValue'>>;
    menuItemProps?: Omit<MenuItemProps, 'key' | 'value'>;
};
export declare function MuiDatatableSelectColumns({ hideIcon, icon, label, renderValue, renderListItem, formControlProps: { sx: formControlSx, ...formControlRest }, inputLabelProps, selectFieldProps, menuItemProps, }: MuiDatatableSelectColumnsProps): JSX.Element;
