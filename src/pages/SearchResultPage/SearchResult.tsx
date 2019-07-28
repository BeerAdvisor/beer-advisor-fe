import React, { useEffect } from 'react';
import { Route } from 'react-router';

import { BeerInfoCard, BarInfoCard } from '../../containers';
import { getCurrentUserPosition } from '../../utils';

import { SearchResultWrapper, SearchResultContainer } from './style';

export const SearchResultPage = (props: any) => {
    useEffect(() => getCurrentUserPosition(), []);

    return (
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
    )
};

export default SearchResultPage;
