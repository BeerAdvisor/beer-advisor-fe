import React from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme, Button as MaterialButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: '60px',
        [theme.breakpoints.down('sm')]: {
          width: '120px',
        },
        [theme.breakpoints.up('md')]: {
          width: '300px',
        },
        [theme.breakpoints.up('lg')]: {
          width: '560px',
        },
      },
}));

export const Button = (props: any) => {
    const { root } = useStyles();

    return <MaterialButton {...props} />;
};

export default Button;
    