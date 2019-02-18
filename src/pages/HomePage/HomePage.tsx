import React from 'react';

import { HomePageContainer, Zhopa } from './style';
import { FormSection, PurposeSection, HowToSection } from './sections';
import OportunitiesSection from './sections/OpportunitiesSection';

export const HomePage = (props: any) => {
    return (
        <HomePageContainer>
            <Zhopa>
                <FormSection {...props} />
                <PurposeSection />
                <HowToSection />
                <OportunitiesSection />
            </Zhopa>
        </HomePageContainer>
    );
};

export default HomePage;
