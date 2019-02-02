import React from 'react';
import { HomePageContainer, FormWrapper, TextWrapper, HeadElementsContainer } from './style';
import { Tabs } from '../../components';
import { MainForm } from '../../forms';
import { RevertedText } from '../../components/Typography/RevertedText';
 
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
            <HeadElementsContainer>
                    <TextWrapper>
                        <RevertedText noWrap variant="h1">LOVE BEER?</RevertedText>
                    </TextWrapper>
                    <FormWrapper>
                         <Tabs>
                            <MainForm {...layoutProps} />
                            <MainForm {...layoutProps} />
                        </Tabs>
                    </FormWrapper>
            </HeadElementsContainer>
        </HomePageContainer>
    );
};

export default HomePage;
