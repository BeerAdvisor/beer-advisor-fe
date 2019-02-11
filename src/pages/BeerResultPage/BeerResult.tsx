import React from 'react';
import { CombinedForms } from '../../forms';
import { BeerResultContainer, FormContainer, SearchResultContainer } from './style';

export const BeerResultPage = (props: any) => (
    <BeerResultContainer>
        <FormContainer>
            <CombinedForms variant="small" {...props} />
        </FormContainer>
        {/* <SearchResultContainer>

        </SearchResultContainer> */}
    </BeerResultContainer>
);

export default BeerResultPage;
