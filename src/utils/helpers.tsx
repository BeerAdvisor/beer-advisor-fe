import React, { ReactNode } from 'react';
import { map , reduce, addIndex } from 'ramda';

import { SMALL_BP_UP } from '../theme';
import styled from '../styled-components';

import { useMobileDevice } from './hooks';

// TODO: Label values will be redone as table
export const LabelValueContainer = styled.span`
    width: auto;

    ${SMALL_BP_UP} {
        &:not(:first-child) {
            margin-left: 2rem;
        }
    }
`;

export interface LabelValue {
    label: string;
    value?: ReactNode;
}

let labelsIndex = 0;
export const mapLabelValues = map<LabelValue, any>(
    ({ label, value }: LabelValue) => {
        const finalValue = ` ${value ? value : 'Unknown'}`;
        return (
            <LabelValueContainer key={`${label}${labelsIndex++}`}>
                {useMobileDevice() 
                    ? finalValue
                    : <>{label}:{finalValue}</>
                }
            </LabelValueContainer>
        );
    
    }
);

export const mapIndexed = addIndex<any>(map);
export const reduceIndexed = addIndex(reduce);
