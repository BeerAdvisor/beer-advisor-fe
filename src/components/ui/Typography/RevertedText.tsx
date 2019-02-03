import React, { ReactNode } from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        transform: 'translate(-40%,145%) rotate(-90deg)',
        transformPrigin: '0 0',
        '&:after' :{
            content: '',
            float: 'left',
            marginTop: '100%',
        },
    },
}));

export const RevertedText = (props: TypographyProps) => {
    const { root } = useStyles();

    return (<Typography {...props} classes={{ root }} />);
};
