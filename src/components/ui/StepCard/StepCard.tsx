import React from 'react';
import { StepCardContainer } from './style';
import { Typography } from '@material-ui/core';

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
