import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { SxProps } from '@mui/material/styles';
import React, { ElementType } from 'react';
import { useMuiDatatable } from './use-mui-datatable.hook';

export type MuiDatatablePageNavigationProps = {
  sx?: SxProps;
  firstPageComponent?: ElementType;
  previousPageComponent?: ElementType;
  nextPageComponent?: ElementType;
  lastPageComponent?: ElementType;
  pageInfoComponent?: ElementType;
};

function FirstPageButton() {
  const { firstPage, pageMeta } = useMuiDatatable();

  return (
    <IconButton disabled={!pageMeta.hasPrevious} onClick={firstPage}>
      <KeyboardDoubleArrowLeftRoundedIcon />
    </IconButton>
  );
}

function PreviousPageButton() {
  const { previousPage, pageMeta } = useMuiDatatable();

  return (
    <IconButton disabled={!pageMeta.hasPrevious} onClick={previousPage}>
      <KeyboardArrowLeftRoundedIcon />
    </IconButton>
  );
}

function NextPageButton() {
  const { nextPage, pageMeta } = useMuiDatatable();

  return (
    <IconButton disabled={!pageMeta.hasNext} onClick={nextPage}>
      <KeyboardArrowRightRoundedIcon />
    </IconButton>
  );
}

function LastPageButton() {
  const { lastPage, pageMeta } = useMuiDatatable();

  return (
    <IconButton disabled={!pageMeta.hasNext} onClick={lastPage}>
      <KeyboardDoubleArrowRightRoundedIcon />
    </IconButton>
  );
}

function PageInfo() {
  const { page, pageMeta } = useMuiDatatable();

  return (
    <Typography variant='body1'>
      Showing {page.length} / {pageMeta.total} items
    </Typography>
  );
}

export function MuiDatatablePageNavigation({
  sx,
  firstPageComponent: FirstPageComponent = FirstPageButton,
  previousPageComponent: PreviousPageComponent = PreviousPageButton,
  nextPageComponent: NextPageComponent = NextPageButton,
  lastPageComponent: LastPageComponent = LastPageButton,
  pageInfoComponent: PageInfoComponent = PageInfo,
}: MuiDatatablePageNavigationProps) {
  const {
    paginationOptions: { disablePagination },
  } = useMuiDatatable();

  // no need to render the whole element if pagination is
  // disabled for some reason
  if (disablePagination) {
    return <></>;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <FirstPageComponent />
      <PreviousPageComponent />

      <PageInfoComponent />

      <NextPageComponent />
      <LastPageComponent />
    </Box>
  );
}
