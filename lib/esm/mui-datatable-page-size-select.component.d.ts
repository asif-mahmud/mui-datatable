import { FormControlProps } from '@mui/material/FormControl';
import { InputLabelProps } from '@mui/material/InputLabel';
import { MenuItemProps } from '@mui/material/MenuItem';
import { SelectProps } from '@mui/material/Select';
import { ReactNode } from 'react';
export declare type MuiDatatablePageSizeSelectProps = {
    formControlProps?: FormControlProps;
    inputLabelProps?: Omit<InputLabelProps, 'id'>;
    label?: ReactNode;
    selectProps?: Omit<SelectProps, 'labelId' | 'value' | 'label' | 'onChange'>;
    menuItemProps?: Omit<MenuItemProps, 'value'>;
    renderMenu?: (size: number) => ReactNode;
};
export declare function MuiDatatablePageSizeSelect({ formControlProps, inputLabelProps, label, selectProps, menuItemProps, renderMenu, }: MuiDatatablePageSizeSelectProps): JSX.Element;
