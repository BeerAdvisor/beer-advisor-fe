import React from 'react';
import { TableRow as MuiTableRow } from '@material-ui/core';

import { ValueTableCell } from '../../common/TableCell';
import { UnitedLavelValue, isBarLabelValue } from '../../../../@types';

export interface TableRowProps {
    values: UnitedLavelValue;
    id: string;
    name: string;
}
const ExpandedCardTableRow = ({ values, id, name, ...other }: TableRowProps) => {
    const { rating, price } = values;

    let distance;
    if (isBarLabelValue(values)) {
        ({ distance } = values );
    }

    return (
        <MuiTableRow {...other}>
            <ValueTableCell key={`${id}${name}`} align={'left'}>
                {name}
            </ValueTableCell>
            <ValueTableCell key={`${id}${rating}`} align={'left'}>
                {rating}
            </ValueTableCell>
            <ValueTableCell key={`${id}${price}`} align={'left'}>
                {price}
            </ValueTableCell>
            {distance && <ValueTableCell key={`${id}${distance}`} align={'left'}>
                {distance}
            </ValueTableCell>}
        </MuiTableRow>
    );
};

export default ExpandedCardTableRow;
