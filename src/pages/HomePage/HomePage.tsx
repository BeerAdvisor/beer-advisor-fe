import React from 'react';

import { CombinedForms } from '../../forms';

import { HomePageContainer } from './style';

export const HomePage = (props: any) => {
    return (
        <HomePageContainer>
            <CombinedForms {...props} />
        </HomePageContainer>
    );
};

export default HomePage;
