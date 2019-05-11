import React from 'react';

import { BeerInfoCard } from '../../containers';

import { BeerResultContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <SearchResultContainer>
            <BeerInfoCard {...props as any} />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
