import React from 'react';
import { InputBase, InputLabel, FormControl } from '@material-ui/core';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '31px',
        height: '40px',
    },
    input: {
        backgroundColor: '#e8e8e8',
        borderRadius: '25px',
        // TODO: Media queries
        height: '40px',
        padding: '0px 14px',
    },
    labelRoot: {

    },
});

const SearchField = (props: any) => {
    const { root, input, labelRoot } = useStyles();
    const { label, placeholder } = props;

    return (
         // @ts-ignore
        <FormControl classes={{ root }}> 
        {label && (<InputLabel shrink={true} className={labelRoot} htmlFor="bootstrap-input">
          {label}
        </InputLabel>)}
        <InputBase
            id="search-bar"
            classes={{ input }}
            placeholder={placeholder}
        />
        </FormControl>
    );
};

export default SearchField;
