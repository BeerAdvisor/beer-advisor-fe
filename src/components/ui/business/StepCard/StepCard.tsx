import React from 'react';
import { Typography } from '@material-ui/core';

import { StepCardContainer } from './style';

export interface StepCardProps {
    heading: string;
    text: string;
}

export default ({ heading, text }: StepCardProps) => (
    <StepCardContainer>
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="subtitle2">{text}</Typography>
    </StepCardContainer>
);
