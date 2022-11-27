/// <reference types="react" />
import { TablePaginationProps } from '@mui/material/TablePagination';
export type MuiDatatablePaginationProps = Omit<TablePaginationProps<'div'>, 'count' | 'page' | 'component' | 'onPageChange' | 'rowsPerPage' | 'rowsPerPageOptions' | 'onRowsPerPageChange'>;
export declare function MuiDatatablePagination({ showFirstButton, showLastButton, ...rest }: MuiDatatablePaginationProps): JSX.Element;
