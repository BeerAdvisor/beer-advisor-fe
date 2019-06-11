import React from 'react';
import { Typography } from '@material-ui/core';

import Input from '../Input/Input';

import { CommentsBoxContainer, LimitedWidthButton } from './style';

export interface CommentsBoxProps {
    children: React.ReactNode | React.ReactNode[];
}
export const CommentsBox = ({ children, ...other }: CommentsBoxProps) => {

    return (
        <CommentsBoxContainer>
            <Typography variant="subtitle2">Comments</Typography>
            {children}
            <Input rows={3} multiline placeholder="Leave your comment" />
            <LimitedWidthButton color="primary" variant="outlined" type="submit">
                Leave a comment
            </LimitedWidthButton>
        </CommentsBoxContainer>
    );
};
