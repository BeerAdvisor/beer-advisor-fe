import React, { ReactNode, ChangeEvent } from 'react';
import { TableRow as MuiTableRow } from '@material-ui/core';

import { TableCell } from '../../common/TableCell';
import { TableSortLabel } from '../../common/TableSortLabel';
import { SearchInput } from '../../common/SearchInput';
import { CompareArrows } from '../../../Icons/CompareArrows';

export interface Cell {
    id: string | number;
    label?: string;
    onClick?: () => void;
    isActive?: boolean;
}
export interface TableRowProps {
    onValueSearch: (searchValue: string) => void;
    cells: Cell[];
}
const ExpandedCardTableHead = ({ cells, onValueSearch, ...other }: TableRowProps) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onValueSearch(e.target.value);
    const cellWidth = 100 / (cells.length + 1);

    return (
        <MuiTableRow style={{ marginBottom: '1rem' }} {...other}>
            <TableCell align="left" style={{ width: `${cellWidth}%` }}>
                <SearchInput onChange={handleOnChange} />
            </TableCell>
            {cells.map(({ id, onClick, isActive, label }) => (
                <TableCell 
                    style={{ width: `${cellWidth}%` }}
                    isActive={isActive}
                    onClick={onClick}
                    key={id}
                    align="left"
                    sortDirection={'desc'}
                >
                    {label && (
                        <TableSortLabel isActive={isActive} onClick={onClick}>
                            {label}
                            <CompareArrows />
                        </TableSortLabel>
                    )}
                </TableCell>
            ))}
        </MuiTableRow>
    );
};

export default ExpandedCardTableHead;
