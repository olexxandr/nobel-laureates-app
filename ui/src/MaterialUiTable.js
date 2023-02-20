import {
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Flags from 'country-flag-icons/react/3x2';
import React from 'react';

const tableContainerSx: SxProps = {
  border: '1px solid rgba(128,128,128,0.4)',
  width: 'max-content',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 4,
  borderRadius: 2,
  maxHeight: 500,
};

export default function MaterialUiTable({ laureatesCounters }) {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={tableContainerSx}
      >
        <Table stickyHeader={true}>
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
            }}
          >
            {laureatesCounters.map((laureateCounterItem) => {
              const Flag = Flags[laureateCounterItem.code];

              return <TableRow key={laureateCounterItem.code}>
                <TableCell scope='row'>{Flag && <Flag />}</TableCell>
                <TableCell scope='row'>{laureateCounterItem.country}</TableCell>
                <TableCell scope='row'>{laureateCounterItem.counter}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}