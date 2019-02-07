import React from 'react';
import { Typography } from '@material-ui/core';
import { StepCard, BasicDivider, RevertedSmallerText } from '../../../../components';
import {
    HowToContainer,
    StepsContainer,
    DescriptionContainer,
    TextContainer,
    GeneralTextContainer,
    RevertedTextContainer,
} from './style';
import {
    MAIN_PAGE_STEP_1,
    MAIN_PAGE_STEP_2,
    MAIN_PAGE_STEP_3,
    MAING_PAGE_STEP_DESCRIPTION_2,
    MAING_PAGE_STEP_DESCRIPTION_1,
} from '../../../../texts/constants';

const STEP = 'STEP ';

export default () => {
    const firstStep = `${STEP}1`;
    const secondStep = `${STEP}2`;
    const thirdStep = `${STEP}3`;

    return (
        <HowToContainer>
            <RevertedTextContainer>
                <RevertedSmallerText noWrap variant="h3">
                        HOW IT WORKS?
                </RevertedSmallerText>
            </RevertedTextContainer>
            <DescriptionContainer>
                <StepsContainer>
                    <StepCard heading={firstStep} text={MAIN_PAGE_STEP_1} />
                    <StepCard heading={secondStep} text={MAIN_PAGE_STEP_2} />
                    <StepCard heading={thirdStep} text={MAIN_PAGE_STEP_3} />
                </StepsContainer>
                <GeneralTextContainer>               
                    <TextContainer>
                        <BasicDivider />
                        <Typography variant="subtitle2">
                            {MAING_PAGE_STEP_DESCRIPTION_1}
                        </Typography>
                    </TextContainer>
                    <TextContainer>
                        <BasicDivider />
                        <Typography variant="subtitle2">
                            {MAING_PAGE_STEP_DESCRIPTION_2}
                        </Typography>
                    </TextContainer>
                </GeneralTextContainer>
            </DescriptionContainer>
        </HowToContainer>
    );
};
