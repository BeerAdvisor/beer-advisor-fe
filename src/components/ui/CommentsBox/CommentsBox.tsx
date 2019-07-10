import React from 'react';
import { Typography } from '@material-ui/core';

import { CommentsBoxContainer } from './style';

export interface CommentsBoxProps {
    children: React.ReactNode | React.ReactNode[];
}
export const CommentsBox = ({ children, ...other }: CommentsBoxProps) => 
    (
        <CommentsBoxContainer>
            <Typography variant="subtitle2">Comments</Typography>
            {children}
        </CommentsBoxContainer>
    );
