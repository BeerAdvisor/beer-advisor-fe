import React from 'react';
import { Typography } from '@material-ui/core';

import { ArrowRight, KeyboardArrowDown, KeyboardArrowUp } from '../../../Icons';
import { mapLabelValues, LabelValue } from '../../../../utils';

import {
    InfoCardStyled,
    InfoCardContainer,
    InfoCardColumn,
    InfoCardRow,
    LeftDetailContainer,
    RightDetail,
    BottomLink,
    BottomLinkContainer,
} from './style';
import { InfoCardProps } from './types';

export default ({
    name,
    color,
    avatar,
    labelValues,
    bottomLink,
    onClick,
    expanded,
    isFirst,
    isLast,
    onInfoClick,
    ...other
}: InfoCardProps) => {
    return (
        <InfoCardStyled
            onClick={onClick}
            isFirst={isFirst}
            isLast={isLast}
            {...other}
        >
            {bottomLink && (
                <BottomLinkContainer color={color}>
                    <BottomLink>{bottomLink}</BottomLink>
                    {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </BottomLinkContainer>
            )}
            <InfoCardContainer>
                {avatar 
                ? <LeftDetailContainer src={avatar} />
                : <LeftDetailContainer as={'div'} />
                }
                <InfoCardColumn>
                    <Typography variant="subtitle1">{name}</Typography>
                    <InfoCardRow>{mapLabelValues(labelValues)}</InfoCardRow>
                </InfoCardColumn>
            </InfoCardContainer>
            <RightDetail
                color={color}
                onClick={onInfoClick}
                isFirst={isFirst}
                isLast={isLast}
            >
                <ArrowRight fontSize="large" />
            </RightDetail>
        </InfoCardStyled>
    );
};
