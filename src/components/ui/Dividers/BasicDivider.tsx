import React from 'react';
import { Divider, Theme } from '@material-ui/core';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
        root: {
            width: '100px',
            height: '8px',
            borderRadius: '3.6px',
            backgroundColor: '#000000',
            marginBottom: '20px',
        },
    })
);

export default () => {
    const { root } = useStyles();

    return <Divider classes={{root}} />;
};
