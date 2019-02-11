import React from 'react';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme, Button as MaterialButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontFamily: 'Staatliches',
        backgroundColor: '#00b35c',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08);',
        borderRadius: '35px',
        fontSize: '30px',
        letterSpacing: '1.2px',
        color: '#FFF',
        padding: '0',
        width: '280px',
        height: '48px',
      },
}));

export const Button = (props: any) => {
    const { root } = useStyles();

    return <MaterialButton classes={{root}} {...props} />;
};

export default Button;
    