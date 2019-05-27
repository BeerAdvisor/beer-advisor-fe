import React from 'react';
import { Typography } from '@material-ui/core';

import { KeyboardArrowDown, KeyboardArrowUp } from '../../Icons';
import { Rating } from '../Rating';
import { BasicDivider } from '../Dividers';
import { mapLabelValues } from '../../../utils';

import { InfoCardProps } from './types';
import {
    InfoCardStyled,
    InfoCardContainer,
    InfoCardColumn,
    InfoCardRow,
    LeftDetailContainer,
    BottomLink,
    BottomLinkContainer,
    MobileInfoCardTop,
    MainInfoWrapper,
} from './style';

export const MobileInfoCard = ({
    name,
    labelValues,
    bottomLink,
    onClick,
    expanded,
    onInfoClick,
    rating,
    ...other
}: InfoCardProps) => (
    <InfoCardStyled onClick={onClick} {...other}>
        <InfoCardContainer>
            <MobileInfoCardTop>
                <LeftDetailContainer />
                <MainInfoWrapper>
                    <Typography variant="subtitle1">{name}</Typography>
                    {/* Fall back to add rating, mobile component */}
                    {rating && <Rating filled={rating} disabled />}
                </MainInfoWrapper>
            </MobileInfoCardTop>
            <BasicDivider />
            <InfoCardColumn>
                {mapLabelValues(labelValues)}
            </InfoCardColumn>
            <BasicDivider />
            {bottomLink && (
            <BottomLinkContainer>
                <BottomLink>{bottomLink}</BottomLink>
                {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </BottomLinkContainer>
        )}
        </InfoCardContainer>
    </InfoCardStyled>
);

export default MobileInfoCard;
