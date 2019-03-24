import React from 'react';
import { map } from 'ramda';
import { Typography } from '@material-ui/core';

import { ArrowRight } from '../../Icons';

import {
    SearchResulCardStyled,
    SearchResultContainer,
    SearchResultColumn,
    SearchResultRow,
    LabelValueContainer,
    LeftDetailContainer,
    RightDetail,
} from './style';

export interface LabelValue {
    label: string;
    value?: string;
}

export interface SearchResulCardProps {
    labelValues: LabelValue[];
    name?: string;
}

export default ({ name, labelValues }: SearchResulCardProps) => {
    return (
        <SearchResulCardStyled>
            <SearchResultContainer>
                <LeftDetailContainer />
                <SearchResultColumn>
                    <Typography variant="subtitle1">{name}</Typography>
                    <SearchResultRow>
                        {map(
                            ({ label, value }) => (
                                <LabelValueContainer>
                                    {label}:{` ${value}`}
                                </LabelValueContainer>
                            ),
                            labelValues
                        )}
                    </SearchResultRow>
                </SearchResultColumn>
            </SearchResultContainer>
            <RightDetail> 
                <ArrowRight fontSize="large" />
            </RightDetail>
        </SearchResulCardStyled>
    );
};
