import React, { ReactNode } from 'react';
import { TableRow as MuiTableRow } from '@material-ui/core';
import { map } from 'ramda';

import { ValueTableCell } from '../../common/TableCell';

export interface TableRowProps {
    values: TableRowValues[];
    id: string | number;
    name: string;
    link: ReactNode;
}
export interface TableRowValues {
    [key: string]: string;
}
const ExpandedCardTableRow = ({ values, id, name, link, ...other }: TableRowProps) => (
        <MuiTableRow {...other}>
            <ValueTableCell key={`${id}${name}`} align={'left'}>
                {link}
            </ValueTableCell>
            {map(value => (
                <ValueTableCell key={`${id}${value}`} align={'left'}>
                    {value}
                </ValueTableCell>
            ), values)}
        </MuiTableRow>
    );

export default ExpandedCardTableRow;
