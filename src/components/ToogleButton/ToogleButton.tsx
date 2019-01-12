import React from 'react';
import MaterialToogleButton, { ToggleButtonProps } from '@material-ui/lab/ToggleButton';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    selected: {
        borderColor: theme.palette.primary.main,
        border: '2px solid',
        '&:after' :{
            backgroundColor: 'transparent',
        },
    },
    root: {
        borderRadius: '25px !important',
        width: '250px',
        height: '50px',
        boxShadow: '3px 0 10px 0 rgba(0, 0, 0, 0.11)',
        fontSize: '18px',
        color: '#884212',
    },
}));

const ToggleButton = (props: ToggleButtonProps) => {
    const { root, selected} = useStyles();
    const { children } = props;

    return ( 
    <MaterialToogleButton classes={{ root, selected }} {...props}>
        {children}
    </MaterialToogleButton>);
};

export default ToggleButton;