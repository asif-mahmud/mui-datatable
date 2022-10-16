/// <reference types="react" />
import { TextFieldProps } from '@mui/material';
export declare type MuiDatatableSearchProps = Omit<TextFieldProps, 'value' | 'onChange'>;
export declare function MuiDatatableSearch({ InputProps, ...rest }: MuiDatatableSearchProps): JSX.Element;
