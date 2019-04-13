import React from 'react';

import { CombinedForms } from '../../forms';
import { ExpandedInfoCard } from '../../components';
import { BeerInfoCard } from '../../containers';

import { BeerResultContainer, FormContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <FormContainer>
            <CombinedForms variant="small" {...props} />
        </FormContainer>
        <SearchResultContainer>
            <ExpandedInfoCard listName="zhopa" />
            <BeerInfoCard {...props as any} />
        </SearchResultContainer>
    </BeerResultContainer>
);

export default BeerResultPage;
