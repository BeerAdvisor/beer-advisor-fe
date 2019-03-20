import React from 'react';

import { CombinedForms } from '../../forms';
import { SearchResultCard } from '../../components';

import { BeerResultContainer, FormContainer, SearchResultContainer } from './style';

const searchResultProps = {
    labelValues: [
        { label: 'Rating', value: '4.5' },
        { label: 'Strong', value: '5.8' },
        { label: 'Type', value: 'Black' },
        { label: 'Minimal price', value: '40 CZK' },
    ],
    name: 'Kozel Black',
};

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <FormContainer>
            <CombinedForms variant="small" {...props} />
        </FormContainer>
        <SearchResultContainer>
            <SearchResultCard {...searchResultProps} />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
