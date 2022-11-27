"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiDatatablePageNavigation = void 0;
const KeyboardArrowLeftRounded_1 = __importDefault(require("@mui/icons-material/KeyboardArrowLeftRounded"));
const KeyboardArrowRightRounded_1 = __importDefault(require("@mui/icons-material/KeyboardArrowRightRounded"));
const KeyboardDoubleArrowLeftRounded_1 = __importDefault(require("@mui/icons-material/KeyboardDoubleArrowLeftRounded"));
const KeyboardDoubleArrowRightRounded_1 = __importDefault(require("@mui/icons-material/KeyboardDoubleArrowRightRounded"));
const material_1 = require("@mui/material");
const Box_1 = __importDefault(require("@mui/material/Box"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const react_1 = __importDefault(require("react"));
const use_mui_datatable_hook_1 = require("./use-mui-datatable.hook");
function FirstPageButton() {
    const { firstPage, pageMeta } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    return (react_1.default.createElement(IconButton_1.default, { disabled: !pageMeta.hasPrevious, onClick: firstPage },
        react_1.default.createElement(KeyboardDoubleArrowLeftRounded_1.default, null)));
}
function PreviousPageButton() {
    const { previousPage, pageMeta } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    return (react_1.default.createElement(IconButton_1.default, { disabled: !pageMeta.hasPrevious, onClick: previousPage },
        react_1.default.createElement(KeyboardArrowLeftRounded_1.default, null)));
}
function NextPageButton() {
    const { nextPage, pageMeta } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    return (react_1.default.createElement(IconButton_1.default, { disabled: !pageMeta.hasNext, onClick: nextPage },
        react_1.default.createElement(KeyboardArrowRightRounded_1.default, null)));
}
function LastPageButton() {
    const { lastPage, pageMeta } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    return (react_1.default.createElement(IconButton_1.default, { disabled: !pageMeta.hasNext, onClick: lastPage },
        react_1.default.createElement(KeyboardDoubleArrowRightRounded_1.default, null)));
}
function PageInfo() {
    const { page, pageMeta } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    return (react_1.default.createElement(material_1.Typography, { variant: 'body1' },
        "Showing ",
        page.length,
        " / ",
        pageMeta.total,
        " items"));
}
function MuiDatatablePageNavigation({ sx, firstPageComponent: FirstPageComponent = FirstPageButton, previousPageComponent: PreviousPageComponent = PreviousPageButton, nextPageComponent: NextPageComponent = NextPageButton, lastPageComponent: LastPageComponent = LastPageButton, pageInfoComponent: PageInfoComponent = PageInfo, }) {
    const { paginationOptions: { disablePagination }, } = (0, use_mui_datatable_hook_1.useMuiDatatable)();
    // no need to render the whole element if pagination is
    // disabled for some reason
    if (disablePagination) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(Box_1.default, { sx: { display: 'flex', alignItems: 'center', ...sx } },
        react_1.default.createElement(FirstPageComponent, null),
        react_1.default.createElement(PreviousPageComponent, null),
        react_1.default.createElement(PageInfoComponent, null),
        react_1.default.createElement(NextPageComponent, null),
        react_1.default.createElement(LastPageComponent, null)));
}
exports.MuiDatatablePageNavigation = MuiDatatablePageNavigation;
