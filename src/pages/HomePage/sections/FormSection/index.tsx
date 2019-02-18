import React from 'react';
import { Typography } from '@material-ui/core';

import { RevertedText } from '../../../../components';
import { CombinedForms } from '../../../../forms';

import { HeadElementsContainer, RevertedTextWrapper, HorizontalContainer, FormWrapper } from './style';

export default (props: any) => {
    return (
            <HeadElementsContainer>
                <HorizontalContainer>
                    <RevertedTextWrapper>
                        <RevertedText noWrap variant="h1">
                            LOVE BEER?
                        </RevertedText>
                    </RevertedTextWrapper>
                    <FormWrapper>
                        <CombinedForms {...props} />
                    </FormWrapper>
                </HorizontalContainer>
                <Typography variant="subtitle1">LET US HELP YOU TO FIND THE BEST ONE!</Typography>
            </HeadElementsContainer>
    );
};
