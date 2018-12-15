import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '15px',
        height: '40px',
    },
    input: {
        backgroundColor: '#e8e8e8',
        borderRadius: '25px',
        // TODO: Media queries
        height: '40px',
        padding: '0px 14px',
    },
    notchedOutline: {
        borderRadius: '25px',
    },
});

const SearchField = (props: TextFieldProps) => {
    const { root, input, notchedOutline } = useStyles();

    return (
         // @ts-ignore
        <TextField
            id="search-bar"
            variant="outlined"
            classes={{ root }}
            InputProps={{ classes: { input, notchedOutline } }}
            {...props}
        />
    );
};

export default SearchField;
