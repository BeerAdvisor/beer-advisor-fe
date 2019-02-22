import React from 'react';

import { CombinedForms } from '../../forms';
import { SearchResultCard } from '../../components';

import { BeerResultContainer, FormContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <FormContainer>
            <CombinedForms variant="small" {...props} />
        </FormContainer>
        <SearchResultContainer>
            <SearchResultCard labelValues={[{label: 'Rating', value: '5.8%'}]} />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
