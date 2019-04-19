import React, { MouseEvent } from 'react';
import { map } from 'ramda';
import { Typography } from '@material-ui/core';

import { LabelValue, LabelValueContainer } from '../../../utils';
import { DoubleKeyboardArrowRight } from '../../Icons';

import { ListItemValuesWrapper, ListItemDivider, ListItemWrapper, NameContainer } from './style';

interface ListItemProps {
    name: string;
    labelValues: LabelValue[];
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
export const ListItem = ({ name, labelValues, ...other }: ListItemProps) => {
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

export default ListItem;

let labelsIndex = 0;
// TODO: I don't like this mapping, should be to array.
export const mapLabelValues = ({ rating, price, distance }: any) => (
        <>
            <LabelValueContainer key={`${rating}${labelsIndex++}`}>
                {'Rating'}:{rating}
            </LabelValueContainer>
            <LabelValueContainer key={`${price}${labelsIndex++}`}>
                {'Price'}:{price}
            </LabelValueContainer>
            <LabelValueContainer key={`${distance}${labelsIndex++}`}>
                {'Distance'}:{distance}
            </LabelValueContainer>
        </>
);
