import React, { ReactNode } from 'react';
import { map } from 'ramda';

import styled from '../styled-components';

export const LabelValueContainer = styled.span`
    &:not(:first-child) {
        margin-left: 2rem;
    }
`;

export interface LabelValue {
    label: ReactNode;
    value?: ReactNode;
}

export const mapLabelValues = map<LabelValue, any>(
    ({ label, value }: LabelValue) => (
        <LabelValueContainer>
            {label}:{` ${value ? value : 'Unknown'}`}
        </LabelValueContainer>
    )
);
