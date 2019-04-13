import React from 'react';

import { CombinedForms } from '../../forms';
import { BeerInfoCard } from '../../containers';

import { BeerResultContainer, FormContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <FormContainer>
            <CombinedForms variant="small" {...props} />
        </FormContainer>
        <SearchResultContainer>
            <BeerInfoCard {...props as any} />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
