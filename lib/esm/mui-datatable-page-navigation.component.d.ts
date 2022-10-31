import { SxProps } from '@mui/material/styles';
import { ElementType } from 'react';
export declare type MuiDatatablePageNavigationProps = {
    sx?: SxProps;
    firstPageComponent?: ElementType;
    previousPageComponent?: ElementType;
    nextPageComponent?: ElementType;
    lastPageComponent?: ElementType;
    pageInfoComponent?: ElementType;
};
export declare function MuiDatatablePageNavigation({ sx, firstPageComponent: FirstPageComponent, previousPageComponent: PreviousPageComponent, nextPageComponent: NextPageComponent, lastPageComponent: LastPageComponent, pageInfoComponent: PageInfoComponent, }: MuiDatatablePageNavigationProps): JSX.Element;
