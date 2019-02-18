import React from 'react';
import { Typography } from '@material-ui/core';

import {
    ExtraLargeText,
    LargeText,
    VerticalDivider,
    Button,
} from '../../../../components';
import {
    MAIN_PAGE_OPPORTUNNTIES_LIST_NAME,
    MAIN_PAGE_OPPORTUNNTIES_LIST_1,
    MAIN_PAGE_OPPORTUNNTIES_LIST_2,
    MAIN_PAGE_OPPORTUNNTIES_LIST_3,
} from '../../../../texts/constants';

import {
    InfoTextContainer,
    VerticalTextContainer,
    OpportunitiesSection,
    TopDownLeter,
    ButtonTextContainer,
    ExamplesContainer,
} from './style';

export default () => (
    <OpportunitiesSection>
        <InfoTextContainer>
            <TopDownLeter>
                <ExtraLargeText>W</ExtraLargeText>
            </TopDownLeter>
            <VerticalTextContainer>
                <LargeText>ORE</LargeText>
                <LargeText dark>Opportunities</LargeText>
                <ButtonTextContainer>
                    <LargeText dark>IF YOU</LargeText>
                    <Button style={{ marginLeft: '20px' }}>SIGN IN</Button>
                </ButtonTextContainer>
            </VerticalTextContainer>
        </InfoTextContainer>
        <VerticalDivider />
        <ExamplesContainer>
            <Typography variant="subtitle1" color="textPrimary">
                {MAIN_PAGE_OPPORTUNNTIES_LIST_NAME}
            </Typography>
            <Typography variant="subtitle2">
                {MAIN_PAGE_OPPORTUNNTIES_LIST_1}
            </Typography>
            <Typography variant="subtitle2">
                {MAIN_PAGE_OPPORTUNNTIES_LIST_2}
            </Typography>
            <Typography variant="subtitle2">
                {MAIN_PAGE_OPPORTUNNTIES_LIST_3}
            </Typography>
        </ExamplesContainer>
    </OpportunitiesSection>
);
