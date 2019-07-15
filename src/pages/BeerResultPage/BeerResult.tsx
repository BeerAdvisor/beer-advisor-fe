import React from 'react';
import { Route } from 'react-router';

import { BeerInfoCard, BarInfoCard } from '../../containers';

import { BeerResultContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <SearchResultContainer>
                <Route
                    path="/form/bars"
                    component={BarInfoCard}
                />
                 <Route
                    path="/form/beers"
                    component={BeerInfoCard}
                />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
