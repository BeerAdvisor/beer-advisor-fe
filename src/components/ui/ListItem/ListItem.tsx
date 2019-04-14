import React, { MouseEvent } from 'react';
import { Typography } from '@material-ui/core';

import { LabelValue } from '../InfoCard';
import { mapLabelValues } from '../../../utils';
import { DoubleKeyboardArrowRight } from '../../Icons';

import { ListItemValuesWrapper, ListItemDivider, ListItemWrapper, NameContainer } from './style';

interface ListItemProps {
    name: string;
    labelValues: LabelValue[];
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
export default ({name, labelValues, ...other}: ListItemProps) => {
    return (
        <ListItemWrapper>
            <ListItemValuesWrapper {...other}>
                <NameContainer>
                    <Typography variant="subtitle2">{name}</Typography>
                </NameContainer>
                {mapLabelValues(labelValues)}
                <DoubleKeyboardArrowRight />
            </ListItemValuesWrapper>
            <ListItemDivider />
        </ListItemWrapper>
    );
};
