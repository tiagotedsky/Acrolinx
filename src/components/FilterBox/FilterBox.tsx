import { Box, Checkbox } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import BaseTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Dispatch, SetStateAction } from 'react';
import { FilterList } from '../../App.types';
import { InvoiceDTO } from '../../mock/data';
import { useFilterBox } from './useFilterBox';

interface FilterBoxProps {
  data: InvoiceDTO[];
  setFilters: Dispatch<SetStateAction<FilterList>>;
  filters: FilterList;
}

export const FilterBox: React.FC<FilterBoxProps> = ({
  data,
  setFilters,
  filters,
}) => {
  const distinctOccurrences = useFilterBox(data);

  return (
    <Box mb={8}>
      <TableContainer component={Paper}>
        <BaseTable aria-label="Filter box" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Count</TableCell>
              <TableCell>Distinct Value</TableCell>
              <TableCell>Filter Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(distinctOccurrences).map(
              ([filterKey, distinctData]) => {
                const distinctCount = Object.values(distinctData)[0];
                const distinctLabel = Object.keys(distinctData)[0];

                return (
                  <TableRow key={filterKey}>
                    <TableCell>{distinctCount}</TableCell>
                    <TableCell>{distinctLabel}</TableCell>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={!!filters[filterKey]}
                        onChange={() => {
                          // Remove filter
                          if (filters[filterKey]?.value) {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { [filterKey]: omit, ...rest } = filters;

                            setFilters(rest);
                          } else {
                            // Add filter
                            setFilters({
                              ...filters,
                              [filterKey]: {
                                value: distinctLabel,
                              },
                            });
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </BaseTable>
      </TableContainer>
    </Box>
  );
};
