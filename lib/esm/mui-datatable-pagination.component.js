var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _a = useMuiDatatable(), firstPage = _a.firstPage, pageMeta = _a.pageMeta;
    return (React.createElement(IconButton, { disabled: !pageMeta.hasPrevious, onClick: firstPage },
        React.createElement(KeyboardDoubleArrowLeftRoundedIcon, null)));
}
function PreviousPageButton() {
    var _a = useMuiDatatable(), previousPage = _a.previousPage, pageMeta = _a.pageMeta;
    return (React.createElement(IconButton, { disabled: !pageMeta.hasPrevious, onClick: previousPage },
        React.createElement(KeyboardArrowLeftRoundedIcon, null)));
}
function NextPageButton() {
    var _a = useMuiDatatable(), nextPage = _a.nextPage, pageMeta = _a.pageMeta;
    return (React.createElement(IconButton, { disabled: !pageMeta.hasNext, onClick: nextPage },
        React.createElement(KeyboardArrowRightRoundedIcon, null)));
}
function LastPageButton() {
    var _a = useMuiDatatable(), lastPage = _a.lastPage, pageMeta = _a.pageMeta;
    return (React.createElement(IconButton, { disabled: !pageMeta.hasNext, onClick: lastPage },
        React.createElement(KeyboardDoubleArrowRightRoundedIcon, null)));
}
function PageInfo() {
    var _a = useMuiDatatable(), page = _a.page, pageMeta = _a.pageMeta;
    return (React.createElement(Typography, { variant: 'body1' },
        "Showing ",
        page.length,
        " / ",
        pageMeta.total,
        " items"));
}
export function MuiDatatablePageNavigation(_a) {
    var sx = _a.sx, _b = _a.firstPageComponent, FirstPageComponent = _b === void 0 ? FirstPageButton : _b, _c = _a.previousPageComponent, PreviousPageComponent = _c === void 0 ? PreviousPageButton : _c, _d = _a.nextPageComponent, NextPageComponent = _d === void 0 ? NextPageButton : _d, _e = _a.lastPageComponent, LastPageComponent = _e === void 0 ? LastPageButton : _e, _f = _a.pageInfoComponent, PageInfoComponent = _f === void 0 ? PageInfo : _f;
    return (React.createElement(Box, { sx: __assign({ display: 'flex', alignItems: 'center' }, sx) },
        React.createElement(FirstPageComponent, null),
        React.createElement(PreviousPageComponent, null),
        React.createElement(PageInfoComponent, null),
        React.createElement(NextPageComponent, null),
        React.createElement(LastPageComponent, null)));
}
