import {
  MuiDatatableRow,
  MuiDatatable,
  MuiDatatableColumnOptions,
} from 'mui-datatable';
import { Container } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';

const columns: MuiDatatableColumnOptions[] = [
  {
    property: 'id',
    header: 'ID',
    headerCellProps: {
      align: 'center',
    },
    renderCell: (value: number) => <b>{value}</b>,
    valueCellProps: {
      align: 'center',
    },
    hideFromColumnSelection: true,
    disableSearch: true,
  },
  {
    property: 'name',
    header: 'Name',
  },
  {
    property: 'birthday',
    header: 'Birthday',
    transformValue: (value: string) => new Date(value).toDateString(),
  },
  {
    property: 'age',
    renderHeader: <i>Age</i>,
    valueGetter: (_, row) => {
      return moment.duration(moment().diff(moment(row.birthday))).humanize();
    },
    hideFromTable: true,
  },
];

const data = [
  {
    id: 1,
    name: 'Shimon',
    birthday: '1991-03-28T18:00:00.000Z',
  },
  {
    id: 2,
    name: 'Taki',
    birthday: '1994-06-20T18:00:00.000Z',
  },
  {
    id: 3,
    name: 'Rasel',
    birthday: '1996-01-01T18:00:00.000Z',
  },
];

function App() {
  const [values, setValues] = useState<MuiDatatableRow[] | null>(null);

  // showcasing asynchronous data
  useEffect(() => {
    const cb = setTimeout(() => {
      setValues(data);
    }, 2000);
    return () => {
      clearTimeout(cb);
    };
  }, []);

  return (
    <Container>
      <MuiDatatable
        columns={columns}
        data={values || []}
        loading={!values}
        defaultPageSize={2}
        pageSizes={[2, 5, 10, 15]}
      ></MuiDatatable>
    </Container>
  );
}

export default App;
