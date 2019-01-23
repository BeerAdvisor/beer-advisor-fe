import React from 'react';
import { HomePageContainer, FormWrapper } from './style';
import { Tabs } from '../../components';
import { MainForm } from '../../forms';
 
export const HomePage = (props: any) => {

    const layoutProps = {
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Beer name',
        selectLabel: 'Beer type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
        <HomePageContainer>
            <FormWrapper>
                 <Tabs>
                    <MainForm {...layoutProps} />
                    <MainForm {...layoutProps} />
                </Tabs>
            </FormWrapper>
        </HomePageContainer>
    );
};

export default HomePage;
