import React, { MouseEvent } from 'react';
import { Typography } from '@material-ui/core';

import { ArrowRight, KeyboardArrowDown, KeyboardArrowUp } from '../../Icons';
import { mapLabelValues, LabelValue } from '../../../utils';

import {
    InfoCardStyled,
    InfoCardContainer,
    InfoCardColumn,
    InfoCardRow,
    LeftDetailContainer,
    RightDetail,
    BottomLink,
    BottomLinkContainer,
    InfoCardStyledProps,
} from './style';

export interface InfoCardProps extends InfoCardStyledProps {
    labelValues: LabelValue[];
    name?: string;
    bottomLink?: string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onInfoClick?: () => void;
    expanded?: boolean;
}

export default ({ name, labelValues, bottomLink, onClick, expanded, isFirst, isLast, onInfoClick, ...other }: InfoCardProps) => {
    return (
        <InfoCardStyled onClick={onClick} isFirst={isFirst} isLast={isLast} {...other}>
            {bottomLink && (
                <BottomLinkContainer>
                    <BottomLink>{bottomLink}</BottomLink>
                    {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </BottomLinkContainer>
            )}
            <InfoCardContainer>
                <LeftDetailContainer />
                <InfoCardColumn>
                    <Typography variant="subtitle1">{name}</Typography>
                    <InfoCardRow>
                        {mapLabelValues(labelValues)}
                    </InfoCardRow>
                </InfoCardColumn>
            </InfoCardContainer>
            <RightDetail onClick={onInfoClick} isFirst={isFirst} isLast={isLast}> 
                <ArrowRight fontSize="large" />
            </RightDetail>
        </InfoCardStyled>
    );
};
