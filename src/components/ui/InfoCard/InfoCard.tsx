import React, { ReactNode, useCallback, MouseEvent } from 'react';
import { map } from 'ramda';
import { Typography } from '@material-ui/core';

import { ArrowRight } from '../../Icons';

import {
    InfoCardStyled,
    InfoCardContainer,
    InfoCardColumn,
    InfoCardRow,
    LabelValueContainer,
    LeftDetailContainer,
    RightDetail,
    BottomLink,
} from './style';

export interface LabelValue {
    label: ReactNode;
    value?: ReactNode;
}

export interface InfoCardProps {
    labelValues: LabelValue[];
    name?: string;
    bottomLink?: string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default ({ name, labelValues, bottomLink, onClick }: InfoCardProps) => {
    return (
        <InfoCardStyled onClick={onClick}>
            {bottomLink && <BottomLink>{bottomLink}</BottomLink>}
            <InfoCardContainer>
                <LeftDetailContainer />
                <InfoCardColumn>
                    <Typography variant="subtitle1">{name}</Typography>
                    <InfoCardRow>
                        {map(
                            ({ label, value }) => (
                                <LabelValueContainer>
                                    {label}:{` ${value}`}
                                </LabelValueContainer>
                            ),
                            labelValues
                        )}
                    </InfoCardRow>
                </InfoCardColumn>
            </InfoCardContainer>
            <RightDetail> 
                <ArrowRight fontSize="large" />
            </RightDetail>
        </InfoCardStyled>
    );
};
