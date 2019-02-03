import React from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme, Button as MaterialButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: 'Staatliches',
        backgroundColor: '#00b35c',
        boxShadow: '1px 0 13.6px 2.4px rgba(0, 0, 0, 0.4)',
        borderRadius: '35px',
        fontSize: '48px',
        letterSpacing: '1.2px',
        color: '#FFF',
        padding: '0',
        [theme.breakpoints.down('sm')]: {
          fontSize: '14px',
          width: '160px',
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
    