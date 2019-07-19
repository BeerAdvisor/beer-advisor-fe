import React from 'react';
import { TableRow as MuiTableRow, TableCell } from '@material-ui/core';

import { TableSortLabel } from '../TableSortLabel';

export interface Row {
    id: string;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}
export interface TableRowProps {
    rows: Row[];
}
const TableRow = ({ rows, ...other }: TableRowProps) => (
    <MuiTableRow>
    {rows.map(({ id, onClick, isActive, label }) => (
      <TableCell
        key={id}
        align={'left'}
        padding={'none'}
        sortDirection={'desc'}
      >
        <TableSortLabel
          active={isActive}
          hideSortIcon={true}
          direction={isActive ? 'asc' : 'asc'}
          onClick={onClick}
        >
          {label}
        </TableSortLabel>
      </TableCell>
    ))}
  </MuiTableRow>
);

export default TableRow;
