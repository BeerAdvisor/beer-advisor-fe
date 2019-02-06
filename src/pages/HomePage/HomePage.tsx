import React from 'react';
import { HomePageContainer, Zhopa } from './style';
import { FormSection, PurposeSection, HowToSection } from './layouts';

export const HomePage = (props: any) => {
    return (
        <HomePageContainer>
            <Zhopa>
                <FormSection />
                <PurposeSection />
                <HowToSection />
            </Zhopa>
        </HomePageContainer>
    );
};

export default HomePage;
