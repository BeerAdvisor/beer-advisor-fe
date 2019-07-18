import React from 'react';
import { Route } from 'react-router';

import { BeerInfoCard, BarInfoCard } from '../../containers';

import { SearchResultWrapper, SearchResultContainer } from './style';

export const SearchResultPage = (props: any) => (
    <SearchResultWrapper>
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
    </SearchResultWrapper>
);

export default SearchResultPage;
