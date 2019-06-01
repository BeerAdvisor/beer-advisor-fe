import React, { MouseEvent } from 'react';
import { Typography } from '@material-ui/core';

import { LabelValue, LabelValueContainer, useMobileDevice } from '../../../utils';
import { DoubleKeyboardArrowRight } from '../../Icons';
import styled from '../../../styled-components';

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
                {!useMobileDevice() && <DoubleKeyboardArrowRight />}
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
            <AdditionalMarginLabelValueContainer key={`${rating}${labelsIndex++}`}>
                {rating}
            </AdditionalMarginLabelValueContainer>
            <AdditionalMarginLabelValueContainer key={`${price}${labelsIndex++}`}>
                {price}
            </AdditionalMarginLabelValueContainer>
            <AdditionalMarginLabelValueContainer key={`${distance}${labelsIndex++}`}>
                {distance}
            </AdditionalMarginLabelValueContainer>
        </>
);

const AdditionalMarginLabelValueContainer = styled(LabelValueContainer)`
    &:not(:first-child) {
        margin-left: 3rem;
    }
`;