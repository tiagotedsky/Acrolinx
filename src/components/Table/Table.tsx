import { Box, TableFooter, TablePagination } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import BaseTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { FilterList } from '../../App.types';
import { formatDate } from '../../helpers/formatDate';
import { InvoiceDTO } from '../../mock/data';
import { useTable } from './useTable';

interface TableProps {
  data: InvoiceDTO[];
  filters: FilterList;
}

export const Table: React.FC<TableProps> = ({ data, filters }) => {
  const { pages, currentPage, setCurrentPage } = useTable(data, filters);

  return (
    <Box>
      <TableContainer component={Paper}>
        <BaseTable aria-label="Invoice Table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(pages[currentPage] || []).map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right"> {row.id}</TableCell>
                <TableCell>{row.orderStatus}</TableCell>
                <TableCell>
                  {row.companyName}, {row.juristicForm}
                </TableCell>
                <TableCell>{row.serviceType}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{formatDate(row.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {pages.length > 1 && (
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length - 1}
                  rowsPerPageOptions={[]}
                  rowsPerPage={10}
                  page={currentPage}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={(_, pageNumber) => setCurrentPage(pageNumber)}
                />
              </TableRow>
            </TableFooter>
          )}
        </BaseTable>
      </TableContainer>
    </Box>
  );
};
