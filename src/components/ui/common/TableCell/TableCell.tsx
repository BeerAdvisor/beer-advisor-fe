import React from 'react';
import MuiTableCell, { TableCellProps as MuiTableCellProps } from '@material-ui/core/TableCell';

import styled, { css } from '../../../../styled-components';

interface TableCellProps extends MuiTableCellProps {
    isActive?: boolean;
}
const DEFAULT_TABLE_CELL_CSS = css`
    max-width: 14rem;
    border: none;
    padding: 0 2rem;
    margin: 0 2rem;
    font-size: 0.78rem;
    line-height: 1rem;
    box-sizing: border-box;
    color: ${props => props.theme.palette.dark};
`;

const TableCell = styled(({ isActive, ...other }: TableCellProps) => (
    <MuiTableCell {...other} />
))`
    ${DEFAULT_TABLE_CELL_CSS}
    ${props => props.isActive && `
        border-bottom: 1px solid ${props.theme.palette.primary.light};
    `}
`;

export const ValueTableCell = styled(MuiTableCell)`
    ${DEFAULT_TABLE_CELL_CSS}
    font-size: 1rem;
    line-height: 1.22rem;
`;

export default TableCell;
