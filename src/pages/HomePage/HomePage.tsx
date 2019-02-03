import React from 'react';
import { HomePageContainer, Zhopa } from './style';
import { FormLayout, PurposeLayout } from './layouts';

export const HomePage = (props: any) => {
    return (
        <HomePageContainer>
            <Zhopa>
                <FormLayout />
                <PurposeLayout />
            </Zhopa>
        </HomePageContainer>
    );
};

export default HomePage;
