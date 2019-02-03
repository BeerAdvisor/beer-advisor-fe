import React from 'react';
import {
    HomePageContainer,
    FormWrapper,
    RevertedTextWrapper,
    HorizontalContainer,
    HeadElementsContainer,
    InfoTextContainer,
    VerticalTextContainer,
    HeadElementsWrapper
} from './style';
import { Tabs, RevertedText } from '../../components';
import { MainForm } from '../../forms';
import { Typography } from '@material-ui/core';
import { ExtraLargeText, LargeText } from '../../components/Typography/Texts';

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
            <HeadElementsWrapper>
                <HeadElementsContainer>
                    <HorizontalContainer>
                        <RevertedTextWrapper>
                            <RevertedText noWrap variant="h1">
                                LOVE BEER?
                            </RevertedText>
                        </RevertedTextWrapper>
                        <FormWrapper>
                            <Tabs>
                                <MainForm {...layoutProps} />
                                <MainForm {...layoutProps} />
                            </Tabs>
                        </FormWrapper>
                    </HorizontalContainer>
                    <Typography variant="subtitle1">LET US HELP YOU TO FIND THE BEST ONE!</Typography>
                </HeadElementsContainer>
            </HeadElementsWrapper>
            <InfoTextContainer>
                <ExtraLargeText>W</ExtraLargeText>
                <VerticalTextContainer>
                    <LargeText>HAT</LargeText>
                    <LargeText dark>DO</LargeText>
                    <LargeText dark>WE DO</LargeText>
                </VerticalTextContainer>
                <ExtraLargeText style={{ position: 'relative', left: '-40px' }}>?</ExtraLargeText>
            </InfoTextContainer>
        </HomePageContainer>
    );
};

export default HomePage;
