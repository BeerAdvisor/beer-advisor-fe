import React, { ReactNode } from 'react';
import { map } from 'ramda';

import styled from '../styled-components';

export const LabelValueContainer = styled.span`
    width: 10rem;
    &:not(:first-child) {
        margin-left: 2rem;
    }
`;

export interface LabelValue {
    label: string;
    value?: ReactNode;
}

let labelsIndex = 0;
export const mapLabelValues = map<LabelValue, any>(
    ({ label, value }: LabelValue) => (
        <LabelValueContainer key={`${label}${labelsIndex++}`}>
            {label}:{` ${value ? value : 'Unknown'}`}
        </LabelValueContainer>
    )
);
