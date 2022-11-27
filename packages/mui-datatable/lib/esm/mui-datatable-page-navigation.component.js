import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';
function FirstPageButton() {
    const { firstPage, pageMeta } = useMuiDatatable();
    return (React.createElement(IconButton, { disabled: !pageMeta.hasPrevious, onClick: firstPage },
        React.createElement(KeyboardDoubleArrowLeftRoundedIcon, null)));
}
function PreviousPageButton() {
    const { previousPage, pageMeta } = useMuiDatatable();
    return (React.createElement(IconButton, { disabled: !pageMeta.hasPrevious, onClick: previousPage },
        React.createElement(KeyboardArrowLeftRoundedIcon, null)));
}
function NextPageButton() {
    const { nextPage, pageMeta } = useMuiDatatable();
    return (React.createElement(IconButton, { disabled: !pageMeta.hasNext, onClick: nextPage },
        React.createElement(KeyboardArrowRightRoundedIcon, null)));
}
function LastPageButton() {
    const { lastPage, pageMeta } = useMuiDatatable();
    return (React.createElement(IconButton, { disabled: !pageMeta.hasNext, onClick: lastPage },
        React.createElement(KeyboardDoubleArrowRightRoundedIcon, null)));
}
function PageInfo() {
    const { page, pageMeta } = useMuiDatatable();
    return (React.createElement(Typography, { variant: 'body1' },
        "Showing ",
        page.length,
        " / ",
        pageMeta.total,
        " items"));
}
export function MuiDatatablePageNavigation({ sx, firstPageComponent: FirstPageComponent = FirstPageButton, previousPageComponent: PreviousPageComponent = PreviousPageButton, nextPageComponent: NextPageComponent = NextPageButton, lastPageComponent: LastPageComponent = LastPageButton, pageInfoComponent: PageInfoComponent = PageInfo, }) {
    const { paginationOptions: { disablePagination }, } = useMuiDatatable();
    // no need to render the whole element if pagination is
    // disabled for some reason
    if (disablePagination) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', ...sx } },
        React.createElement(FirstPageComponent, null),
        React.createElement(PreviousPageComponent, null),
        React.createElement(PageInfoComponent, null),
        React.createElement(NextPageComponent, null),
        React.createElement(LastPageComponent, null)));
}
