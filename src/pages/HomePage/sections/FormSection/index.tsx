import React from 'react';
import { HeadElementsContainer, RevertedTextWrapper, HorizontalContainer, FormWrapper } from './style';
import { RevertedText, Tabs } from '../../../../components';
import { MainForm } from '../../../../forms';
import { Typography } from '@material-ui/core';

export default () => {
    const layoutProps = {
        searchFieldPlaceholder: 'Find a beer', // TODO: constants, export to separate logic components
        searchFieldLabel: 'Beer name',
        selectLabel: 'Beer type',
        sliderMaxValue: 100,
        sliderMinValue: 0,
        sliderStep: 1,
    };

    return (
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
    );
};
