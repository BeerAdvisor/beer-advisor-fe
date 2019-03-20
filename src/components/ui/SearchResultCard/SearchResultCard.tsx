import React from 'react';
import { map } from 'ramda';
import { FormLabel } from '@material-ui/core';

import { SearchResulCardStyled, SearchResultContainer, SearchResultColumn, SearchResultBigValue} from './style';

export interface LabelValue {
    label: string;
    value: string;
}

export interface SearchResulCardProps {
    labelValues: LabelValue[];
}

export default ({ labelValues }: SearchResulCardProps) => {

    return (
        <SearchResulCardStyled>
            <SearchResultContainer>
                <SearchResultColumn>
                    { map(({label, value}) => (
                        <React.Fragment>
                            <FormLabel>{label}</FormLabel>
                            <SearchResultBigValue>{value}</SearchResultBigValue>
                        </React.Fragment>
                    ), labelValues)}
                </SearchResultColumn>
            </SearchResultContainer>
        </SearchResulCardStyled>
    );
};
