import React from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme, Button as MaterialButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: '#531403',
        boxShadow: '1px 0 13.6px 2.4px rgba(0, 0, 0, 0.4)',
        borderRadius: '35px',
        fontSize: '48px',
        letterSpacing: '1.2px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
          width: '120px',
        },
        [theme.breakpoints.up('md')]: {
          width: '300px',
        },
        [theme.breakpoints.up('lg')]: {
          width: '460px',
          height: '70px',
        },
      },
}));

export const Button = (props: any) => {
    const { root } = useStyles();

    return <MaterialButton classes={{root}} {...props} />;
};

export default Button;
    