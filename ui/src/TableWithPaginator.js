import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Paper, SxProps, TableHead } from '@mui/material';
import Flags from 'country-flag-icons/react/3x2';

const tableContainerSx: SxProps = {
  border: '1px solid rgba(128,128,128,0.4)',
  width: 'max-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 500,
};

export default function TableWithPaginator({ laureatesCounters }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [data, setData] = React.useState(laureatesCounters);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.ChangeEvent<HTMLInputElement>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}
                      sx={tableContainerSx}>
        <Table sx={{ minWidth: 500 }} aria-label='custom pagination table' stickyHeader={true}>
          <TableHead sx={{ '& .MuiTableCell-stickyHeader': { backgroundColor: 'primary.main' } }}>
            <TableRow>
              <TableCell scope='header'>Flag</TableCell>
              <TableCell scope='header'>Country</TableCell>
              <TableCell scope='header'>Number of laureates</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '& tr:nth-of-type(2n+1)': {
                backgroundColor: 'grey.100',
              },
            }}>
            {(rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
            ).map((row) => {
              const Flag = Flags[row.code];

              return <TableRow key={row.code}>
                <TableCell scope='row'>{Flag && <Flag />}</TableCell>
                <TableCell scope='row'>{row.country}</TableCell>
                <TableCell scope='row'>{row.counter}</TableCell>
              </TableRow>;
            })}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelDisplayedRows={({ page }) => {
                  return `Page: ${page}`;
                }}
                backIconButtonProps={{
                  color: 'secondary',
                }}
                nextIconButtonProps={{ color: 'secondary' }}
                showFirstButton={true}
                showLastButton={true}
                labelRowsPerPage={<span>Rows:</span>}
                sx={{
                  '.MuiTablePagination-toolbar': {
                    backgroundColor: 'rgba(100,100,100,0.5)',
                  },
                  '.MuiTablePagination-selectLabel, .MuiTablePagination-input': {
                    fontWeight: 'bold',
                    color: 'blue',
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

