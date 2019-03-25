import React, { ReactNode } from 'react';
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
}

export default ({ name, labelValues, bottomLink }: InfoCardProps) => {
    return (
        <InfoCardStyled>
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
                    {bottomLink && <BottomLink>{bottomLink}</BottomLink>}
                </InfoCardColumn>
            </InfoCardContainer>
            <RightDetail> 
                <ArrowRight fontSize="large" />
            </RightDetail>
        </InfoCardStyled>
    );
};
