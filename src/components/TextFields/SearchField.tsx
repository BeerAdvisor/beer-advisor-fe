import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
// @ts-ignore
import { makeStyles } from '@material-ui/styles';
import { FormControlClassKey } from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root:  {
     width: '100%',
     padding: '5px',
    },
    input: {
        backgroundColor: '#e8e8e8',
        borderRadius: '25px',
    },
    notchedOutline: {
        borderRadius: '25px',
    }
 });

const SearchField = (props: TextFieldProps) => {
    const { root, input, notchedOutline } = useStyles();

    // @ts-ignore
    return <TextField id="search-bar" variant="outlined" classes={{ root }} InputProps={{ classes: { input, notchedOutline }}} {...props} />;
};

export default SearchField;
