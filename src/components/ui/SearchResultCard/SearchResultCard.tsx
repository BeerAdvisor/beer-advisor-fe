import React from 'react';
import { map } from 'ramda';
import { Typography } from '@material-ui/core';

import {
    SearchResulCardStyled,
    SearchResultContainer,
    SearchResultColumn,
    SearchResultRow,
    LabelValueContainer,
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
        </SearchResulCardStyled>
    );
};
